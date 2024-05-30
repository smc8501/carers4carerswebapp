"use client";

import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';


export default function Layout(props: React.PropsWithChildren) {
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        {props.children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}