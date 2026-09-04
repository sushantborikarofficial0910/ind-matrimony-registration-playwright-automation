# Exploratory Registration Plan

## Application Overview

Exploratory test plan for IND Matrimony UAT: cover landing page, registration entry points, mobile/OTP validations, profile creation basics, and footer/app links. Start from a clean session using the provided seed file.

## Test Scenarios

### 1. Registration Exploratory

**Seed:** `tests/seed.spec.ts`

#### 1.1. Landing Page Load

**File:** `tests/exploration/landing-page-load.spec.ts`

**Steps:**
  1. Navigate to the landing page URL
    - expect: Page loads successfully (HTTP 200)
    - expect: Page title contains 'IND Matrimony'
    - expect: Hero banner and primary CTAs (Login, Register) are visible

#### 1.2. Open Register Entry

**File:** `tests/exploration/open-register.spec.ts`

**Steps:**
  1. From landing page, click the 'Register' link/button
    - expect: Registration/OTP page opens
    - expect: Mobile number input is visible
    - expect: Register CTA is present

#### 1.3. Mobile Number Validation - Negative

**File:** `tests/exploration/mobile-negative.spec.ts`

**Steps:**
  1. Enter invalid mobile inputs and submit: blank, letters, special chars, short number, long number, spaces
    - expect: Appropriate validation messages shown for each case
    - expect: Form not submitted on invalid input

#### 1.4. Mobile Number Validation - Positive

**File:** `tests/exploration/mobile-positive.spec.ts`

**Steps:**
  1. Enter a valid mobile number and submit to request OTP
    - expect: OTP entry screen appears
    - expect: Timer or resend option is visible
    - expect: Server returns OTP-send acknowledgement (if visible)

#### 1.5. OTP Entry & Resend Behavior

**File:** `tests/exploration/otp.spec.ts`

**Steps:**
  1. On OTP screen, attempt blank submit, invalid OTP, resend OTP, and submit valid OTP flow
    - expect: Blank/invalid OTP show validation errors
    - expect: Resend triggers another OTP send and updates UI
    - expect: Successful OTP moves to profile creation

#### 1.6. Profile Creation - Basic Details

**File:** `tests/exploration/profile-basic.spec.ts`

**Steps:**
  1. Fill required profile fields (name, gender, DOB) and continue
    - expect: Fields accept valid input
    - expect: Validation messages for invalid/missing values
    - expect: Continue navigates to next profile step or completes registration

#### 1.7. Footer & App Links

**File:** `tests/exploration/footer-links.spec.ts`

**Steps:**
  1. Verify footer links (About Us, Contact, Privacy) and app store links open correct targets
    - expect: Footer links navigate to expected routes
    - expect: App Store & Google Play links open external store pages
    - expect: Contact numbers are visible and tappable
