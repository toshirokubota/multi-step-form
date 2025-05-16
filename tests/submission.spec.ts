import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/multi-step-form');
});

const PERSONAL_INFO = [
  'hello',
  'world@a.com',
  '123-456-7890'
] as const;

test.describe('New order', () => {
  test('should allow me to order a new subscription', async ({ page }) => {

    /*
      Step 1: Personal Info
    */
    const inutName = page.getByLabel('Name');
    // Input a name.
    await inutName.fill(PERSONAL_INFO[0]);

    const inutEmail = page.getByLabel('Email Address');
    // Input an email.
    await inutEmail.fill(PERSONAL_INFO[1]);

    const inutPhone = page.getByLabel('Phone Number');
    // Input an email.
    await inutPhone.fill(PERSONAL_INFO[2]);

    const nextButton1 = page.getByText('Next Step');
    await nextButton1.click();

    /*
      Step 2: Select Plan
    */
    const arcade = page.getByLabel('Arcade');
    await arcade.click();
    
    const nextButton2 = page.getByText('Next Step');
    await nextButton2.click();

    /*
      Step 3: ADDS ON
    */
    const nextButton3 = page.getByText('Next Step');
    await nextButton3.click();

    /*
      Step 4: SUMMARY
    */
    const nextButton4 = page.getByRole('button', {name: 'Confirm'});
    await nextButton4.click();

    /*
      Step 5: Thank you
    */
    const message = page.getByText('Thank you!');
    expect(message).toBeVisible();
  });
});

test.describe('New order', () => {
  test('should allow me to order a new subscription with adds on', async ({ page }) => {

    /*
      Step 1: Personal Info
    */
    const inutName = page.getByLabel('Name');
    // Input a name.
    await inutName.fill(PERSONAL_INFO[0]);

    const inutEmail = page.getByLabel('Email Address');
    // Input an email.
    await inutEmail.fill(PERSONAL_INFO[1]);

    const inutPhone = page.getByLabel('Phone Number');
    // Input an email.
    await inutPhone.fill(PERSONAL_INFO[2]);

    const nextButton1 = page.getByText('Next Step');
    await nextButton1.click();

    /*
      Step 2: Select Plan
    */
    const arcade = page.getByLabel('Arcade');
    await arcade.click();
    
    const nextButton2 = page.getByText('Next Step');
    await nextButton2.click();

    /*
      Step 3: ADDS ON
    */
    const addon1 = page.getByLabel('Online Service');
    await addon1.click();
    const addon2 = page.getByLabel('Larger Storage');
    await addon2.click();
    const addon3 = page.getByLabel('Customizable Profile');
    await addon3.click();

    const nextButton3 = page.getByText('Next Step');
    await nextButton3.click();

    /*
      Step 4: SUMMARY
    */
    const price = page.getByText('+$14/mo');
    expect(price).toBeVisible();
    expect(page.getByText('Online Service')).toBeVisible();
    expect(page.getByText('Extra Storage')).toBeVisible();
    expect(page.getByText('Customizable Profile')).toBeVisible();

    const nextButton4 = page.getByRole('button', {name: 'Confirm'});
    await nextButton4.click();

    /*
      Step 5: Thank you
    */
    const message = page.getByText('Thank you!');
    expect(message).toBeVisible();
  });
});


