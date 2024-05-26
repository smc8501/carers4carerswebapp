'use client';

import { createTheme } from '@mui/material/styles';

import { ThemeOptions } from '@mui/material/styles/createTheme';

const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: 'Open Sans, Arial, sans-serif',
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    },
};
 

export const theme = createTheme(themeOptions);
