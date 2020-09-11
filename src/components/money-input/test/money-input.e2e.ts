import { newE2EPage } from '@stencil/core/testing';

describe('money-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rabo-money-input></rabo-money-input>');

    const element = await page.find('rabo-money-input');
    expect(element).toHaveClass('hydrated');
  });
});
