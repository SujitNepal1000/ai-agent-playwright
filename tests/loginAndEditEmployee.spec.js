const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { MyInfoPage } = require('../pages/MyInfoPage');

test('Login, verify, go to My Info, change name to alex and save', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const myInfoPage = new MyInfoPage(page);

  // Go to login page
  await loginPage.goto();

  // Login
  await loginPage.login('Admin', 'admin123');

  // Wait for navigation and take a screenshot for debugging
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'after-login.png', fullPage: true });

  // Debug: print page URL and title
  console.log('Current URL:', await page.url());
  console.log('Page title:', await page.title());

  // Verify successful login (increase timeout)
  await expect(page.locator(dashboardPage.dashboardHeader)).toBeVisible({ timeout: 15000 });

  // Go to My Info
  await dashboardPage.gotoMyInfo();

  // Edit employee full name to 'alex' and save
  await myInfoPage.editFullName('alex');
  await myInfoPage.save();

  // Optionally, verify the name was changed
  await expect(page.locator(myInfoPage.firstNameInput)).toHaveValue('alex');
}); 