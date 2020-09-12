import { Validator } from '../../interfaces/validator.interface';

export function getMoneyInputValidator (min: number, max: number): Validator<string> {
    return {
      validate: (value: string) => {
        const parsedNumber: number = Number(value);
        return min < parsedNumber && parsedNumber < max;
      },
      errorMessage: `Please enter an amount bigger than ${min} and smaller than ${max}`
    }
}
