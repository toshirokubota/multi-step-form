import React from 'react';
//import Header from './Header';
import Footer from './Footer';
import type { FormObject } from '../types';
import { addOnCost, addonPriceString, planCost, priceString } from '../libs';

export default function StepFour(
    {
        step, setStep, formObject
    }: 
    {
        step:number, 
        setStep:React.Dispatch<React.SetStateAction<number>>
        formObject: FormObject,
        //setFormObject: React.Dispatch<React.SetStateAction<FormObject>>
    }): React.JSX.Element {

    function planOverview(): string {
        return formObject.plan + '(' + formObject.period + ')';
    }
    function totalCostString(): string {
        let cost = planCost(formObject.plan, formObject.period);
        for(let addon of formObject.additions) {
            cost += addOnCost(addon, formObject.period);
        }
        return '+' + cost.toFixed(0) + '/' + (formObject.period == 'Monthly' ? 'mo' : 'yr');
    }

    //console.log('Step 4:', formObject);

    return (
        <>
            <form className="form-card">
                <h1>Finishing up</h1>
                <p className="my-4">Double-check everything looks OK before confirming.</p>
                <div className="itemized-summary">
                    <div className="item-card border-b-1 border-gray-300">
                        <div>
                            <span className='font-bold text-md block'>{planOverview()}</span>
                            <button onClick={()=>setStep(1)} className='underline text-md block' aria-label='go back to Step 1'>change</button>
                        </div>
                        <span className='font-bold text-md text-blue-900'>{formObject.plan && priceString(formObject.plan, formObject.period)}</span>
                    </div>
                        <>
                            {
                                formObject.additions.includes('Online Service') && 
                                    <div className="item-card">
                                        <span>Online Service</span>
                                        <span className="text-blue-900">{addonPriceString('Online Service', formObject.period)}</span>
                                    </div>
                            }
                            {
                                formObject.additions.includes('Extra Storage') && 
                                    <div className="item-card">
                                        <span>Extra Storage</span>
                                        <span className="text-blue-900">{addonPriceString('Extra Storage', formObject.period)}</span>
                                    </div>
                            }
                            {
                                formObject.additions.includes('Customizable Profile') && 
                                    <div className="item-card">
                                        <span>Customizable Profile</span>
                                        <span className="text-blue-900">{addonPriceString('Customizable Profile', formObject.period)}</span>
                                    </div>
                            }
                        </>
                    </div>
                <div className="total-card">
                    <span>Total (per {formObject.period === 'Monthly' ? 'month': 'year'})</span> 
                    <span className="text-xl font-bold text-blue-600">{totalCostString()}</span>
                </div>
            </form>
            <Footer step={step} setStep={setStep} error={false}/>
        </>
    );
}