import React from 'react';
import { useFormik } from 'formik';
import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { formatRevalidate } from 'next/dist/server/lib/revalidate';


export default function EnterRegistrationFormManually() {
    const formik = useFormik({
        initialValues: {
            carer_fullName:'',
            carer_dob: null,
            carer_phone: null,
            carer_email: '',
            carer_currentAddress:'',
            carer_postcode:'',
            carer_gender:'',
            carer_ethnicity:'',
            carer_faith:'',
            carer_sexualOrientation:'',
            carer_hasHealthCondition:'',
            carer_hasHealthConditionAdd:'',
            carer_hasDisability:'',
            carer_hasDisabilityAdd:'',
            carer_hasAllergies: '',
            carer_hasAllergiesAdd:'',
            carer_nameDrSurgery:'',
            carer_referredBy:'',
            em_fullName:'',
            em_relationship:'',
            em_address:'',
            em_phone:'',
            cared_for_fullName:'',
            cared_for_relationship:'',
            cared_for_ageGroup:'',
            cared_for_hasHealthDiagnosis:'',
            image_consent:'',
            preferredContact:'',
        },
        validationSchema: Yup.object({
            carer_fullName: Yup.string().required("Please provide the carer's full name"),
            carer_dob: Yup.date().required("Please provide the carer's data of birth"),
            carer_phone: Yup.string().matches(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/).required("Please provide the carer's phone number"),
            carer_email: Yup.string().email().required("Please provide a valid email"),
            carer_currentAddress: Yup.string().required("Please provide the carer's current address"),
            carer_postcode: Yup.string().required("Please provide the carer's postcode"),
            carer_gender: Yup.string().required("Please provide the carer's gender"),
            carer_ethnicity: Yup.string().required("Please provide the carer's ethnicity"),
            carer_faith: Yup.string().required("Please provide the carer's faith or religion"),
            carer_sexualOrientation: Yup.string().required("Please provide the carer's sexual orientation"),
            carer_hasHealthCondition: Yup.boolean().required("Please provide an answer"),
            carer_hasHealthConditionAdd:Yup.string().required("Please provide additional information about the carer's health condition"),
            carer_hasDisability: Yup.boolean().required("Please provide an answer"),
            carer_hasDisabilityAdd: Yup.string().required("Please provide additional information about the carer's disability"),
            carer_hasAllergies: Yup.boolean().required("Please provide an answer"),
            carer_hasAllergiesAdd: Yup.string().required("Please provide additional information about the carer's allergies"),
            carer_nameDrSurgery: Yup.string().required("Please provide the name of the Doctor or Surgery"),
            carer_referredBy: Yup.string().required("Please provide how the carer got referred by"),
            em_fullName: Yup.string().required("Please provide the emergency contact's full name"),
            em_relationship: Yup.string().required("Please provide the emergency contact's relationship to the carer"),
            em_address: Yup.string().required("Please provide the emergency contact's address"),
            em_phone: Yup.string().required("Please provide the emergency contact's phone number"),
            cared_for_fullName: Yup.string().required("Please provide the cared-for's full name"),
            cared_for_ageGroup: Yup.string().required("Please provide the cared-for's age group"),
            cared_for_hasHealthDiagnosis: Yup.boolean().required("Please provide an answer"),
            cared_for_hasHealthDiagnosisAdd: Yup.string().required("Please provide additional information about the cared_for's health diagnosis"),
            image_consent: Yup.boolean().required("Please provide an answer"),
            preferredContact: Yup.string().required("Please provide the carer's preferred manner of contact"),

        }),
        onSubmit: values => {
            console.log(values);
        },
    });
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <form onSubmit={formik.handleSubmit}>
                <Container maxWidth='md'>
                        <Grid container spacing={2}>
                            <Box my={4}>
                                <Typography variant="h4" gutterBottom>
                                    Carer
                                </Typography>
                            </Box>
                            <Grid item xs={6} sm={5}>
                                <TextField
                                id="carer_fullName"
                                name="carer_fullName"
                                label="Full Name"
                                value={formik.values.carer_fullName}
                                error={formik.touched.carer_fullName && Boolean(formik.errors.carer_fullName)}
                                helperText={formik.touched.carer_fullName && formik.errors.carer_fullName}/>
                            </Grid>
                            <Grid item xs={6} sm={5}>
                                <DatePicker
                                id="carer_dob"
                                name="carer_dob"
                                label="Date of Birth"
                                value={formik.values.carer_dob}
                                onChange={formik.handleChange}
                                onError={formik.touched.carer_dob && Boolean(formik.errors.carer_dob)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={5}>
                                <TextField
                                id="carer_phone"
                                name="carer_phone"
                                label="Phone Number"
                                value={formik.values.carer_phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.carer_phone && Boolean(formik.errors.carer_phone)}
                                helperText={formik.touched.carer_phone && formik.errors.carer_phone}
                                variant="outlined"/>
                            </Grid>
                            <Grid item xs={6} sm={5}>
                                <TextField
                                id="carer_email"
                                name="carer_email"
                                label="Email"
                                value={formik.values.carer_email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.carer_email && Boolean(formik.errors.carer_email)}
                                helperText={formik.touched.carer_email && formik.errors.carer_email}
                                />
                            </Grid>
                            <Grid item xs={6} sm={5}>
                                <TextField
                                id="carer_currentAddress"
                                name="carer_currentAddress"
                                label="Current Address"
                                value={formik.values.carer_currentAddress}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.carer_currentAddress && Boolean(formik.errors.carer_currentAddress)}
                                helperText={formik.touched.carer_currentAddress && formik.errors.carer_currentAddress}
                                variant="outlined"/>
                            </Grid>
                            <Grid item xs={6} sm={5}>
                                <TextField
                                id="carer_postcode"
                                name="carer_postcode"
                                label="Postcode"
                                value={formik.values.carer_postcode}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.carer_postcode && Boolean(formik.errors.carer_postcode)}
                                helperText={formik.touched.carer_postcode && formik.errors.carer_postcode}
                                variant="outlined"/>
                            </Grid>
                            <Grid item xs={6} sm={5}>
                                <Box sx={{maxWidth: 195}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="carer_gender_label">Gender</InputLabel>
                                        <Select
                                        labelId="carer_gender_label"
                                        id="carer_gender"
                                        name="carer_gender"
                                        value={formik.values.carer_gender}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        label="Gender"
                                        error={formik.touched.carer_gender && Boolean(formik.errors.carer_gender)}
                                        variant="outlined">
                                            
                                        </Select>
                                    </FormControl>
                                </Box>

                            </Grid>
                            <Grid item xs={6} sm={5}></Grid>
                        </Grid>
                    </Container>
            </form>
        </LocalizationProvider>
    );
    

}

