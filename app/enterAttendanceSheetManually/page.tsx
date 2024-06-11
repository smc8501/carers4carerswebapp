import { Autocomplete, Button, Container, Grid, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useFormik } from "formik";
import * as Yup from 'yup';


export default function EnterAttendanceSheetManually() {
    const formik = useFormik({
        initialValues: {
            activitySessionDate:'',
            numOfNonRegistered:null,
            carer:'',
            cared_for:'',
            activityName:'',
        },
        validationSchema: Yup.object({
            activitySessionDate: Yup.date().required(),
            numOfNonRegistered: Yup.number().required(),
            carer: Yup.string().required(),
            cared_for: Yup.string().required(),
            activityName: Yup.string().required()
        }),
        onSubmit: values=> {
            console.log(values);
        }
    });
    return (
            <form onSubmit={formik.handleSubmit}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Container maxWidth='md'>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={5}>
                        <Autocomplete
                            id="activityName"
                            options={}
                            getOptionLabel={(option) => option.title}
                            defaultValue={}
                            filterSelectedOptions
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Activity Name"
                                placeholder="Activity Name"
                                error={formik.touched.activityName && Boolean(formik.errors.activityName)}
                                helperText={formik.touched.activityName && formik.errors.activityName}
                                
                            />
                            )}
                        /> 
                        </Grid>
                        <Grid item xs={6} sm={5}>
                            <DatePicker
                            id="activitySessionDate"
                            name="activitySessionDate"
                            label="Activity Session Date"
                            value={formik.values.activitySessionDate}
                            onChange={formik.handleChange}
                            onError={formik.touched.activitySessionDate && Boolean(formik.errors.activitySessionDate)}
                            />

                        </Grid>
                        <Grid item xs={6} sm={5}>
                            <Autocomplete
                                multiple
                                id="carer"
                                options={}
                                getOptionLabel={(option) => option.title}
                                defaultValue={}
                                filterSelectedOptions
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Carer"
                                    placeholder="Carer"
                                />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6} sm={5}>
                            <Autocomplete
                                multiple
                                id="cared_for"
                                options={}
                                getOptionLabel={(option) => option.title}
                                defaultValue={}
                                filterSelectedOptions
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Cared-for"
                                    placeholder="Cared-for"
                                />
                                )}
                            />
                    </Grid>
                    <Grid item xs={6} sm={5}>
                        <Button
                        type="submit"></Button>
                    </Grid>
                </Grid>
            </Container>

                </LocalizationProvider>
            </form>
        
 
    );
}