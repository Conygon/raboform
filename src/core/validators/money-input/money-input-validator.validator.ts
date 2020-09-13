import { Validator } from '../../interfaces/validator.interface';

export function getMoneyInputValidator (min: number, max: number): Validator<string> {
    return {
      validate: (value: string) => {
        if(value === null) return false; // null => Number(null) === 0;

        const parsedNumber: number = Number(value);
        return min <= parsedNumber && parsedNumber <= max;
      },
      errorMessage: `Please enter an amount from ${min} to ${max}`
    }
}
