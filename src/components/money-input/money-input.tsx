import { Component, h, Listen, State } from '@stencil/core';

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
               value={this.leftValue}/>
        <span class="money-input__comma-separator">,</span>
        <input class="money-input__field money-input__field__right"
               type="text"
               placeholder="00"
               maxlength="2"
               value={this.rightValue}/>
      </div>
    );
  }

}
