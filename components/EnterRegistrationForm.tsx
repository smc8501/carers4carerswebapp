import React, { useEffect, useRef } from 'react';
import { Form  } from '@formio/react';
import 'formiojs/dist/formio.full.css';
import dynamic from 'next/dynamic';


interface RegistrationFormProps {
    formUrl: string;
}

const EnterRegistrationForm: React.FC<RegistrationFormProps> = ({ formUrl }) => {
    const Form = dynamic(() => import ('@formio/react').then(module => module.Form), {ssr: false});
    return (
        <>
            <Form src={formUrl}/>
        </>
    );
};

export default EnterRegistrationForm;