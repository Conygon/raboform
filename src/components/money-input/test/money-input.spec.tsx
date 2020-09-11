import { newSpecPage } from '@stencil/core/testing';
import { MoneyInput } from '../money-input';

describe('money-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MoneyInput],
      html: `<money-input></money-input>`,
    });
    expect(page.root).toEqualHtml(`
      <money-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </money-input>
    `);
  });
});
