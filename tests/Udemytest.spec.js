import { test, expect } from '@playwright/test';

const BASE_URL = 'https://eventhub.rahulshettyacademy.com';

const USER_EMAIL = 'Dummyy@gmail.com';
const USER_PASSWORD = 'Dummy@123';

test('create event, book it, and verify seat reduction', async ({ page }) => {
  await page.goto(`${BASE_URL}/login`);

  await page.getByPlaceholder('you@email.com').fill(USER_EMAIL);
  await page.getByLabel('Password').fill(USER_PASSWORD);
  await page.locator('#login-btn').click();

  await expect(
    page.getByRole('link', { name: 'Browse Events →' })
  ).toBeVisible();

  await page.goto(`${BASE_URL}/admin/events`);

  const eventTitle = `Test Event ${Date.now()}`;

  await page.locator('#event-title-input').fill(eventTitle);
  await page
    .locator('#admin-event-form textarea')
    .fill('Playwright test event');

  await page.getByLabel('City').fill('Test City');
  await page.getByLabel('Venue').fill('Test Venue');
  await page
    .getByLabel('Event Date & Time')
    .fill('2027-12-31T10:00');

  await page.getByLabel('Price ($)').fill('100');
  await page.getByLabel('Total Seats').fill('50');

  await page.locator('#add-event-btn').click();

  await expect(page.getByText('Event created!')).toBeVisible();

  await page.goto(`${BASE_URL}/events`);

  const eventCards = page.getByTestId('event-card');
  const targetCard = eventCards.filter({ hasText: eventTitle }).first();

  await expect(targetCard).toBeVisible();

  const seatsBeforeBooking = parseInt(
    await targetCard.getByText(/seats?/i).first().innerText(),
    10
  );

  await targetCard.getByTestId('book-now-btn').click();

  await expect(page.locator('#ticket-count')).toHaveText('1');

  await page.getByLabel('Full Name').fill('Test Student');
  await page
    .locator('#customer-email')
    .fill('test.student@example.com');

  await page
    .getByPlaceholder('+91 98765 43210')
    .fill('9876543210');

  await page.locator('.confirm-booking-btn').click();

  const bookingReference = page.locator('.booking-ref').first();

  await expect(bookingReference).toBeVisible();

  const bookingRef = (await bookingReference.innerText()).trim();

  expect(bookingRef.charAt(0)).toBe(
    eventTitle.charAt(0).toUpperCase()
  );

  await page.getByRole('link', { name: 'View My Bookings' }).click();

  await expect(page).toHaveURL(`${BASE_URL}/bookings`);

  const matchingBooking = page
    .locator('#booking-card')
    .filter({ hasText: bookingRef })
    .first();

  await expect(matchingBooking).toBeVisible();
  await expect(matchingBooking).toContainText(eventTitle);

  await page.goto(`${BASE_URL}/events`);

  const updatedCard = eventCards.filter({ hasText: eventTitle }).first();

  await expect(updatedCard).toBeVisible();

  const seatsAfterBooking = parseInt(
    await updatedCard.getByText(/seats?/i).first().innerText(),
    10
  );

  expect(seatsAfterBooking).toBe(seatsBeforeBooking - 1);
});