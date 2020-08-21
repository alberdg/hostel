const puppeteer = require('puppeteer');
import { SEARCH_BUTTON } from '../../../constants';
const ROOM_LIST_SELECTOR = '#room-list';
let page, browser;

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto('localhost:3000');
  await page.focus('#date-in-input');
  await page.keyboard.type('24/12/2030');
  await page.focus('#date-out-input');
  await page.keyboard.type('31/12/2030');
  await page.click(SEARCH_BUTTON);
  await page.waitFor(ROOM_LIST_SELECTOR);
});


describe('Room List component tests', () => {
  it('Should display room list ul', async () => {
    const length = await page.$$eval(ROOM_LIST_SELECTOR, el => el.length);
    expect(length).toEqual(1);
  });

  it('Should display ten room list items', async () => {
    const length = await page.$$eval('.room-list-item', el => el.length);
    expect(length).toEqual(9);
  })
});

describe('Room list item component tests', () => {
  it('Should display one image per room found', async () => {
    const length = await page.$$eval('.room-list-item-picture', el => el.length);
    expect(length).toEqual(9);
  });

  it('Should display a title per room found', async () => {
    const length = await page.$$eval('.room-list-item-title', el => el.length);
    expect(length).toEqual(9);
  });

  it('Should display a subtitle per room found', async () => {
    const length = await page.$$eval('.room-list-item-title', el => el.length);
    expect(length).toEqual(9);
  });

  it('Should display a price per room found', async () => {
    const length = await page.$$eval('.room-list-item-price', el => el.length);
    expect(length).toEqual(9);
  });

  it('Should display two buttons per room found', async () => {
    const length = await page.$$eval('.room-list-item-button', el => el.length);
    expect(length).toEqual(18);
  });
});


afterEach(() => {
  page.close();
  browser.close();
});
