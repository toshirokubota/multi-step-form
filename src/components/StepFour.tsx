import React from 'react';
import Header from './Header';
import Footer from './Footer';
import type { FormObject } from '../types';
import { addOnCost, addonPriceString, planCost, priceString } from '../libs';

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

    function planOverview(): string {
        return formObject.plan + '(' + formObject.period + ')';
    }
    function totalCostString(): string {
        let cost = planCost(formObject.plan, formObject.period);
        for(let addon of formObject.additions) {
            cost += addOnCost(addon, formObject.period);
        }
        return '+' + cost.toFixed(2) + '/' + (formObject.period == 'Monthly' ? 'mo' : 'yr');
    }

    console.log('Step 4:', formObject);

    return (
        <>
            <Header step={step} setStep={setStep}/> 
            <form className="form-card">
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
                <div>
                    <span className='font-bold text-md'>{planOverview()}</span>
                    <span className='font-bold text-md'>{formObject.plan && priceString(formObject.plan, formObject.period)}</span>
                    <span onClick={()=>setStep(1)} className='underline text-md'>change</span>
                </div>
                <div>
                    {
                        formObject.additions.includes('Online Service') && 
                            <div>
                                <span>Online Service</span>
                                <span>{addonPriceString('Online Service', formObject.period)}</span>
                            </div>
                    }
                    {
                        formObject.additions.includes('Extra Storage') && 
                            <div>
                                <span>Extra Storage</span>
                                <span>{addonPriceString('Extra Storage', formObject.period)}</span>
                            </div>
                    }
                    {
                        formObject.additions.includes('Customizable Profile') && 
                            <div>
                                <span>Customizable Profile</span>
                                <span>{addonPriceString('Customizable Profile', formObject.period)}</span>
                            </div>
                    }
                </div>
                <div>
                    <span>Total (per {formObject.period === 'Monthly' ? 'month': 'year'})</span> 
                    <span>{totalCostString()}</span>
                </div>
            </form>
            <Footer step={step} setStep={setStep} error={false}/>
        </>
    );
}