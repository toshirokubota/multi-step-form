import React from 'react';
//import type { FormObject } from '../types';
//import { formVaidator } from '../libs';

export default function Footer(
    {
        step, setStep, error
    }: 
    {
        step:number, 
        setStep:React.Dispatch<React.SetStateAction<number>>
        error: boolean
    }): React.JSX.Element {

        function NextStep() {
            if(!error) 
            {
                setStep(prev => prev < 5 ? prev + 1: prev);
            }
        }
        function GoBack() {
            setStep(prev => prev > 1 ? prev - 1: prev);
        }

    return (
        <>
            <footer>
                <button 
                    className={'px-2 text-gray-400'+`${step==1 ? ' opacity-0': ''}`}
                    disabled={step == 1 ? true: false}
                    onClick={GoBack}
                >
                    Go Back
                </button>
                <button 
                    className={'px-4 py-2 text-white rounded-sm ' + `${step === 4 ? 'bg-blue-700': 'bg-blue-950'}` }
                    onClick={NextStep}
                >
                    {step==4 ? "Confirm": "Next Step"}
                </button>
            </footer>
        </>
    );
}
 