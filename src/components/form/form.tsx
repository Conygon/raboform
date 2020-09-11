import { Component, h, Listen, State } from '@stencil/core';
import { MoneyInputAmount } from "../../core/interfaces/money-input.interface";

@Component({
  tag: 'rabo-form',
  styleUrl: 'form.css',
  shadow: true,
})
export class Form {

  @State() disabled: boolean = true;

  @Listen('moneyInputChanged')
  moneyInputChanged(event: CustomEvent) {
    const data: MoneyInputAmount = event.detail;

    this.disabled = !data.valid;
  }

  handleSubmit(event) {
    event.preventDefault();

    //Collect values and do something with these values
  }

  render() {
    return (
      <form class="rabo-form" onSubmit={event => this.handleSubmit(event)}>
        <rabo-money-input></rabo-money-input>

        <div class="rabo-form__submit-button-wrapper">
          <button class="rabo-form__submit-button" disabled={this.disabled}>Submit</button>
        </div>
      </form>
    );
  }

}
