

import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';


export const metadata: Metadata = {
  title: "Report Generation Web Application",
  description: "For Generating Reports more Efficiently.",
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></script>

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
