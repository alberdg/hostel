import React, { useContext } from 'react';
import { BookingContext } from '../../contexts/BookingContext';
const puppeteer = require('puppeteer');
const BOOKING_STEP = '#booking-step';
let page, browser;

const { storeBookingStep } = useContext(BookingContext);

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto('http://localhost:3000/booking/2');
  storeBookingStep(1);
  await page.waitFor(BOOKING_STEP);
});

describe('Booking payment data tests', () => {

  it('Should display first name information', async () => {
    const length = await page.$$eval('#first-name-label', el => el.length);
    expect(length).toEqual(1);
  });

  it('Should display last name information', async () => {
    const length = await page.$$eval('#last-name-label', el => el.length);
    expect(length).toEqual(1);
  });

  it('Should display email information', async () => {
    const length = await page.$$eval('#email-label', el => el.length);
    expect(length).toEqual(1);
  });

  it('Should display phone number information', async () => {
    const length = await page.$$eval('#phone-number-label', el => el.length);
    expect(length).toEqual(1);
  });

  it('Should display card holder name input', async () => {
    const length = await page.$$eval('#card-holder-name-input', el => el.length);
    expect(length).toEqual(1);
  });

  it('Should display card number input', async () => {
    const length = await page.$$eval('#card-number-input', el => el.length);
    expect(length).toEqual(1);
  });

  it('Should display card number cvc', async () => {
    const length = await page.$$eval('#card-cvc-input', el => el.length);
    expect(length).toEqual(1);
  });

  it('Should display card expiration month input', async () => {
    const length = await page.$$eval('#card-expiration-month-input', el => el.length);
    expect(length).toEqual(1);
  });

  it('Should display card expiration year input', async () => {
    const length = await page.$$eval('#card-expiration-year-input', el => el.length);
    expect(length).toEqual(1);
  });

  it('Should display card number input', async () => {
    const length = await page.$$eval('#card-name-input', el => el.length);
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

  it('Should display a back button', async () => {
    const length = await page.$$eval('#back-button', el => el.length);
    expect(length).toEqual(1);
  });
});

afterEach(() => {
  page.close();
  browser.close();
});
