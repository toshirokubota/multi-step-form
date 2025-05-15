import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StepOne from '../components/StepOne';
import { useState } from 'react';
//import {FormObject} from '../types';

function TestingWrapper() {
    const [formObject, setFormObject] = useState({
                                        name: '',
                                        email: '',
                                        phone: '',
                                        plan: undefined,
                                        period: 'Monthly',
                                        additions: [],
                                        });
    return (
        <StepOne step={1} setStep={(val)=>{}} formObject={formObject} setFormObject={setFormObject}/>
    )
}

describe('StepOne', () => {


    const user = userEvent.setup();

  
    beforeEach(() => {
      vi.resetAllMocks();
    })

    it('Show the right set of elements', async () => {
      const { container } = render(<TestingWrapper />);
      const inputName = screen.getByLabelText ("Name");
      expect(inputName).toBeInTheDocument();
      expect(inputName).toBeEnabled();

      const inputEmail = screen.getByLabelText ("Email Address");
      expect(inputEmail).toBeInTheDocument();
      expect(inputEmail).toBeEnabled();

      const inputPhone = screen.getByLabelText ("Phone Number");
      expect(inputPhone).toBeInTheDocument();
      expect(inputPhone).toBeEnabled();

      const nextButton = screen.getByText ("Next Step");
      expect(nextButton).toBeVisible();
      expect(nextButton).toBeEnabled();

      const backButton = screen.getByText ("Go Back");
      expect(backButton).toBeDisabled();
    });
    it('Submit without entering the form', async () => {
      const { container } = render(<TestingWrapper />);
      const nextButton = screen.getByText ("Next Step");

      const inputName = screen.getByLabelText ("Name");
      expect(inputName).toBeInTheDocument();
      expect(inputName).toBeEnabled();
      const inputEmail = screen.getByRole('textbox', {name: 'Email Address'}) //await screen.getByLabelText ("Email Address");
      expect(inputEmail).toBeInTheDocument();
      expect(inputEmail).toBeEnabled();
      const inputPhone = screen.getByLabelText ("Phone Number");
      expect(inputPhone).toBeInTheDocument();
      expect(inputPhone).toBeEnabled();

      const errorName = screen.getByText('The field is required');
      expect(errorName).toBeVisible();
      const errorEmail = screen.getByText('Enter a valid email');
      expect(errorEmail).toBeVisible();
      const errorPhone = screen.getByText('Enter a valid phone number');
      expect(errorPhone).toBeVisible();

      await user.type(inputName, 'hello');
      await user.type(inputEmail, 'abc@abc.com');
      await user.type(inputPhone, '123-456-7890');

      expect(errorName).not.toBeInTheDocument();
      expect(errorPhone).not.toBeInTheDocument();
      expect(errorEmail).not.toBeVisible();
    });
});
