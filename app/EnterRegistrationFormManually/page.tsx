'use client'

import React from 'react';
import { Form, Formio } from '@formio/react';
import { useFormik } from 'formik';
import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Link from 'next/link';


export default function Page() {
    window.onload = function() {
        Formio.createForm(document.getElementById('formio'), 'https://qvtoslceucaatao.form.io/enterregistrationformmanually');
      };
    
    return(
        <div id="formio"></div>
    );
    

}

