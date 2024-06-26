'use client'

import React from 'react';
import { Form } from '@formio/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import EnterRegistrationForm from '@/components/EnterRegistrationForm';


export default function Page() {

    
    return(
        <EnterRegistrationForm/>
    );
    

}

