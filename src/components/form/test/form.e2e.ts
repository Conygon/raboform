import { E2EPage, newE2EPage, E2EElement } from '@stencil/core/testing';

describe('rabo-form', () => {

  let page: E2EPage;
  let element: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage({ html: `<rabo-form></rabo-form>` });
  });

  it('renders', async () => {
    element = await page.find('rabo-form');
    expect(element).toHaveClass('hydrated');
  });

  it('should render money-input', async () => {
    element = await page.find('rabo-form >>> rabo-money-input');
    expect(element).toHaveClass('hydrated');
  });

  it('should have disabled submit button because moneyInput is 0', async () => {
    element = await page.find('rabo-form >>> .rabo-form__submit-button');
    expect(element).toHaveAttribute('disabled');
  });

  /*
      I wanted to keep this test here, it seemed logical to me that it should work.
      However I need to know more about the limitation/inner workings of stenciljs/puppeteer/jest to get this to work.
   */
  // it('should have active submit button because moneyInput value is of correct value', async () => {
  //   element = await page.find('rabo-form >>> rabo-money-input');
  //
  //   element.setProperty('min', 0);
  //   element.setProperty('max', 100);
  //
  //   const moneyInputChanged = await page.spyOnEvent('moneyInputChanged');
  //
  //   const input = await page.find('rabo-form >>> rabo-money-input >>> .money-input__field__left');
  //   await input.type('80');
  //
  //   await page.waitForChanges();
  //
  //   expect(moneyInputChanged).toHaveReceivedEventDetail({
  //     value: 80,
  //     valid: true
  //   });
  //
  //   await page.waitForChanges();
  //
  //   const submitButton = await page.find('rabo-form >>> .rabo-form__submit-button');
  //   expect(submitButton).not.toHaveAttribute('disabled');
  // });

});
