import React from 'react';

export default function Footer({step, setStep}:{step:number, setStep: React.Dispatch<React.SetStateAction<number>>}): React.JSX.Element {
    return (
        <>
            <footer>
                <button 
                    className={'px-2 text-gray-400'+`${step==1 ? ' opacity-0': ''}`}
                    disabled={step == 1 ? true: false}
                    onClick={()=>setStep(prev => prev > 1 ? prev - 1: prev)}
                >
                    Go Back
                </button>
                <button 
                    className='px-4 py-2 bg-blue-950 text-white rounded-sm'
                    onClick={()=>setStep(prev => prev < 5 ? prev + 1: prev)}
                >
                    {step==4 ? "Confirm": "Next Step"}
                </button>
            </footer>
        </>
    );
}
 