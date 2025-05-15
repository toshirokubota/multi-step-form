import React from 'react';

export default function Header({step}:{step:number}): React.JSX.Element {

    return (
        <>
            <header>
                <nav>
                    <div className="nav-step">
                        <span className={"circular-indicator " + `${step == 1 ? 'current': ''}`}
                        //onClick={()=>setStep(1)}
                        >
                            1
                        </span>
                        <div className="step-caption">
                            <span className="text-xs text-slate-300">Step 1</span>
                            <span className='text-sm text-white'>YOUR INFO</span>
                        </div>
                    </div>
                    <div className="nav-step">
                        <span className={"circular-indicator " + `${step == 2 ? 'current': ''}`}
                        //onClick={()=>setStep(2)}
                        >
                            2
                        </span>
                        <div className="step-caption">
                            <span className="text-xs text-slate-300">Step 2</span>
                            <span className='text-sm text-white'>SELECT PLAN</span>
                        </div>
                    </div>
                    <div className="nav-step">
                        <span className={"circular-indicator " + `${step == 3 ? 'current': ''}`}
                        //onClick={()=>setStep(3)}
                        >
                            3
                        </span>
                        <div className="step-caption">
                            <span className="text-xs text-slate-300">Step 3</span>
                            <span className='text-sm text-white'>ADD ONS</span>
                        </div>
                    </div>
                    <div className="nav-step">
                        <span className={"circular-indicator " + `${step == 4 || step == 5 ? 'current': ''}`}
                        //onClick={()=>setStep(4)}
                        >
                            4
                        </span>
                        <div className="step-caption">
                            <span className="text-xs text-slate-300">Step 4</span>
                            <span className='text-sm text-white'>SUMMARY</span>
                        </div>
                    </div>
                </nav> 
            </header> 
        </>
    );
}
