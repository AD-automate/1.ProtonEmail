Description:

Automated test script for testing proton email website.Testing includes both positve and negative scenarios.

Positive testing:
1. User heads to landing page of site.
2. User presses sign in and input credentials.
3. User opens an email and copies some content on it.
4. User composes an email and pastes the content.
5. User opens calendar on new tab.
6. User creates a new event and closes the tab.
7. User signs out.

Negative testing:
1. User inputs invalid email address.
2. User inputs invalid password.

Limitations: For negative testing, the first two scenarios can only be run on headed mode because of captcha. It will fail on headless mode
