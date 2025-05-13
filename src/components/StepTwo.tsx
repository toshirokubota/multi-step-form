import React, { useState, type ChangeEvent } from 'react';
import Header from './Header';
import Footer from './Footer';
import type { FormObject, PeriodOption, PlanChoice } from '../types';
import { formVaidator, priceString, staticAsset } from '../libs';

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
    const [errorFlag, setErrorFlag] = useState(new Map([
        ['plan', !formObject.plan || !formVaidator('plan', formObject.plan as string)], 
        ['period', !formObject.period || !formVaidator('period', formObject.period as string)]]));
        
    const errorMessage = {
        plan: 'Select a plan',
        period: 'Select either monthly or yearly',
    }

    const handleChange = (event: ChangeEvent)=> {
        const name = (event.target as HTMLInputElement).name;
        const value = (event.target as HTMLInputElement).value;
        //console.log(name, value, {...formObject, name: value});
        setFormObject(obj => ({...obj, [name]:value}));
        if(formVaidator(name, value)) {
            setErrorFlag(prev => {
                const newMap = new Map(prev);
                newMap.set(name, false);
                return newMap;
            });
        } else {
            setErrorFlag(prev => {
                const newMap = new Map(prev);
                newMap.set(name, true);
                return newMap;
            });
        }
        //console.log(errorFlag);
    }

    return (
        <>
            <Header step={step} setStep={setStep}/> 
            <form className="form-card">
                <h1> Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
                <label htmlFor='plan-arcade'>
                    <img src={staticAsset('/assets/images/icon-arcade.svg')} alt='Arcade logo'/>
                    <span className='font-bold text-lg block'>Arcade</span>
                    <span className='text-md block'>{priceString('Arcade', formObject.period)}</span>
                    <span className='font-bold text-md block'>{formObject.period == 'Yearly' ? '2 months free' : ''}</span>
                    <input 
                        type="radio" 
                        id="plan-arcade" 
                        name="plan" 
                        value="Arcade"
                        onChange={handleChange}
                        checked={formObject.plan == 'Arcade'}
                        />
                </label>
                <label htmlFor='plan-advanced'>
                    <img src={staticAsset('/assets/images/icon-advanced.svg')} alt='Arcade logo'/>
                    <span className='font-bold text-lg block'>Advanced</span>
                    <span className='text-md block'>{priceString('Advanced', formObject.period)}</span>
                    <span className='font-bold text-md block'>{formObject.period == 'Yearly' ? '2 months free' : ''}</span>
                    <input 
                        type="radio" 
                        id="plan-advanced" 
                        name="plan" 
                        value="Advanced"
                        onChange={handleChange}
                        checked={formObject.plan == 'Advanced'}
                        />
                </label>
                <label htmlFor='plan-pro'>
                    <img src={staticAsset('/assets/images/icon-pro.svg')} alt='Arcade logo'/>
                    <span className='font-bold text-lg block'>Pro</span>
                    <span className='text-md block'>{priceString('Pro', formObject.period)}</span>
                    <span className='font-bold text-md block'>{formObject.period == 'Yearly' ? '2 months free' : ''}</span>
                    <input 
                        type="radio" 
                        id="plan-pro" 
                        name="plan" 
                        value="Pro"
                        onChange={handleChange}
                        checked={formObject.plan == 'Pro'}
                    />
                </label>
                {errorFlag.get('plan') && <span className='error-message'>{errorMessage.plan}</span>}

                <label htmlFor='plan-monthly'>
                    <span>Monthly</span>
                    <input 
                        type="radio" 
                        id="plan-monthly" 
                        name="period" 
                        value="Monthly"
                        onChange={handleChange}
                        checked={formObject.period == 'Monthly'}
                        />
                </label>
                <label htmlFor='plan-yearly'>
                    <span>Yearly</span>
                    <input 
                        type="radio" 
                        id="plan-yearly" 
                        name="period" 
                        value="Yearly"
                        onChange={handleChange}
                        checked={formObject.period == 'Yearly'}
                    />
                </label>
                {errorFlag.get('period') && <span className='error-message'>{errorMessage.period}</span>}
            </form>
            <Footer step={step} setStep={setStep} error={Array.from(errorFlag.values()).some(a => a)}/>
        </>
    );
}