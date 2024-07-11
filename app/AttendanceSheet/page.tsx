import { Autocomplete, Box, TextareaAutosize, TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container/Container";

export default function AttendanceSheet() {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
    }
    return (
        <Container maxWidth="sm" sx={{ mt: 4}}>
            <Typography variant="h4" component="h1" gutterBottom>
                Attendance Sheet
            </Typography>
            <Box component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap:2,
                maxWidth: '400px',
                margin: '0 auto',
            }}
            >
                <Autocomplete
                    options={{/*activities list*/}}
                    getOptionLabel={(option)=> option.label}
                    onChange={(event, newValue) => setSelectedActivity(newValue)}
                    renderInput={(params) => (
                        <TextField {...params} label="Select Activity" variant="outlined"/>
                    )}
                />
                <Autocomplete
                    multiple
                    options={carers}
                    getOptionLabel={(option) => option.label}
                    onchange={(event, newValue) => setSelectedCarers(newValue)}
                    renderInput={(params) => (
                        <TextField {...params} label="Select Carers" variant="outlined"/>
                    )}
                />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Select Session Date"
                        value={sessionDate}
                        onChange={(newDate) => setSessionDate(newDate)}
                        renderInput={(params) => <TextField {...params} variant="outlined"/>}
                    />
                </LocalizationProvider>

                <TextareaAutosize
                    minRows={3}
                    placeholder="Write additional information here..."
                    style={{
                        width: '100%',
                        padding: '8px',
                        borderColor: '#c4c4c4',
                        borderRadius: '4px',
                        fontFamily: 'Roboto, sans-serif',
                    }}
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>

                
            </Box>
        </Container>
    );
}