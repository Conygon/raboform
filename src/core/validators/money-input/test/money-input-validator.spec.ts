import { getMoneyInputValidator } from "../money-input-validator.validator";

describe('Money Input Validator', () => {

  let results: Array<{min: number, max: number, value: string, res: boolean}> = [
    {min: 0, max: 100, value: '0.00', res: false},
    {min: 0, max: 100, value: '0.01', res: true},
    {min: 0, max: 100, value: '50.00', res: true},
    {min: 0, max: 100, value: '99.99', res: true},
    {min: 0, max: 100, value: '100.00', res: false},
    {min: 0, max: 1000, value: '500.00', res: true},
    {min: 0, max: 100, value: 'aaan.50', res: false},
    {min: 0, max: 100, value: '50.aaa', res: false},
    {min: 0, max: 100, value: 'aaaaa', res: false}
  ];

  results.forEach(test =>
    it(`Should return ${test.res} for ${test.value} with min: ${test.min} and max: ${test.max}`, () => {
      expect(getMoneyInputValidator(test.min, test.max).validate(test.value)).toEqual(test.res);
    })
  );
});
