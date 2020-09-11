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
          <div>
            <header>
              <div class="rabo-root__header">Raboform</div>
            </header>

            <div class="rabo-root__form-container">
              <rabo-form></rabo-form>
            </div>
          </div>
        </mock:shadow-root>
      </rabo-root>
    `);
  });
});
