
const planValues = [ 'Arcade' , 'Advanced' , 'Pro' ] as const;
export type PlanChoice = (typeof planValues)[number];  
export const isValidPlan = (value: any): value is PlanChoice => planValues.includes(value);

const periodOptions = [ 'Monthly' , 'Yearly' ] as const;
export type PeriodOption = (typeof periodOptions)[number];  
export const isValidPeriod = (value: any): value is PeriodOption => periodOptions.includes(value);

const additionValues = ["Online Service", "Extra Storage", "Customizable Profile"] as const;
export type Addition = (typeof additionValues)[number]; 
export const isValidAddition = (value: any): value is Addition => additionValues.includes(value);

export type FormObject = {
    name: string,
    email: string,
    phone: string,
    plan: PlanChoice | undefined,
    period: PeriodOption | undefined,
    additions: Addition[],
}
