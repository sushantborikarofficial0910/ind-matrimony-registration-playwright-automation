# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\Landingpage\landingPageUI.spec.js >> Verify Header
- Location: tests\UI\Landingpage\landingPageUI.spec.js:5:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: internal:role=/Find Your Special SomeOne /i
Expected: visible
Error: InvalidSelectorError: Error while parsing selector `/Find Your Special SomeOne /i` - unexpected symbol "/" at position 0
    at syntaxError (<anonymous>:2048:11)
    at parseAttributeSelector (<anonymous>:2197:5)
    at Object.queryAll (<anonymous>:5430:22)
    at InjectedScript._queryEngineAll (<anonymous>:7059:49)
    at InjectedScript.querySelectorAll (<anonymous>:7046:30)
    at eval (eval at evaluate (:311:30), <anonymous>:2:42)
    at UtilityScript.evaluate (<anonymous>:313:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)

Call log:
  - Expect "toBeVisible" internal:role=/Find Your Special SomeOne /i with timeout 10000ms
  - waiting for internal:role=/Find Your Special SomeOne /i

```

# Page snapshot

```yaml
- generic [ref=e5]:
  - generic [ref=e6]:
    - link [ref=e8] [cursor=pointer]:
      - /url: /
      - img "IND Matrimony - Find Your Perfect Match" [ref=e9]
    - generic [ref=e10]:
      - link "Login" [ref=e11] [cursor=pointer]:
        - /url: /otpLogin
      - link "Register" [ref=e13] [cursor=pointer]:
        - /url: /otpLogin?mode=register
  - generic [ref=e15]:
    - generic [ref=e16]: All Verified Profile
    - heading "Jahaan dil milte hain, wahin se Kahaniyaan shuru hoti hain" [level=1] [ref=e19]:
      - generic [ref=e20]: Jahaan
      - generic [ref=e21]: dil
      - generic [ref=e22]: milte
      - generic [ref=e23]: hain,
      - generic [ref=e24]: wahin
      - generic [ref=e25]: se
      - generic [ref=e26]: Kahaniyaan
      - generic [ref=e27]: shuru
      - generic [ref=e28]: hoti
      - generic [ref=e29]: hain
    - img "Hero Banner" [ref=e30]
  - generic [ref=e31]:
    - heading "Find Your Special SomeOne" [level=2] [ref=e32]
    - paragraph [ref=e33]: FOLLOW THESE STEPS TO
    - generic [ref=e37]:
      - generic [ref=e38]:
        - img "Create" [ref=e39]
        - generic [ref=e40]: Create
        - generic [ref=e41]: Complete your profile in a few simple steps and get started.
      - generic [ref=e42]:
        - img "Select" [ref=e43]
        - generic [ref=e44]: Select
        - generic [ref=e45]: Browse through profiles to find your perfect match.
      - generic [ref=e46]:
        - img "Connect" [ref=e47]
        - generic [ref=e48]: Connect
        - generic [ref=e49]: Interact and get to know each other better.
  - generic [ref=e51]:
    - generic [ref=e52]:
      - heading "About IND Matrimony" [level=1] [ref=e53]
      - paragraph [ref=e54]: Find your perfect match on one of India’s most trusted matrimony platforms. Built for simplicity, security, and trust, every profile is verified for authenticity. Your privacy stays protected with advanced safeguards. Explore matches by age, profession, community, and more. Get custom alerts and start your journey toward a meaningful, lifelong connection with ease.
      - generic [ref=e55]:
        - generic [ref=e56]:
          - generic [ref=e57]: "1"
          - generic [ref=e58]:
            - generic [ref=e59]: Objective
            - paragraph [ref=e60]: Our goal is to provide a secure, reliable, and trusted matrimony platform to help you find the right life partner. We aim to make your matchmaking journey simple, safe, and meaningful from start to finish.
        - generic [ref=e61]:
          - generic [ref=e62]: "2"
          - generic [ref=e63]:
            - generic [ref=e64]: Membership
            - paragraph [ref=e65]: Registration is completely free. We offer seven plans across three categories including Premium (Gold, Diamond, Platinum), Premium+ (Classic, Prime), and Assisted (Royal, Elite).
        - generic [ref=e66]:
          - generic [ref=e67]: "3"
          - generic [ref=e68]:
            - generic [ref=e69]: Security
            - paragraph [ref=e70]: Your safety and privacy are our top priorities. Every profile is verified, and your personal data is protected with strong security and advanced privacy features.
    - generic [ref=e71]:
      - generic [ref=e72]:
        - img "Couple 1" [ref=e73]
        - img "Couple 2" [ref=e74]
      - generic [ref=e75]:
        - generic [ref=e76]: Secure Matrimony Platform
        - img "Verified" [ref=e77]
  - generic [ref=e78]:
    - generic [ref=e79]: Moments of Togetherness
    - generic [ref=e80]: Explore beautiful journeys that began with a simple connection.
    - generic [ref=e83]:
      - generic [ref=e85]:
        - img "Slide 1" [ref=e87]
        - img "Slide 2" [ref=e89]
        - img "Slide 3" [ref=e91]
        - img "Slide 4" [ref=e93]
        - img "Slide 5" [ref=e95]
      - generic [ref=e96]:
        - generic [ref=e97] [cursor=pointer]
        - generic [ref=e100]:
          - generic [ref=e101] [cursor=pointer]
          - generic [ref=e103] [cursor=pointer]
          - generic [ref=e105] [cursor=pointer]
          - generic [ref=e107] [cursor=pointer]
          - generic [ref=e109] [cursor=pointer]
        - generic [ref=e111] [cursor=pointer]
  - generic [ref=e115]:
    - generic [ref=e116]:
      - heading "Get the App Now" [level=2] [ref=e117]
      - generic [ref=e118]:
        - generic [ref=e119]: Simple
        - generic [ref=e120]: "|"
        - generic [ref=e121]: Fast
        - generic [ref=e122]: "|"
        - generic [ref=e123]: Safe & Secure
      - generic [ref=e124]:
        - img "Icon" [ref=e125]
        - img "Icon" [ref=e126]
        - img "Icon" [ref=e127]
        - img "Icon" [ref=e128]
      - paragraph [ref=e129]: Connect with your matches anytime, anywhere through the IND Matrimony mobile app.
      - generic [ref=e130]:
        - link [ref=e131] [cursor=pointer]:
          - /url: https://play.google.com/store/apps/details?id=com.indmatrimony.ind_matrimony
          - img "Google Play" [ref=e132]
        - link [ref=e133] [cursor=pointer]:
          - /url: https://apps.apple.com/in/app/ind-matrimony/id6741297825
          - img "App Store" [ref=e134]
    - img "Mobile App Preview" [ref=e136]
  - generic [ref=e137]:
    - generic [ref=e138]:
      - generic [ref=e139]: Explore Profiles based on your Criteria
      - generic [ref=e140]: Browse profiles that match your preferences.
    - generic [ref=e141]:
      - generic [ref=e142] [cursor=pointer]: Domain
      - generic [ref=e143] [cursor=pointer]: Religion
      - generic [ref=e144] [cursor=pointer]: Community
      - generic [ref=e145] [cursor=pointer]: Education
      - generic [ref=e146] [cursor=pointer]: Profession
      - generic [ref=e147] [cursor=pointer]: Age
      - generic [ref=e148] [cursor=pointer]: Interests
      - generic [ref=e149] [cursor=pointer]: Marital Status
      - generic [ref=e150] [cursor=pointer]: Income Level
      - generic [ref=e151] [cursor=pointer]: Country
    - generic [ref=e152]:
      - generic [ref=e153]: हिंदी
      - generic [ref=e156]: मराठी
      - generic [ref=e159]: ਪੰਜਾਬੀ
      - generic [ref=e162]: தமிழ்
      - generic [ref=e165]: తెలుగు
      - generic [ref=e168]: سنڌي
    - generic [ref=e171]:
      - generic [ref=e172]: Meitei
      - generic [ref=e175]: বাংলা
      - generic [ref=e178]: ગુજરાતી
      - generic [ref=e181]: اردو
      - generic [ref=e184]: ಕನ್ನಡ
      - generic [ref=e187]: ଓଡ଼ିଆ
      - generic [ref=e190]: മലയാളം
      - generic [ref=e193]: मारवाड़ी
    - generic [ref=e196]:
      - generic [ref=e197]: অসমীয়া
      - generic [ref=e200]: नागा
      - generic [ref=e203]: মণিপুরী
      - generic [ref=e206]: अंगिका
      - generic [ref=e209]: खासी
      - generic [ref=e212]: Mizo
      - generic [ref=e215]: सिक्किमी
      - generic [ref=e218]: अवधी
      - generic [ref=e221]: English
      - generic [ref=e224]: भोजपुरी
    - generic [ref=e227]:
      - generic [ref=e228]: कोंकणी
      - generic [ref=e231]: राजस्थानी
      - generic [ref=e234]: गढ़वाली
      - generic [ref=e237]: मैथिली
      - generic [ref=e240]: हरियाणवी
      - generic [ref=e243]: ತುಳು
      - generic [ref=e246]: डोगरी
    - generic [ref=e249]:
      - generic [ref=e250]: ᱥᱟᱱᱛᱟᱲᱤ
      - generic [ref=e253]: کٲشُر
      - generic [ref=e256]: बुंदेली
      - generic [ref=e259]: मगही
  - generic [ref=e262]:
    - generic [ref=e265] [cursor=pointer]:
      - generic [ref=e266]:
        - paragraph [ref=e267]:
          - text: Success Story
          - img "stars" [ref=e268]
        - heading "Real Stories, Real Connections" [level=2] [ref=e269]
        - heading [level=1] [ref=e271]:
          - text: hitesh
          - img "heart" [ref=e272]
          - text: Samiksha
        - blockquote [ref=e273]: "\"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium ... \"Read more"
        - paragraph [ref=e274]: – Author
      - img "hitesh weds Samiksha" [ref=e277]
    - generic [ref=e278]:
      - button "Previous" [ref=e279] [cursor=pointer]
      - generic [ref=e282]:
        - button "Slide 1" [ref=e283] [cursor=pointer]
        - button "Slide 2" [ref=e284] [cursor=pointer]
        - button "Slide 3" [ref=e285] [cursor=pointer]
        - button "Slide 4" [ref=e286] [cursor=pointer]
        - button "Slide 5" [ref=e287] [cursor=pointer]
        - button "Slide 6" [ref=e288] [cursor=pointer]
      - button "Next" [ref=e289] [cursor=pointer]
  - generic [ref=e293]:
    - generic [ref=e294]:
      - generic [ref=e295]: Want to be our next success story?
      - generic [ref=e296]: Create your profile today and take the first step toward your forever.
    - button "Register" [ref=e297] [cursor=pointer]
  - generic [ref=e298]:
    - generic [ref=e300]:
      - generic [ref=e301]:
        - img "IND Matrimony logo" [ref=e302]
        - paragraph [ref=e303]: India's most trusted matrimony platform. IND Matrimony provides verified profiles and personalized matches, ensuring a secure and simple path to finding your life partner.
        - generic [ref=e304]:
          - generic [ref=e305] [cursor=pointer]:
            - img "call" [ref=e306]
            - generic [ref=e307]: +91-8600555740
          - generic [ref=e308] [cursor=pointer]:
            - img "call" [ref=e309]
            - generic [ref=e310]: +91-9004191775
      - generic [ref=e311]:
        - heading "Explore" [level=5] [ref=e312]
        - paragraph [ref=e313]:
          - link "Home" [ref=e314] [cursor=pointer]:
            - /url: /
        - paragraph [ref=e316]:
          - link "About Us" [ref=e317] [cursor=pointer]:
            - /url: /about-us
        - paragraph [ref=e319]:
          - link "Success Stories" [ref=e320] [cursor=pointer]:
            - /url: /success-story
        - paragraph [ref=e322]:
          - link "Blogs" [ref=e323] [cursor=pointer]:
            - /url: https://blog.indmatrimony.in/
        - paragraph [ref=e325]:
          - link "Ind Matrimony Centers" [ref=e326] [cursor=pointer]:
            - /url: /center
        - paragraph [ref=e328]:
          - link "Contact Us" [ref=e329] [cursor=pointer]:
            - /url: /contact-us
      - generic [ref=e331]:
        - heading "Legal" [level=5] [ref=e332]
        - paragraph [ref=e333]:
          - link "Fraud Alert" [ref=e334] [cursor=pointer]:
            - /url: /fraud-alert
        - paragraph [ref=e336]:
          - link "Terms of Use" [ref=e337] [cursor=pointer]:
            - /url: /term-of-uses
        - paragraph [ref=e339]:
          - link "Cancellation and Refund" [ref=e340] [cursor=pointer]:
            - /url: /cancellation-refund
        - paragraph [ref=e342]:
          - link "Privacy Policy" [ref=e343] [cursor=pointer]:
            - /url: /privacy-policy
        - paragraph [ref=e345]:
          - link "Cookie Policy" [ref=e346] [cursor=pointer]:
            - /url: /cookie-policy
        - paragraph [ref=e348]:
          - link "Grievances" [ref=e349] [cursor=pointer]:
            - /url: /grievances
        - paragraph [ref=e351]:
          - link "Child Safety Policy" [ref=e352] [cursor=pointer]:
            - /url: /child-policy
      - generic [ref=e354]:
        - heading "App Available On" [level=5] [ref=e355]
        - generic [ref=e356]:
          - link [ref=e357] [cursor=pointer]:
            - /url: https://apps.apple.com/in/app/ind-matrimony/id6741297825
            - img "App Store" [ref=e358]
          - link [ref=e359] [cursor=pointer]:
            - /url: https://play.google.com/store/apps/details?id=com.indmatrimony.ind_matrimony
            - img "Google Play" [ref=e360]
    - generic [ref=e362]:
      - paragraph [ref=e363]: © Copyright 2025-2026 By IND Matrimony. All Rights Reserved.
      - generic [ref=e364]:
        - link [ref=e365] [cursor=pointer]:
          - /url: https://www.facebook.com/indmatrimonyofficial/
          - img "Facebook" [ref=e366]
        - link [ref=e368] [cursor=pointer]:
          - /url: https://www.instagram.com/indmatrimony?igsh=MWo4enpmcTNubDc3aA==
          - img "Instagram" [ref=e369]
        - link [ref=e371] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/ind-matrimony/
          - img "LinkedIn" [ref=e372]
        - link [ref=e374] [cursor=pointer]:
          - /url: https://www.youtube.com/@INDMatrimony/
```