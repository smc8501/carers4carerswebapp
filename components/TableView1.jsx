"use client";

import { TableauEventType } from "@tableau/embedding-api";

const viz = document.querySelector('tableau-viz');

await new Promise((resolve, reject) => {
    viz.addEventListener(TableauEventType.FirstInteractive, () => {
        console.log('Viz is interactive!');
        resolve();
    });
});

const dashboard = await viz.workbok.activateSheetAsync();