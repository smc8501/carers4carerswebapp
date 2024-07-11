import React, { useEffect, useRef } from 'react';
import 'formiojs/dist/formio.full.css';
import dynamic from 'next/dynamic';


interface FormProps {
    formUrl: string;
    onSubmit: (submission: any) => void
}

const LoadForm: React.FC<FormProps> = ({ formUrl, onSubmit}) => {
    const Form = dynamic(() => import ('@formio/react').then(module => module.Form), {ssr: false});
    return (
        <>
            <Form src={formUrl} onSubmit={onSubmit}/>
        </>
    );
};

export default LoadForm;