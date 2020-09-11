import { newSpecPage } from '@stencil/core/testing';
import { Root } from '../root';

describe('rabo-root', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Root],
      html: `<rabo-root></rabo-root>`,
    });
    expect(page.root).toEqualHtml(`
      <rabo-root>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rabo-root>
    `);
  });
});
