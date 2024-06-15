'use client'

import { ThemeProvider } from "@emotion/react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "../theme";

export default function EnterRegistrationFormLayout(props: React.PropsWithChildren) {
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
            {props.children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    );
  }