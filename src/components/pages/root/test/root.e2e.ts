import { newE2EPage } from '@stencil/core/testing';

describe('rabo-root', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rabo-root></rabo-root>');

    const element = await page.find('rabo-root');
    expect(element).toHaveClass('hydrated');
  });
});
