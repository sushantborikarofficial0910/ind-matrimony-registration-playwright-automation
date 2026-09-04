# IND Matrimony Registration Page Test Plan

## Application Overview

Test plan for the IND Matrimony registration entry page at https://uat-app.inddevelopment.in/otpLogin?mode=register. The page displays the REGISTER form with a Mobile Number textbox and a disabled Get OTP button until input is accepted. Tests should start from a fresh browser context and must not use a real user's phone number unless explicitly approved.

## Test Scenarios

### 1. Registration Mobile Number

**Seed:** `tests/seed.spec.ts`

#### 1.1. Registration page loads with required controls

**File:** `tests/Registrationflow/RegistrationPage/TC_001_RegisterPageLoad.spec.js`

**Steps:**
  1. Navigate to https://uat-app.inddevelopment.in/otpLogin?mode=register
    - expect: The page loads without a navigation error
    - expect: The page URL contains /otpLogin?mode=register
    - expect: The page shows the heading REGISTER
    - expect: The Mobile Number textbox is visible
    - expect: The Get OTP button is visible and disabled while the field is blank

#### 1.2. Blank mobile number cannot request OTP

**File:** `tests/Registrationflow/RegistrationPage/TC_002_BlankMobile.spec.js`

**Steps:**
  1. Open the registration page and leave Mobile Number empty
    - expect: Get OTP remains disabled or submission is prevented
    - expect: No OTP request is initiated
    - expect: A clear validation message is shown if the UI provides inline validation

#### 1.3. Valid mobile number enables Get OTP

**File:** `tests/Registrationflow/RegistrationPage/TC_003_ValidMobile.spec.js`

**Steps:**
  1. Enter an approved test mobile number in Mobile Number
    - expect: The field accepts the number
    - expect: Get OTP becomes enabled
    - expect: The value is displayed in the expected format without unintended characters
  2. Click Get OTP
    - expect: The app sends an OTP request or displays the expected server response
    - expect: The user moves to the OTP verification state when the request succeeds

#### 1.4. Invalid mobile number is rejected

**File:** `tests/Registrationflow/RegistrationPage/TC_004_InvalidMobile.spec.js`

**Steps:**
  1. Enter an invalid number with fewer than the required digits
    - expect: Get OTP remains disabled or submission is rejected
    - expect: A mobile-number validation message is displayed
  2. Enter an invalid number with more than the required digits
    - expect: The extra digits are rejected or submission is blocked
    - expect: A mobile-number validation message is displayed

#### 1.5. Mobile field rejects unsupported characters

**File:** `tests/Registrationflow/RegistrationPage/TC_005_MobileCharacterValidation.spec.js`

**Steps:**
  1. Enter alphabetic characters into Mobile Number
    - expect: Alphabetic characters are rejected or validation is shown
    - expect: Get OTP cannot be used with the invalid value
  2. Enter special characters and whitespace around a number
    - expect: Unsupported characters are rejected or normalized according to the product rule
    - expect: The resulting value does not allow an invalid OTP request

#### 1.6. Existing mobile number registration handling

**File:** `tests/Registrationflow/RegistrationPage/TC_006_ExistingMobile.spec.js`

**Steps:**
  1. Use an approved test number that already has an account and click Get OTP
    - expect: The app returns the documented existing-account behavior
    - expect: The user is not silently registered as a duplicate
    - expect: The response gives an actionable next step such as login or an explanatory message

#### 1.7. Navigate between Login and Register modes

**File:** `tests/Registrationflow/RegistrationPage/TC_007_LoginRegisterNavigation.spec.js`

**Steps:**
  1. From the registration page, click Login
    - expect: The URL changes to /otpLogin without mode=register
    - expect: The page shows the login state
  2. Navigate back to /otpLogin?mode=register
    - expect: The REGISTER heading and registration controls are restored
    - expect: The mobile field is reset or retains data according to the documented behavior

#### 1.8. Registration page footer and external links

**File:** `tests/Registrationflow/RegistrationPage/TC_008_FooterLinks.spec.js`

**Steps:**
  1. Scroll to the footer and inspect navigation links
    - expect: Home, About Us, Success Stories, Contact Us, and legal links are visible
    - expect: Each internal link points to the expected route
  2. Inspect App Store and Google Play links
    - expect: The links point to the expected official IND Matrimony store URLs

#### 1.9. Registration form keyboard and accessibility behavior

**File:** `tests/Registrationflow/RegistrationPage/TC_009_RegisterAccessibility.spec.js`

**Steps:**
  1. Use keyboard navigation from the page and focus the Mobile Number field
    - expect: The focus order reaches the Mobile Number field and Get OTP button logically
    - expect: The focused control has a visible focus indicator
    - expect: The textbox has an accessible name of Mobile Number
  2. Enter a valid test number using the keyboard and activate Get OTP with Enter
    - expect: The form responds consistently with mouse and keyboard activation
    - expect: No unexpected page reload or focus loss occurs before the OTP state is shown
