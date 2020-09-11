import { Validator } from '../interfaces/validator.interface';

export const MoneyInputValidator: Validator<string> = {
  validate: (value: string) => {
    const parsedNumber: number = Number(value);
    return 0 < parsedNumber && parsedNumber < 1000;
  },
  errorMessage: 'Please enter an amount bigger than 0 and smaller than 1000000'
};
