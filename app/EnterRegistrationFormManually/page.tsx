
'use client'
import React, { Suspense, useEffect } from 'react';
import { Form, Formio } from '@formio/react';
import { useFormik } from 'formik';
import {  Container } from '@mui/material';
import * as Yup from 'yup';
import Loading from './loading';
import EnterRegistrationForm from '@/components/EnterRegistrationForm';


export default function Page() {
    

    
    return(
        
        <Suspense fallback={<Loading/>}>
            <EnterRegistrationForm formUrl='https://qvtoslceucaatao.form.io/enterregistrationformmanually'/>
        </Suspense>
            
    );
    

}


