import React, { useEffect, useState, type ChangeEvent } from 'react';
import Header from './Header';
import Footer from './Footer';
import type { Addition, FormObject } from '../types';
import { addonPriceString } from '../libs';

export default function StepThree(
    {
        step, setStep, formObject, setFormObject
    }: 
    {
        step:number, 
        setStep:React.Dispatch<React.SetStateAction<number>>
        formObject: FormObject,
        setFormObject: React.Dispatch<React.SetStateAction<FormObject>>
    }): React.JSX.Element {
    
    const [checked, setChecked] = useState(new Map([
        ["Online Service", formObject.additions.includes("Online Service")], 
        ["Extra Storage", formObject.additions.includes("Extra Storage")], 
        ["Customizable Profile", formObject.additions.includes("Customizable Profile")]]))
    let additions:Addition[] = [];
    useEffect(() => {
        additions = [];
        for(let key of checked.keys()) {
            console.log('Step 3: for loop in useEffect()', key, checked.get(key));
            if(checked.get(key)) {
                additions.push(key as Addition);
            }
        }
        console.log('Step 3: in useEffect()', additions, checked);
        setFormObject(obj => ({...obj, additions:additions}));
    }, [checked]);

    const handleChange = (event: ChangeEvent)=> {
        const name = (event.target as HTMLInputElement).name;
        setChecked(prev => {
            const newMap = new Map(prev);
            newMap.set(name, !prev.get(name));
            return newMap;
        });
    }    

    return (
      <>
        <Header step={step} setStep={setStep} />
        <form className="form-card">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
          <label htmlFor="online-service">
            <span className='font-bold text-lg block'>Online service</span>
            <span className='text-sm block'>Access to multiplayer games</span>
            <span className='text-sm text-blue-700 block'>{addonPriceString('Online Service', formObject.period) }</span>
            <input 
                id="online-service" 
                type="checkbox" 
                name="Online Service" 
                onChange={handleChange}
                checked={checked.get("Online Service")}
                />
          </label>
          <label htmlFor="larger-storage">
            <span className='font-bold text-lg block'>Larger storage</span>
            <span className='text-sm block'>Extra 1TB of cloud save</span>
            <span className='text-sm text-blue-700 block'>{addonPriceString('Extra Storage', formObject.period) }</span>
            <input 
                id="larger-storage" 
                type="checkbox" 
                name="Extra Storage" 
                checked={checked.get("Extra Storage")}
                onChange={handleChange}
            />
          </label>
          <label htmlFor="customizable-profile">
            <span className='font-bold text-lg block'>Customizable Profile</span>
            <span className='text-sm block'>Custom theme on your profile</span>
            <span className='text-sm text-blue-700 block'>{addonPriceString('Customizable Profile', formObject.period) }</span>
            <input 
                id="customizable-profile" 
                type="checkbox" 
                name="Customizable Profile" 
                onChange={handleChange}
                checked={checked.get("Customizable Profile")}
            />
          </label>
        </form>
        <Footer step={step} setStep={setStep} error={false}/>
      </>
    );
}