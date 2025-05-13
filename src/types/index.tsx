
export type Addition = 'Online Service' | 'Extra Storage' | 'Customizable Profile';

export type FormObject = {
    name: string,
    email: string,
    phone: string,
    plan: 'Arcade' | 'Advanced' | 'Pro',
    period: 'Monthly' | 'Yearly',
    additions: Addition[],
}
