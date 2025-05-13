import React from 'react';
import Header from './Header';
import Footer from './Footer';
import type { FormObject } from '../types';

export default function StepTwo(
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
                <h1> Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
                <label htmlFor='plan-arcade'>
                    <span>Arcade</span><span>$9/mo</span>
                    <input type="radio" id="plan-arcade" name="your-plan" value="arcade"/>
                </label>
                <label htmlFor='plan-advanced'>
                    <span>Advanced</span><span>$12/mo</span>
                    <input type="radio" id="plan-advanced" name="your-plan" value="advanced"/>
                </label>
                <label htmlFor='plan-pro'>
                    <span>Pro</span><span>$15/mo</span>
                    <input type="radio" id="plan-pro" name="your-plan" value="pro"/>
                </label>
                <label htmlFor='plan-monthly'>
                    <span>Monthly</span>
                    <input type="radio" id="plan-monthly" name="your-duration" value="monthly"/>
                </label>
                <label htmlFor='plan-yearly'>
                    <span>Yearly</span>
                    <input type="radio" id="plan-yearly" name="your-duration" value="yearly"/>
                </label>
            </form>
            <Footer step={step} setStep={setStep}/>
        </>
    );
}