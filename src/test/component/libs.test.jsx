import { formVaidator, planCost, addOnCost } from "../../libs";

describe('formValidator', () => {
    it('returns an error with an empty input', () => {
      expect(formVaidator('name', '')).toBe(false);
      expect(formVaidator('email', '')).toBe(false);
      expect(formVaidator('phone', '')).toBe(false);
    })
    it('returns an error with an invalid email address', () => {
      expect(formVaidator('email', 'abc')).toBe(false);
      expect(formVaidator('email', 'abc@')).toBe(false);
      expect(formVaidator('email', 'abc@com')).toBe(false);
      expect(formVaidator('email', 'abc#a.com')).toBe(false);
      expect(formVaidator('email', 'abc@a$com')).toBe(false);
      expect(formVaidator('email', 'abc@a.com')).toBe(true);
    })
    it('returns an error with an invalid phone number', () => {
      expect(formVaidator('phone', 'abc')).toBe(false);
      expect(formVaidator('phone', '123')).toBe(false);
      expect(formVaidator('phone', '123/456')).toBe(false);
      expect(formVaidator('phone', '123-456')).toBe(false);
      expect(formVaidator('phone', '123-456-7890')).toBe(true);
      expect(formVaidator('phone', '(123)456-7890')).toBe(true);
      expect(formVaidator('phone', '(123)456-7890')).toBe(true);
      expect(formVaidator('phone', '(123)456.7890')).toBe(true);
    })
    it('returns an error with an invalid plan', () => {
      expect(formVaidator('plan', '')).toBe(false);
      expect(formVaidator('plan', '123')).toBe(false);
      expect(formVaidator('plan', 'hello')).toBe(false);
      expect(formVaidator('plan', 'Arcade')).toBe(true);
      expect(formVaidator('plan', 'Advanced')).toBe(true);
      expect(formVaidator('plan', 'Pro')).toBe(true);
    })
    it('returns an error with an invalid period', () => {
      expect(formVaidator('period', '')).toBe(false);
      expect(formVaidator('period', '123')).toBe(false);
      expect(formVaidator('period', 'hello')).toBe(false);
      expect(formVaidator('period', 'Monthly')).toBe(true);
      expect(formVaidator('period', 'Yearly')).toBe(true);
      expect(formVaidator('period', 'daily')).toBe(false);
      expect(formVaidator('period', 'weekly')).toBe(false);
    })
    it('returns an error with an invalid addon', () => {
      expect(formVaidator('addition', '')).toBe(false);
      expect(formVaidator('addition', '123')).toBe(false);
      expect(formVaidator('addition', 'hello')).toBe(false);
      expect(formVaidator('addition', 'Online Service')).toBe(true);
      expect(formVaidator('addition', 'Extra Storage')).toBe(true);
      expect(formVaidator('addition', 'Customizable Profile')).toBe(true);
      expect(formVaidator('addition', 'online service')).toBe(false);
    })
  });

describe('planCost', () => {
    it('returns the correct price of a plan and the period', () => {
      expect(planCost('Arcade', 'Monthly')).toBe(9);
      expect(planCost('Advanced', 'Monthly')).toBe(12);
      expect(planCost('Pro', 'Monthly')).toBe(15);
      expect(planCost('Arcade', 'Yearly')).toBe(90);
      expect(planCost('Advanced', 'Yearly')).toBe(120);
      expect(planCost('Pro', 'Yearly')).toBe(150);
      expect(planCost('', 'Yearly')).toBe(NaN);
      expect(planCost('Arcade', '')).toBe(NaN);
      expect(planCost('', '')).toBe(NaN);
    });
});

describe('addOnCost', () => {
    it('returns the correct price of a plan and the period', () => {
      expect(addOnCost('Online Service', 'Monthly')).toBe(1);
      expect(addOnCost('Extra Storage', 'Monthly')).toBe(2);
      expect(addOnCost('Customizable Profile', 'Monthly')).toBe(2);
      expect(addOnCost('Online Service', 'Yearly')).toBe(10);
      expect(addOnCost('Extra Storage', 'Yearly')).toBe(20);
      expect(addOnCost('Customizable Profile', 'Yearly')).toBe(20);
      expect(addOnCost('', 'Yearly')).toBe(NaN);
      expect(addOnCost('Online Service', '')).toBe(NaN);
      expect(addOnCost('', '')).toBe(NaN);
    });
});
