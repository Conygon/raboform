import { newSpecPage } from '@stencil/core/testing';
import { Form } from '../form';

describe('rabo-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Form],
      html: `<rabo-form></rabo-form>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-form>
        <mock:shadow-root>
           <form class="rabo-form">
           <rabo-money-input max="2000" min="0"></rabo-money-input>
           <div class="rabo-form__submit-button-wrapper">
             <button class="rabo-form__submit-button" disabled="">
               Submit
             </button>
           </div>
         </form>
        </mock:shadow-root>
      </rabo-form>
    `);
  });
});
