import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'rabo-form',
  styleUrl: 'form.css',
  shadow: true,
})
export class Form {

  @State() disabled: boolean = true;

  render() {
    return (
      <div class="rabo-form">
        <rabo-money-input></rabo-money-input>

        <div class="rabo-form__submit-button-wrapper">
          <button class="rabo-form__submit-button" disabled={this.disabled}>Submit</button>
        </div>
      </div>
    );
  }

}
