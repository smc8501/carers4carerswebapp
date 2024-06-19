
import { Formio } from "formiojs";

export default function EnterRegistrationForm() {
    const formio = new Formio('https://qvtoslceucaatao.form.io/enterregistrationformmanually');
    return (
        formio.loadForm().then((formio: Formio) => {
            console.log(formio)
        })
    );
}