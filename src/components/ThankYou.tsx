import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { staticAsset } from '../libs';
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
    return (
      <>
        <Header step={step} setStep={setStep}/>
        <div className="form-card">
            <img src={staticAsset('/assets/images/icon-thank-you.svg')} alt="thank you icon"/>
          <h1>Thank you!</h1>
          <p className="my-4">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </>
    );
}