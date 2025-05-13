import React, { type ChangeEvent } from 'react';
import Header from './Header';
import Footer from './Footer';
import type { FormObject } from '../types';

export default function StepOne(
    {
        step, setStep, formObject, setFormObject
    }: 
    {
        step:number, 
        setStep:React.Dispatch<React.SetStateAction<number>>
        formObject: FormObject,
        setFormObject: React.Dispatch<React.SetStateAction<FormObject>>
    }): React.JSX.Element {
    
    const handleChange = (event: ChangeEvent)=> {
        const name = (event.target as HTMLInputElement).name;
        const value = (event.target as HTMLInputElement).value;
        if(name === 'name' ) {

        } else if(name === 'email') {

        } else if(name === 'phone') {

        }
    }

    return (
        <>
            <Header step={step} setStep={setStep}/> 
            <form className="form-card">
                <h1>Personal Info</h1>
                <p>Please provide your name, email address, and phone number.</p>
                <label htmlFor='your-name'>Name</label>
                <input 
                    id="your-name" 
                    type="text" 
                    placeholder='e.g. Stephen King'
                    name="name"
                    onChange={handleChange}
                />
                <label htmlFor='your-email'>Email Address</label>
                <input 
                    id="your-email" 
                    type="email" 
                    placeholder='e.g. stephenking@lorem.com'
                    name="email"
                    onChange={handleChange}    
                />
                <label htmlFor='your-phone'>Phone Number</label>
                <input 
                    id="your-phone" 
                    type="tel" 
                    placeholder='e.g. +1 234 567 890'
                    name="phone"
                    onChange={handleChange}    
                />
            </form>
            <Footer step={step} setStep={setStep}/>
        </>
    );
}