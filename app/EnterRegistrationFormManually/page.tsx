
'use client'
import React, { Suspense, useEffect } from 'react';
import { Form, Formio } from '@formio/react';
import { useFormik } from 'formik';
import {  Container } from '@mui/material';
import * as Yup from 'yup';
import Loading from './loading';


export default function Page() {
    useEffect(() => {
        Formio.createForm(document.getElementById('formio'), 'https://qvtoslceucaatao.form.io/enterregistrationformmanually');
    }, []);

    
    return(
        <Suspense fallback={<Loading/>}>
            <Container maxWidth="md">
                    <div id='formio'></div>
            </Container>

        </Suspense>
            
        
    );
    

}


