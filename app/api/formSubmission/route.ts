import axios from 'axios';
import { NextResponse } from 'next/server';


export default async function GET() {
    const headers = new Headers(
        {"x-token": "{{process.env.X-TOKEN}}",
        "Content-type": "application/json"}
    );
    const response = await fetch('/enterregistrationformmanually/submission/{enterRegistrationFormManuallyId}')

}