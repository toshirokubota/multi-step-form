import React from 'react';

export default function Header({step, setStep}:{step:number, setStep: React.Dispatch<React.SetStateAction<number>>}): React.JSX.Element {

    return (
        <>
            <header className="py-8 px-24">
                <nav className="flex justify-around">
                <button 
                    className={"circular-button " + `${step == 1 ? 'current': ''}`}
                    onClick={()=>setStep(1)}
                >
                    1
                </button>
                <button 
                    className={"circular-button " + `${step == 2 ? 'current': ''}`}
                    onClick={()=>setStep(2)}
                >
                    2
                </button>
                <button 
                    className={"circular-button " + `${step == 3 ? 'current': ''}`}
                    onClick={()=>setStep(3)}
                >
                    3
                </button>
                <button 
                    className={"circular-button " + `${step >= 4 ? 'current': ''}`}
                    onClick={()=>setStep(4)}
                >
                    4
                </button>
                </nav> 
            </header> 
        </>
    );
}
