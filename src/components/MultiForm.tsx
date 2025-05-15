import { useState } from 'react'
import '../App.css'
import StepOne from './StepOne'
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import ThankYou from './ThankYou';
import type { FormObject } from '../types';
import Header from './Header';

const defaultFormObject: FormObject = {
    name: '',
    email: '',
    phone: '',
    plan: undefined,
    period: 'Monthly',
    additions: [],
}


export default function MultiForm(): React.JSX.Element {
    const [step, setStep] = useState<number>(1);
    const [formObject, setFormObject] = useState<FormObject>(defaultFormObject);
    return (
    <>
        <Header step={step}/> 
        <div className='form-footer'>
        {
            step == 1 ? <StepOne step={step} setStep={setStep} formObject={formObject} setFormObject={setFormObject}/>
            : step == 2 ? <StepTwo step={step} setStep={setStep} formObject={formObject} setFormObject={setFormObject}/>
            : step == 3 ? <StepThree step={step} setStep={setStep} formObject={formObject} setFormObject={setFormObject}/>
            : step == 4 ? <StepFour step={step} setStep={setStep} formObject={formObject}/>
            : step == 5 ? <ThankYou/>
            : <h1>Something is wrong!</h1>
        }
        </div>
    </>
    )
}


