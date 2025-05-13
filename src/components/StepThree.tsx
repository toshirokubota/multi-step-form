import React from 'react';
import Header from './Header';
import Footer from './Footer';
import type { FormObject } from '../types';

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
    return (
      <>
        <Header step={step} setStep={setStep} />
        <form className="form-card">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
          <label htmlFor="online-service">
            <span>Online service</span>
            <span>Access to multiplayer games</span>
            <span>+$1/mo</span>
            <input id="online-service" type="checkbox" name="online-service"></input>
          </label>
          <label htmlFor="larger-storage">
            <span>Larger storage</span>
            <span>Extra 1TB of cloud save</span>
            <span>+$2/mo</span>
            <input id="larger-storage" type="checkbox" name="larger-storage"></input>
          </label>
          <label htmlFor="customizable-profile">
            <span>Customizable Profile</span>
            <span>Custom theme on your profile</span>
            <span>+$2/mo</span>
            <input id="customizable-profile" type="checkbox" name="customizable-profile"></input>
          </label>
        </form>
        <Footer step={step} setStep={setStep} />
      </>
    );
}