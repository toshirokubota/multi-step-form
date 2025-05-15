import { isValidAddition, isValidPeriod, isValidPlan, type Addition, type PeriodOption, type PlanChoice } from "../types";

export function staticAsset(assetName: string): string {
    return `${import.meta.env.BASE_URL}${assetName}`
}

//const phoneRegex = /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const phoneRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{3,4})(?: *x(\d+))?\s*$/;
const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

type ValidatorObject = {
    'phone': boolean,
    'name': boolean,
    'email': boolean,
    'plan' : boolean,
    'period': boolean,
    'addition': boolean,
}
const validator = {
    'phone': (str: string) => phoneRegex.test(str),
    'name': (str: string) => str.length > 0,
    'email': (str: string) => emailRegex.test(str),
    'plan' : (str: string) => isValidPlan(str),
    'period': (str: string) => isValidPeriod(str),
    'addition': (str: string) => isValidAddition(str)
}

export function formVaidator(name: string, value:string): boolean {
    //console.log('formValidator', name, value, Object.keys(validator).includes(name), validator.name, validator.name(value));
    return Object.keys(validator).includes(name) ? validator[name as keyof ValidatorObject](value): false;
}

export function planCost(plan: PlanChoice | undefined, period: PeriodOption | undefined) {
    let cost = 0;
    if(plan === 'Arcade') {
        if(period === 'Monthly') {
            cost = 9.00;
        } else if(period === 'Yearly') {
            cost = 90.00;
        } else {
            cost = NaN;
        }
    } else if(plan === 'Advanced') {
        if(period === 'Monthly') {
            cost = 12.00;
        } else if(period === 'Yearly') {
            cost = 120.00;
        } else {
            cost = NaN;
        }
    } else if(plan === 'Pro') {
        if(period === 'Monthly') {
            cost = 15.00;
        } else if(period === 'Yearly') {
            cost = 150.00;
        } else {
            cost = NaN;
        }
    } else {
        cost = NaN;
    }
    return cost;
}

export function addOnCost(addition: Addition | undefined, period: PeriodOption | undefined) {
    let cost = 0;
    if(addition === 'Online Service') {
        if(period === 'Monthly') {
            cost = 1.00;
        } else if(period === 'Yearly') {
            cost = 10.00;
        } else {
            cost = NaN;
        }
    } else if(addition === 'Extra Storage') {
        if(period === 'Monthly') {
            cost = 2.00;
        } else if(period === 'Yearly') {
            cost = 20.00;
        } else {
            cost = NaN;
        }
    } else if(addition === 'Customizable Profile') {
        if(period === 'Monthly') {
            cost = 2.00;
        } else if(period === 'Yearly') {
            cost = 20.00;
        } else {
            cost = NaN;
        }
    } else {
        cost = NaN;
    }
    return cost;
}

export function priceString(plan: PlanChoice, period: PeriodOption | undefined) : string {
    const cost = planCost(plan, period ? period : 'Monthly');
    const str = '+$' + cost.toFixed(0) + '/' + (!period || period === 'Monthly' ? 'mo' : 'yr');
    //console.log(cost, str);
    return str;
}


export function addonPriceString(addon: Addition, period: PeriodOption | undefined) : string {
    const cost = addOnCost(addon, period ? period : 'Monthly');
    const str = '+$' + cost.toFixed(0) + '/' + (!period || period === 'Monthly' ? 'mo' : 'yr');
    //console.log(cost, str);
    return str;
}
