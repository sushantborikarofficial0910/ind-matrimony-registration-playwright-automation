# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Registrationflow\Negative\005_BasicDetails\TC_036_AlternateMobileWithCharacters.spec.js >> TC_036 - Alternate Mobile With Characters
- Location: tests\Registrationflow\Negative\005_BasicDetails\TC_036_AlternateMobileWithCharacters.spec.js:4:1

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  getByRole('textbox').nth(3)
Expected: "98221"
Received: ""
Timeout:  10000ms

Call log:
  - Expect "toHaveValue" getByRole('textbox').nth(3) with timeout 10000ms
  - waiting for getByRole('textbox').nth(3)
    23 × locator resolved to <input value=""/>
       - unexpected value ""

```

```yaml
- textbox
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { generateMobileNumber } = require('@utils/randomData');
  3  | 
  4  | test('TC_036 - Alternate Mobile With Characters', async ({ page }) => {
  5  | 
  6  |     console.log("🚀 TC_036 Started");
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
  29 |     const alternateMobile = page.getByRole('textbox').nth(3);
  30 | 
  31 |     await alternateMobile.fill('98221CDQWE');
  32 | 
  33 |     // Verify alphabets are rejected
> 34 |     await expect(alternateMobile).toHaveValue('98221');
     |                                   ^ Error: expect(locator).toHaveValue(expected) failed
  35 | 
  36 |     // Continue
  37 |     await page.locator('.continue-btn').click();
  38 | 
  39 |     console.log("✅ PASS - Characters Rejected");
  40 | 
  41 |     //verify registration step Number
  42 |     await expect(page.locator('.step-number')).toHaveText('Step 3 of 6');
  43 | 
  44 |     console.log("✅ PASS - Registration Step Number Verified");
  45 | 
  46 | });
```