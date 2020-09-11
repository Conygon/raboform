import { Component, h } from '@stencil/core';

@Component({
  tag: 'rabo-root',
  styleUrl: 'root.css',
  shadow: true,
})
export class Root {

  render() {
    return (
      <div>
        <header>
          <div class="rabo-root__header">Raboform</div>
        </header>

        <div class="rabo-root__form-container">
          <rabo-form></rabo-form>
        </div>
      </div>
    );
  }

}
