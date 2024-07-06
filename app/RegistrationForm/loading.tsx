'use client'

import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loading() {
    return (
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        >
            <CircularProgress />
            <Typography variant="h6" mt={2}>
                Loading
            </Typography>
        </Box>
    );
}