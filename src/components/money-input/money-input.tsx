import { Component, Event, h, Listen, Prop, State } from '@stencil/core';
import { Validator } from "../../core/interfaces/validator.interface";
import { MoneyInputAmount } from "../../core/interfaces/money-input.interface";
import { EventEmitter } from "@stencil/router/dist/types/stencil.core";
import { getMoneyInputValidator } from "../../core/validators/money-input/money-input-validator.validator";

/*
  Money input validator component. Usage:

  @Event - 'moneyInputChanged' - {value:number, valid: boolean} - Gives back the amount of money that was filled in.
  This will always return a value on change even if the value is invalid

  @Prop - min - Minimum value required to be filled in
  @Prop - max - Maximum value required to be filled in
 */
@Component({
  tag: 'rabo-money-input',
  styleUrl: 'money-input.css',
  shadow: true,
})
export class MoneyInput {

  private moneyInputLeft: HTMLInputElement;
  private moneyInputRight: HTMLInputElement;
  private moneyInputRegExp: RegExp = new RegExp(/[^0-9]/g);
  private moneyValidator: Validator<string>;

  @State() leftValue: string;
  @State() rightValue: string;
  @State() activeElement: boolean;
  @State() isValueValid: boolean;
  @State() moneyValue: number;

  @Prop() min: number;
  @Prop() max: number;

  @Event() moneyInputChanged: EventEmitter<MoneyInputAmount>;

  // When the component loads we create the validator with configured properties
  componentWillLoad() {
    this.moneyValidator = getMoneyInputValidator(this.min, this.max);
  }

  //Although In this example we never update the prop from code, we would need a a new validator
  componentWillUpdate() {
    this.moneyValidator = getMoneyInputValidator(this.min, this.max);
  }

  @Listen('mouseover')
  onMouseOver() {
    this.activeElement = true;
  }

  @Listen('mouseout')
  onMouseOut() {
    this.activeElement = false;
  }

  handleBlurRight() {
    if (this.rightValue.length === 1) {
      this.rightValue = '0' + this.rightValue;

      this.handleChange();
    }
  }

  handleChangeLeft(event) {
    this.leftValue = event.target.value;

    this.handleChange();
  }

  handleChangeRight(event) {
    this.rightValue = event.target.value;

    this.handleChange();
  }

  handleChange() {
    this.autoCorrectValues();

    this.moneyInputLeft.value = this.leftValue;
    this.moneyInputRight.value = this.rightValue;

    const tmpMoneyValue: string = this.leftValue + '.' + this.rightValue;
    this.isValueValid = this.moneyValidator.validate(this.leftValue + '.' + this.rightValue);

    this.moneyValue = parseFloat(tmpMoneyValue);

    this.moneyInputChanged.emit({
      value: this.moneyValue,
      valid: this.isValueValid
    })
  }

  autoCorrectValues() {
    //Automatically fills in the other number for ease of use
    if(!this.rightValue) this.rightValue = '00';
    if(!this.leftValue) this.leftValue = '0';

    this.rightValue = this.rightValue.replace(this.moneyInputRegExp, '');
    this.leftValue = this.leftValue.replace(this.moneyInputRegExp, '');

    while(this.leftValue.charAt(0) === '0' && this.leftValue.length > 1) {
      this.leftValue = this.leftValue.substring(1);
    }
  }

  render() {
    return (
      <div class="money-input">
        <div class={'money-input__header ' + ((this.activeElement || this.rightValue || this.leftValue) ? 'money-input__header--active' : '') + (this.isValueValid ? ' money-input__header--valid' : '')}>
          <span>Amount</span>
        </div>
        <span class="money-input__euro-sign">€</span>
        <input class="money-input__field money-input__field__left"
               type="text"
               placeholder="1000"
               maxlength="6"
               onInput={(event) => this.handleChangeLeft(event)}
               ref={el => this.moneyInputLeft = el as HTMLInputElement}/>
        <span class="money-input__comma-separator">,</span>
        <input class="money-input__field money-input__field__right"
               type="text"
               placeholder="00"
               maxlength="2"
               value={this.rightValue}
               onBlur={() => this.handleBlurRight()}
               onInput={(event) => this.handleChangeRight(event)}
               ref={el => this.moneyInputRight = el as HTMLInputElement}/>
         <div class={'money-input__validation-error ' + ((this.moneyValue >= 0 && !this.isValueValid) ? 'money-input__validation-error--active' : '' ) }>{ this.moneyValue >= 0 && !this.isValueValid ? '* ' + this.moneyValidator.errorMessage : ''}</div>
      </div>
    );
  }

}
