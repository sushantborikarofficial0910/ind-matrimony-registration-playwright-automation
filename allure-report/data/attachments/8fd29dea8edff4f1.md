# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Registrationflow\Negative\005_BasicDetails\TC_035_AlternateMobileMoreThan10Digits.spec.js >> TC_035 - Alternate Mobile More Than 10 Digits
- Location: tests\Registrationflow\Negative\005_BasicDetails\TC_035_AlternateMobileMoreThan10Digits.spec.js:4:1

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator: getByRole('textbox').nth(3)
Expected: "9876543210"
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toHaveValue" getByRole('textbox').nth(3) with timeout 10000ms
  - waiting for getByRole('textbox').nth(3)
    5 × locator resolved to <input value=""/>
      - unexpected value ""

```

```yaml
- link "IND Matrimony - Find Your Perfect Match":
  - /url: /
  - img "IND Matrimony - Find Your Perfect Match"
- img "Hero"
- heading "Welcome to IND Matrimony" [level=2]
- paragraph: We provide the best match making service
- text: "When Were You Born? Choose your correct date of birth. Date Time Your age: 21 years 1950 1951 1952 1953 1954 1955 1956 1957 1958 1959 1960 1961 1962 1963 1964 1965 1966 1967 1968 1969 1970 1971 1972 1973 1974 1975 1976 1977 1978 1979 1980 1981 1982 1983 1984 1985 1986 1987 1988 1989 1990 1991 1992 1993 1994 1995 1996 1997 1998 1999 2000 2001 2002 2003 2004 2005 Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 Step 4 of 6"
- img "IND Matrimony logo"
- paragraph: India's most trusted matrimony platform. IND Matrimony provides verified profiles and personalized matches, ensuring a secure and simple path to finding your life partner.
- img "call"
- text: +91-8600555740
- img "call"
- text: +91-9004191775
- heading "Explore" [level=5]
- paragraph:
  - link "Home":
    - /url: /
- paragraph:
  - link "About Us":
    - /url: /about-us
- paragraph:
  - link "Success Stories":
    - /url: /success-story
- paragraph:
  - link "Blogs":
    - /url: https://blog.indmatrimony.in/
- paragraph:
  - link "Ind Matrimony Centers":
    - /url: /center
- paragraph:
  - link "Contact Us":
    - /url: /contact-us
- heading "Legal" [level=5]
- paragraph:
  - link "Fraud Alert":
    - /url: /fraud-alert
- paragraph:
  - link "Terms of Use":
    - /url: /term-of-uses
- paragraph:
  - link "Cancellation and Refund":
    - /url: /cancellation-refund
- paragraph:
  - link "Privacy Policy":
    - /url: /privacy-policy
- paragraph:
  - link "Cookie Policy":
    - /url: /cookie-policy
- paragraph:
  - link "Grievances":
    - /url: /grievances
- paragraph:
  - link "Child Safety Policy":
    - /url: /child-policy
- heading "App Available On" [level=5]
- link "App Store":
  - /url: https://apps.apple.com/in/app/ind-matrimony/id6741297825
  - img "App Store"
- link "Google Play":
  - /url: https://play.google.com/store/apps/details?id=com.indmatrimony.ind_matrimony
  - img "Google Play"
- paragraph: © Copyright 2025-2026 By IND Matrimony. All Rights Reserved.
- link "Facebook":
  - /url: https://www.facebook.com/indmatrimonyofficial/
  - img "Facebook"
- link "Instagram":
  - /url: https://www.instagram.com/indmatrimony?igsh=MWo4enpmcTNubDc3aA==
  - img "Instagram"
- link "LinkedIn":
  - /url: https://www.linkedin.com/company/ind-matrimony/
  - img "LinkedIn"
- link:
  - /url: https://www.youtube.com/@INDMatrimony/
  - img
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { generateMobileNumber } = require('@utils/randomData');
  3  | 
  4  | test('TC_035 - Alternate Mobile More Than 10 Digits', async ({ page }) => {
  5  | 
  6  |     console.log("🚀 TC_035 Started");
  7  | 
  8  |     // Navigate to Basic Details Page
  9  |     await page.goto('https://uat-app.inddevelopment.in/');
  10 |     await page.getByRole('link', { name: 'Register' }).click();
  11 |     const mobile = generateMobileNumber();
  12 |     console.log("Generated Mobile:", mobile);
  13 | 
  14 |     await page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobile);
  15 |     await page.getByRole('button', { name: 'Get OTP' }).click();
  16 |     await page.getByRole('textbox', { name: 'Enter OTP' }).fill('123456');
  17 |     await page.getByRole('button', { name: 'Verify' }).click();
  18 |     await page.getByText('Self').click();
  19 |     await page.locator('.continue-btn').click();
  20 |     await page.getByText('I AM A MAN').click();
  21 |     await page.locator('.continue-btn').click();
  22 | 
  23 |     console.log("✅ Basic Details Page Opened");
  24 | 
  25 |     // Mandatory Fields
  26 |     await page.getByRole('textbox').first().fill('Sushant');
  27 |     await page.getByRole('textbox').nth(1).fill('Patil');
  28 | 
  29 |     // Invalid Alternate Mobile
  30 |     const alternateMobile = page.getByRole('textbox').nth(3);
  31 | 
  32 |     await alternateMobile.fill('9876543210123');
  33 | 
  34 |     // Continue
  35 |     await page.locator('.continue-btn').click();
  36 | 
  37 |     // Verify only 10 digits accepted
> 38 |     await expect(alternateMobile).toHaveValue('9876543210');
     |                                   ^ Error: expect(locator).toHaveValue(expected) failed
  39 | 
  40 |     console.log("✅ PASS - More Than 10 Digits Not Accepted");
  41 | 
  42 |     //verify registration step Number
  43 |     await expect(page.locator('.step-number')).toHaveText('Step 3 of 6');
  44 | 
  45 |     console.log("✅ PASS - Registration Step Number Verified");
  46 | 
  47 | });
```