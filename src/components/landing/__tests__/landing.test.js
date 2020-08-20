const puppeteer = require('puppeteer');
const MAIN_PICTURE_SELECTOR = '#main-picture';
const SEARCH_BUTTON = '#search-button';
let page, browser;

const formatDate = date => {
  return date.toLocaleDateString('es-ES', { day:'numeric', month: 'numeric', year: 'numeric' })
}

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto('localhost:3000');
  await page.waitFor(MAIN_PICTURE_SELECTOR);
});

describe('Landing component tests', () => {
  it('Should have a main picture', async () => {
    const length = await page.$$eval(MAIN_PICTURE_SELECTOR, el => el.length);
    expect(length).toEqual(1);
  });

  it('Should have a date in input', async () => {
    const length = await page.$$eval('#date-in-input', el => el.length);
    expect(length).toEqual(1);
  });

  it('Should have a date out input', async () => {
    const length = await page.$$eval('#date-out-input', el => el.length);
    expect(length).toEqual(1);
  });

  it('Should have a title', async () => {
    const text = await page.$eval('#title', el => el.innerHTML);
    expect(text).toEqual('Hostal Paracual');
  });

  it('Should have a subtitle', async () => {
    const text = await page.$eval('#subtitle', el => el.innerHTML);
    expect(text).toEqual('Donde descansarás como en tu propia casa');
  });

  it('Should have a submit form button', async () => {
    const length = (await page.$$(SEARCH_BUTTON)).length;
    expect(length).toEqual(1);
  });

  it('Should display a spinner when loading', async done => {
    await page.focus('#date-in-input');
    await page.keyboard.type('24/12/2030');
    await page.focus('#date-out-input');
    await page.keyboard.type('31/12/2030');
    await page.click(SEARCH_BUTTON);
    const length = (await page.$$('.spinner')).length;
    expect(length).toEqual(1);
    done();
  });
});


afterEach(() => {
  page.close();
  browser.close();
});
