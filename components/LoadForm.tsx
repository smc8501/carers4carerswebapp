import React, { useEffect, useRef } from 'react';
import 'formiojs/dist/formio.full.css';
import dynamic from 'next/dynamic';


interface FormProps {
    formUrl: string;
}

const LoadForm: React.FC<FormProps> = ({ formUrl }) => {
    const Form = dynamic(() => import ('@formio/react').then(module => module.Form), {ssr: false});
    return (
        <>
            <Form src={formUrl}/>
        </>
    );
};

export default LoadForm;