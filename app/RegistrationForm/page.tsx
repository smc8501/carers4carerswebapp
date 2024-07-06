
import React, { Suspense, useEffect } from 'react';
import Loading from './loading';
import LoadForm from '@/components/LoadForm';


export default function Page() {
    

    
    return(
        
        <Suspense fallback={<Loading/>}>
            <LoadForm formUrl='https://qvtoslceucaatao.form.io/enterregistrationformmanually'/>
        </Suspense>
            
    );
    

}


