import { newE2EPage } from '@stencil/core/testing';

describe('rabo-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rabo-form></rabo-form>');

    const element = await page.find('rabo-form');
    expect(element).toHaveClass('hydrated');
  });
});
