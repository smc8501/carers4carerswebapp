import React from "react";
import { Container } from "@mui/material";
import { Form } from '@formio/react';

export default function EnterRegistrationForm() {
    const onSubmitHandler = (submission: any) =>  {
        console.log(submission);
    }
    return (
        <>
            <Container>
                <Form src="https://qvtoslceucaatao.form.io/enterregistrationformmanually" onSubmit={onSubmitHandler} />
            </Container>

        </>

    );
}