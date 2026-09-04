# EventHub Create, Book, and Verify Event

## Application Overview

Validate the EventHub authenticated workflow: sign in with an existing account, create a uniquely named event, locate it in the events catalog, book one ticket, verify the booking confirmation and My Bookings entry, and confirm the available seat count decreases by exactly one. The test requires a registered account and credentials supplied through test configuration or environment variables.

## Test Scenarios

### 1. Authenticated event booking workflow

**Seed:** `tests/seed.spec.js`

#### 1.1. Create an event, book one ticket, and verify seat reduction

**File:** `tests/Udemytest.spec.js`

**Steps:**
  1. Start from a fresh browser context and open the EventHub login page.
    - expect: The login page is displayed with Email, Password, and Sign In controls.
  2. Enter valid credentials for an existing EventHub account and submit Sign In.
    - expect: Authentication succeeds.
    - expect: The authenticated landing page displays the Browse Events action.
  3. Open the admin events page.
    - expect: The event creation form is displayed.
  4. Enter a unique event title, description, city, venue, future event date and time, price, and total seat count, then submit the form.
    - expect: The event is created successfully.
    - expect: An Event created! confirmation is visible.
  5. Open the Events page and locate the event card containing the unique title.
    - expect: The created event card is visible.
    - expect: The card shows an available seat count before booking.
  6. Select Book Now for the created event.
    - expect: The booking form is displayed for the selected event.
    - expect: The ticket count defaults to 1.
  7. Enter valid customer name, email, and phone details, then confirm the booking.
    - expect: A booking confirmation is displayed.
    - expect: The booking reference is non-empty and begins with the created event title's initial.
  8. Open View My Bookings and locate the booking card containing the booking reference.
    - expect: The bookings page is displayed.
    - expect: The matching booking card is visible and contains both the booking reference and event title.
  9. Return to the Events page and locate the same event card.
    - expect: The created event card remains visible.
    - expect: The available seat count is exactly one less than before booking.

#### 1.2. Reject invalid login credentials

**File:** `tests/Udemytest-login-negative.spec.js`

**Steps:**
  1. Start from a fresh browser context and open the EventHub login page.
    - expect: The login form is displayed.
  2. Enter an invalid email or password and submit Sign In.
    - expect: Authentication does not succeed.
    - expect: A visible validation or authentication error is displayed.
    - expect: The user remains on the login page.

#### 1.3. Reject incomplete event creation data

**File:** `tests/Udemytest-event-validation.spec.js`

**Steps:**
  1. Sign in with a valid account and open the admin events page.
    - expect: The event creation form is displayed.
  2. Leave one or more required event fields blank and submit the form.
    - expect: The event is not created.
    - expect: The missing field is reported by browser or application validation.
    - expect: No Event created! success message is shown.
