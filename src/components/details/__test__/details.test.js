const puppeteer = require('puppeteer');
const BOOK_NOW_BUTTON = '#book-now-button';
const BOOKING_TITLE = '#booking-title';
let page, browser;


beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto('localhost:3000/details/2');
  await page.waitFor(BOOK_NOW_BUTTON);
});

describe('Details component tests', () => {
  it.skip('Should have a main picture', async () => {
    const length = await page.$$eval('.details-picture', el => el.length);
    expect(length).toEqual(1);
  });

  it.skip('Should have a title', async () => {
    const length = await page.$$eval('#details-title', el => el.length);
    expect(length).toEqual(1);
  });

  it.skip('Should have a subtitle', async () => {
    const length = await page.$$eval('#details-subtitle', el => el.length);
    expect(length).toEqual(1);
  });

  it.skip('Should have a description', async () => {
    const length = await page.$$eval('.details-description', el => el.length);
    expect(length).toEqual(1);
  });

  it.skip('Should have a price', async () => {
    const length = await page.$$eval('#details-price', el => el.length);
    expect(length).toEqual(1);
  });

  it.skip('Should have a book now button', async () => {
    const length = await page.$$eval(BOOK_NOW_BUTTON, el => el.length);
    expect(length).toEqual(1);
  });

  it('Should navigate to booking page', async () => {
    await page.click(BOOK_NOW_BUTTON);
    await page.waitFor(BOOKING_TITLE);
    const length = await page.$$eval(BOOKING_TITLE, el => el.length);
    expect(length).toEqual(1);
  });

});

afterEach(() => {
  page.close();
  browser.close();
});
