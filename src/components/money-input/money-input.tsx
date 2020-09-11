import { Component, Event, h, Listen, State } from '@stencil/core';
import { NumericKeyInputService } from "../../core/services/numeric-key-input.service";
import { Validator } from "../../core/interfaces/validator.interface";
import { MoneyInputValidator } from "../../core/validators/money-input-validator.validator";
import { MoneyInputAmount } from "../../core/interfaces/money-input.interface";
import { EventEmitter } from "@stencil/router/dist/types/stencil.core";

@Component({
  tag: 'rabo-money-input',
  styleUrl: 'money-input.css',
  shadow: true,
})
export class MoneyInput {

  private moneyValidator: Validator<string> = MoneyInputValidator;

  @State() leftValue: string;
  @State() rightValue: string;
  @State() activeElement: boolean;
  @State() isValueValid: boolean;
  @State() moneyValue: number;

  @Event() changed: EventEmitter<MoneyInputAmount>;

  @Listen('mouseover')
  onMouseOver() {
    this.activeElement = true;
  }

  @Listen('mouseout')
  onMouseOut() {
    this.activeElement = false;
  }

  inputDown(e) {
    NumericKeyInputService.handleNumericOnlyKeyPress(e);
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
    //Automatically fills in the other number for ease of use
    if(!this.rightValue) this.rightValue = '00';
    if(!this.leftValue) this.leftValue = '0';

    const tmpMoneyValue: string = this.leftValue + '.' + this.rightValue;
    this.isValueValid = this.moneyValidator.validate(this.leftValue + '.' + this.rightValue);

    this.moneyValue = parseFloat(tmpMoneyValue);

    this.changed.emit({
      value: this.moneyValue,
      valid: this.isValueValid
    })
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
               value={this.leftValue}
               onKeyDown={(event)=> this.inputDown(event)}
               onInput={(event) => this.handleChangeLeft(event)}/>
        <span class="money-input__comma-separator">,</span>
        <input class="money-input__field money-input__field__right"
               type="text"
               placeholder="00"
               maxlength="2"
               value={this.rightValue}
               onKeyDown={(event)=> this.inputDown(event)}
               onInput={(event) => this.handleChangeRight(event)}/>
         <span></span>
      </div>
    );
  }

}
