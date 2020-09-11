import { Component, h } from '@stencil/core';

@Component({
  tag: 'rabo-form',
  styleUrl: 'form.css',
  shadow: true,
})
export class Form {

  render() {
    return (
      <div class="rabo-form">
        <rabo-money-input></rabo-money-input>
      </div>
    );
  }

}
