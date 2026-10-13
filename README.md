<<<<<<< HEAD
#User Registration Automation – Playwright
📌 Project Overview

This project is an end-to-end UI automation framework developed using Playwright with JavaScript for testing a web application's user registration workflow.

The framework validates complete registration journeys along with positive, negative, functional, and field-level validation scenarios to ensure that users can successfully create profiles while invalid inputs are handled correctly.

The project follows a reusable and maintainable automation structure using the Page Object Model (POM), reusable utilities, test data, assertions, and Playwright reporting.

🎯 Testing Objectives
Validate the complete user registration flow.
Verify mandatory field validations.
Verify valid and invalid input scenarios.
Validate boundary conditions.
Verify navigation between registration steps.
Validate error messages and UI behavior.
Verify successful registration.
Identify functional and validation defects.
Maintain reusable and scalable automation scripts.

🧪 Registration Modules Covered

The automation covers multiple registration steps, including:

Landing Page
Mobile Number
OTP Verification
Profile Created By
Gender Selection
Basic Details
First Name
Last Name
Date of Birth
Time of Birth
Marital Status
Children Status
Height & Weight
Education
Profession
Residence
Registration Completion


✅ Positive Testing
Valid mobile number
Valid OTP
Valid profile selection
Valid gender selection
Valid personal details
Valid date and time
Valid marital status
Valid education and profession
Successful registration

❌ Negative Testing
Blank mandatory fields
Invalid mobile number
Invalid OTP
OTP with fewer digits
OTP with more digits
Invalid date
Future date of birth
Age below the allowed limit
Invalid name characters
Numbers in name fields
Special characters
Invalid alternate mobile number
Alternate mobile with characters
Alternate mobile with special characters
Duplicate primary and alternate mobile numbers

🔍 Validation Testing
Required field validation
Minimum and maximum length validation
Boundary value validation
Input format validation
Error message validation
Continue button validation
Single-selection validation
Dropdown validation

🛠️ Technology Stack
Technology	Purpose
JavaScript	Programming Language
Playwright	UI Automation
Node.js	Runtime Environment
npm	Package Management
Git	Version Control
GitHub	Source Code Management
GitHub Actions	CI/CD
HTML Report	Test Reporting

🏆 Project Outcome

The automation framework helps reduce repetitive manual testing effort and provides fast feedback on the registration workflow.

It is designed to be reusable, maintainable, scalable, and CI/CD ready, making it suitable for continuous regression testing of web applications.
=======
# ind-matrimony-registration-playwright-automation
End-to-end automation of the IND Matrimony registration flow using Playwright with JavaScript and Node.js. Includes positive and negative test cases, field validations, edge cases, dropdown dependencies, navigation testing, and Allure/HTML reporting to improve registration quality and identify defects early.
>>>>>>> 5dc85ae9d80650507cf43ab9edf76babab7a8a93
