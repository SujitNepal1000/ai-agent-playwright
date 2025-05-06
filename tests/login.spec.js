const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

// Valid login scenario
// This test checks that a user can log in with valid credentials
// and is redirected to the dashboard

test('Valid login redirects to dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await expect(page).toHaveURL(/.*dashboard.*/);
});

// Invalid login scenario
// This test checks that an invalid login attempt shows an error message

test('Invalid login shows error message', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'wrongpassword');
  // Wait for error message to appear
  await expect(page.locator('.oxd-alert-content-text')).toBeVisible();
  await expect(page.locator('.oxd-alert-content-text')).toHaveText(/Invalid credentials/i);
});

// Empty credentials scenario
// This test checks that submitting empty credentials shows a required error

test('Empty credentials shows required error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('', '');
  // Wait for required field error with a 10s timeout, fail if not found
  const requiredError = page.locator('.oxd-input-group .oxd-text.oxd-text--span').first();
  await expect(requiredError).toBeVisible({ timeout: 10000 });
  await expect(requiredError).toHaveText(/Required|需要/i, { timeout: 10000 });
});