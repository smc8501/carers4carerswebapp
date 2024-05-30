require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const tableauServer = process.env.TABLEAUSERVER;
const tableauSiteId = process.env.TABLEAU_SITE_ID;
const clientId = process.env.TABLEAU_CLIENT_ID;
const username = process.env.TABLEAU_USERNAME;
const password = process.env.TABLEAU_PASSWORD;

const getAuthToken = async (username, password) => {
    try {
        const response = await axios.post(`${tableauServer}/api/3.12/auth/signin`, {
            credentials: {
                name: username,
                password: password,
                site: {
                    contentUrl: tableauSiteId
                }
            }
        });
        return response.data.credentials.token;
    } catch (error) {
        console.error('Error getting auth token:', error);
        throw error;
    }
};

app.post('/tableau-integration', async (req, res) => {
    const { username, password, appName, appDescription } = req.body;

    try {
        const authToken = await getAuthToken(username, password);
        const response = await axios.post(
            `${tableauServer}/api/3.12/sites/${tableauSiteId}/connected-apps`,
            {
                connectedApp: {
                    name: appName,
                    description: appDescription,
                    embedType: 'full',
                    clientId: clientId
                }
            },
            {
                headers: {
                    'X-Tableau-Auth': authToken
                }
            }
        );

        res.json(response.data.connectedApp);
    } catch (error) {
        console.error('Error creating connected app:', error);
        res.status(500).json({ error: 'Failed to create connected app' });
    }
});

// Endpoint to get the client secret
app.get('/connected-app-secret/:appId', async (req, res) => {
    const { username, password } = req.query;
    const { appId } = req.params;

    try {
        const authToken = await getAuthToken(username, password);
        const response = await axios.get(
            `${tableauServer}/api/3.12/sites/${tableauSiteId}/connected-apps/${appId}/secrets`,
            {
                headers: {
                    'X-Tableau-Auth': authToken
                }
            }
        );

        res.json(response.data.secrets);
    } catch (error) {
        console.error('Error getting client secret:', error);
        res.status(500).json({ error: 'Failed to get client secret' });
    }
});

