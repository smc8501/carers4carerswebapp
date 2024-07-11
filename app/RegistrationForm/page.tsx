'use client';

import React, { Suspense, useState } from 'react';
import Loading from './loading';
import LoadForm from '@/components/LoadForm';
import { Alert, Button, Container, Snackbar } from '@mui/material';

 
export default function Page() {
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
   
    const handleSubmit = async ( submission: any) => {

        try {
            const response = await fetch('app/api/registrationFormSubmission', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({submission}),
            });
            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

        } catch (error: any) {
            setOpenError(true);
        }
    }
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSuccess(false);
        setOpenError(false);
    }
    
    return(
        <Container>
            <Suspense fallback={<Loading/>}>
                <LoadForm formUrl='https://isdpgoqoblbbykg.form.io/registrationform' onSubmit={handleSubmit}/>
                <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                        Registration submitter successfully!
                    </Alert>
                </Snackbar>
                <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                        Registration Form submission has failed.
                    </Alert>
                </Snackbar>
            </Suspense>

        </Container>
            
    );
    

}




