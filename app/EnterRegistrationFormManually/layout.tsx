
'use client'
import { ThemeProvider } from "@emotion/react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "../theme";
import React from "react";

export default function EnterRegistrationFormLayout({children}: {children: React.ReactNode}) {
    return (
      <html lang="en">
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://cdn.form.io/formiojs/formio.full.min.css"/>
            <script src="https://cdn.form.io/formiojs/formio.full.min.js"></script>

        </head>
        <body>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
            {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    );
  }