const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { MyInfoPage } = require('../pages/MyInfoPage');

// Utility function to login and go to My Info
async function loginAndGotoMyInfo(page) {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await expect(page).toHaveURL(/.*dashboard.*/);
  await dashboardPage.gotoMyInfo();
}

test('Edit employee full name and verify success', async ({ page }) => {
  const myInfoPage = new MyInfoPage(page);
  await loginAndGotoMyInfo(page);

  // Scroll to bottom to find Edit button
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await myInfoPage.clickEdit();

  // Scroll to top to edit name
  await page.evaluate(() => window.scrollTo(0, 0));
  await myInfoPage.editFullName('alex');

  // Scroll to bottom to save
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await myInfoPage.save();

  // Check for success toast message
  await expect(page.locator('.oxd-toast')).toBeVisible();
  await expect(page.locator('.oxd-toast')).toHaveText(/Success/i);

  // Check that the name is updated in the Personal Details section
  await expect(page.locator(myInfoPage.firstNameInput)).toHaveValue('alex');
}); 