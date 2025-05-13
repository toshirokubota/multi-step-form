import React from 'react';
import Header from './Header';
import Footer from './Footer';
import type { FormObject } from '../types';

export default function StepFour(
    {
        step, setStep, formObject, setFormObject
    }: 
    {
        step:number, 
        setStep:React.Dispatch<React.SetStateAction<number>>
        formObject: FormObject,
        setFormObject: React.Dispatch<React.SetStateAction<FormObject>>
    }): React.JSX.Element {
    return (
        <>
            <Header step={step} setStep={setStep}/> 
            <form className="form-card">
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
                <div>Plan</div>
                <div>Add on</div>
                <div>Total (per month/year)</div>
            </form>
            <Footer step={step} setStep={setStep}/>
        </>
    );
}