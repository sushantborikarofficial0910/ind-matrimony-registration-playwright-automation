# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Registrationflow\Negative\015_CommunityDetails\TC_085_BrowserBack.spec.js >> TC_RES_NEG_001 - Browser Back
- Location: tests\Registrationflow\Negative\015_CommunityDetails\TC_085_BrowserBack.spec.js:5:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Your Native Place')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Your Native Place') with timeout 10000ms
  - waiting for getByText('Your Native Place')

```

```yaml
- link "IND Matrimony - Find Your Perfect Match":
  - /url: /
  - img "IND Matrimony - Find Your Perfect Match"
- img "Hero"
- heading "Welcome to IND Matrimony" [level=2]
- paragraph: We provide the best match making service
- text: Community Details Sharing your community information helps us find more suitable matches for you. Bengali Hindu Agri
- textbox "Enter Sub Caste"
- img "info"
- text: Community details are used to show matches aligned with your background. Step 2 of 2 Continue Are you sure? If you go back now, the information you’ve entered will not be saved. To complete this step, you’ll need to log in again and restart from this point. Leave Stay
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
  62  |     //Profession Page
  63  |     await expect(page.getByText('Adding this information improves profile completeness and increases chances of receiving relevant matches.', { exact: true })).toBeVisible();
  64  |     console.log("✅ Profession Page Opened");
  65  | 
  66  |     //Select Profession
  67  |     await page.getByText('Select Profession').click();
  68  |     const ProfessionOption = page.getByText('CxO', { exact: true });
  69  | 
  70  |     // Scroll
  71  |     await ProfessionOption.scrollIntoViewIfNeeded();
  72  | 
  73  |     // Click
  74  |     await ProfessionOption.click();
  75  | 
  76  |     //Select Income
  77  |     await page.getByText('Select Income').click();
  78  |     const IncomeOption = page.getByText('1 crore & above', { exact: true });
  79  | 
  80  |     // Scroll
  81  |     await IncomeOption.scrollIntoViewIfNeeded();
  82  | 
  83  |     // Click
  84  |     await IncomeOption.click();
  85  | 
  86  |     //Click Continue
  87  |     await page.locator('.continue-btn').click();
  88  | 
  89  |     //wait 2 minutes
  90  |     await page.waitForTimeout(2000);    // 2 seconds
  91  | 
  92  |     console.log("✅ Current Residence Page Opened");
  93  | 
  94  |     // Select State
  95  |     // -------------------------------
  96  |     await page.getByText('Select State').click();
  97  | 
  98  |     const stateOption = page.getByText('Maharashtra', { exact: true });
  99  | 
  100 |     await stateOption.scrollIntoViewIfNeeded();
  101 |     await stateOption.click();
  102 | 
  103 |     console.log("✅ State Selected");
  104 | 
  105 |     // Select City
  106 |     // -------------------------------
  107 |     await page.getByText('Select City').click();
  108 | 
  109 |     const cityOption = page.getByText('Nagpur', { exact: true });
  110 | 
  111 |     await cityOption.scrollIntoViewIfNeeded();
  112 |     await cityOption.click();
  113 | 
  114 |     console.log("✅ City Selected");
  115 | 
  116 |     // Continue
  117 |     await page.locator('.continue-btn').click();
  118 | 
  119 |     //wait 2 minutes
  120 |     await page.waitForTimeout(2000);    // 2 seconds
  121 | 
  122 |     // Verify Native Address Page
  123 |     await expect(page.getByText('State *')).toBeVisible();
  124 | 
  125 |     // Select Native State
  126 |     await page.locator('div').filter({ hasText: /^State \*$/ }).nth(2).click();
  127 | 
  128 |     await page.getByText('Arunachal Pradesh').click();
  129 | 
  130 |     // Select Native City
  131 |     await page.locator('div').filter({ hasText: /^City \*$/ }).nth(2).click();
  132 | 
  133 |     await page.getByText('Central Siang').click();
  134 | 
  135 |     // Continue
  136 |     await page.locator('.continue-btn').click();
  137 | 
  138 |     console.log('✅ Native State and City Selected successfully');
  139 | 
  140 | 
  141 |     // Select all fields
  142 |     await page.getByText('Select Domain *').click();
  143 |     await page.getByText('Bengali', { exact: true }).click();
  144 | 
  145 |     await page.getByText('Select Religion *').click();
  146 |     await page.getByText('Hindu', { exact: true }).click();
  147 | 
  148 |     await page.getByText('Select Caste *').click();
  149 |     await page.getByText('Agri', { exact: true }).click();
  150 | 
  151 |     console.log("✅ Community details selected");
  152 | 
  153 |     // Browser Back
  154 |     await page.goBack();
  155 | 
  156 |     console.log("⬅️ Browser Back clicked");
  157 | 
  158 |     // Verify previous page
  159 |     // Replace with actual previous page title if different
  160 |     await expect(
  161 |         page.getByText('Your Native Place')
> 162 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  163 | 
  164 |     console.log("✅ Previous page displayed");
  165 | 
  166 | });
```