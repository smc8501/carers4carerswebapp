import { NextResponse } from "next/server";
import axios from 'axios';


export async function GET() {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_FORMIO_API_URL, {
            headers: {
                'x-token': process.env.FORMIO_API_KEY
            }
        });
        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: error.response?.status || 500})
    }
}