"use client";
import React, { useRef, useEffect } from 'react';
import { TableauViz, TableauEventType } from '@tableau/embedding-api';
export default function ReportViz() {
    const viz = new TableauViz();
    viz.src = "https://public.tableau.com/views/FYPReportViz/Sheet1?:language=en-GB&publish=yes&:sid=&:display_count=n&:origin=viz_share_link";
    document.getElementById('tableauViz')?.appendChild(viz);

    return (
        <>
    
            <div id="tableauViz"></div>
                    
        </>    
    );

}

