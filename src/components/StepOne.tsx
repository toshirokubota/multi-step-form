import React, { useState, type ChangeEvent } from 'react';
import Header from './Header';
import Footer from './Footer';
import type { FormObject } from '../types';
import { formVaidator } from '../libs';

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
    const [errorFlag, setErrorFlag] = useState(new Map([
        ['name', !formVaidator('name', formObject.name)], 
        ['email', !formVaidator('email', formObject.email)], 
        ['phone', !formVaidator('phone', formObject.phone)]]));
        
    const errorMessage = {
        name: 'The field is required',
        email: 'Enter a valid email',
        phone: 'Enter a valid phone number',
    }

    const handleChange = (event: ChangeEvent)=> {
        const name = (event.target as HTMLInputElement).name;
        const value = (event.target as HTMLInputElement).value;
        setFormObject(obj => ({...obj, [name]:value}));
        if(formVaidator(name, value)) {
            setErrorFlag(prev => {
                const newMap = new Map(prev);
                newMap.set(name, false);
                return newMap;
            });
        } else {
            console.log("Step One: handleChange error", name, value)
            setErrorFlag(prev => {
                const newMap = new Map(prev);
                newMap.set(name, true);
                return newMap;
            });
        }
    }

    return (
        <>
            <Header step={step} setStep={setStep}/> 
            <form className="form-card">
                <h1>Personal Info</h1>
                <p>Please provide your name, email address, and phone number.</p>
                <div className='flex justify-between'>
                    <label htmlFor='your-name'>Name</label>
                    {errorFlag.get('name') && <span className='error-message'>{errorMessage.name}</span>}
                </div>
                <input 
                    id="your-name" 
                    type="text" 
                    placeholder='e.g. Stephen King'
                    name="name"
                    value={formObject.name}
                    onChange={handleChange}
                />
                <div className='flex justify-between'>
                    <label htmlFor='your-email'>Email Address</label>
                    {errorFlag.get('email') && <span className='error-message'>{errorMessage.email}</span>}
                </div>
                <input 
                    id="your-email" 
                    type="email" 
                    placeholder='e.g. stephenking@lorem.com'
                    name="email"
                    value={formObject.email}
                    onChange={handleChange}  
                />
                <div className='flex justify-between'>
                    <label htmlFor='your-phone'>Phone Number</label>
                    {errorFlag.get('phone') && <span className='error-message'>{errorMessage.phone}</span>}
                </div>
                <input 
                    id="your-phone" 
                    type="tel" 
                    placeholder='e.g. +1 234 567 890'
                    name="phone"
                    value={formObject.phone}
                    onChange={handleChange}    
                />
            </form>
            <Footer step={step} setStep={setStep} error={Array.from(errorFlag.values()).some(a => a) }/>
        </>
    );
}