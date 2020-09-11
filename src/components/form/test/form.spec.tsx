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
          <slot></slot>
        </mock:shadow-root>
      </rabo-form>
    `);
  });
});
