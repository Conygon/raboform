import { Component, h, Listen, State } from '@stencil/core';
import { HelperService } from "../../core/services/numeric-key-input.service";

@Component({
  tag: 'rabo-money-input',
  styleUrl: 'money-input.css',
  shadow: true,
})
export class MoneyInput {

  @State() leftValue: string;
  @State() rightValue: string;

  @State() activeElement = false;

  @Listen('mouseover')
  onMouseOver() {
    this.activeElement = true;
  }

  @Listen('mouseout')
  onMouseOut() {
    this.activeElement = false;
  }

  inputDown(e) {
    HelperService.handleNumericOnlyKeyPress(e);
  }

  render() {
    return (
      <div class="money-input">
        <div class={'money-input__header ' + (this.activeElement ? 'money-input__header--active' : '')}>
          <span>Amount</span>
        </div>
        <span class="money-input__euro-sign">€</span>
        <input class="money-input__field money-input__field__left"
               type="text"
               placeholder="1000"
               maxlength="6"
               value={this.leftValue}
               onKeyDown={(event)=> this.inputDown(event)}/>
        <span class="money-input__comma-separator">,</span>
        <input class="money-input__field money-input__field__right"
               type="text"
               placeholder="00"
               maxlength="2"
               value={this.rightValue}
               onKeyDown={(event)=> this.inputDown(event)}/>
      </div>
    );
  }

}
