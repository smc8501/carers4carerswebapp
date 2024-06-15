"use client";
import React, { useRef, useEffect } from 'react';
import { TableauViz, TableauEventType } from '@tableau/embedding-api';
import { Box, Container, Grid } from '@mui/material';
export default function ReportViz() {
    const viz = new TableauViz();
    viz.src = "https://public.tableau.com/views/fyp_17183614815920/Sheet1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link";
    document.getElementById('tableauViz')?.appendChild(viz);

    return (      
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <div id="tableauViz"></div>
                </Grid>
            </Grid>
        </Container>

    );

}

