const puppeteer = require('puppeteer');
const BOOKING_STEP = '#booking-step';
let page, browser;


beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto('http://localhost:3000/booking/2');
  await page.waitFor(BOOKING_STEP);
});

describe('Booking personal data tests', () => {

  it('Should display a first name input', async () => {
    const length = await page.$$eval('#first-name-input', el => el.length);
    expect(length).toEqual(1);
  });

  it('Should display a last name input', async () => {
    const length = await page.$$eval('#last-name-input', el => el.length);
    expect(length).toEqual(1);
  });

  it('Should display an email input', async () => {
    const length = await page.$$eval('#email-input', el => el.length);
    expect(length).toEqual(1);
  });

  it('Should display a phone number input', async () => {
    const length = await page.$$eval('#phone-number-input', el => el.length);
    expect(length).toEqual(1);
  });

  it('Should display a next button', async () => {
    const length = await page.$$eval('#next-button', el => el.length);
    expect(length).toEqual(1);
  });

  it('Should display a cancel button', async () => {
    const length = await page.$$eval('#cancel-button', el => el.length);
    expect(length).toEqual(1);
  });

  it('Shouldn\'t display a back button', async () => {
    const length = await page.$$eval('#back-button', el => el.length);
    expect(length).toEqual(0);
  });
});

afterEach(() => {
  page.close();
  browser.close();
});
