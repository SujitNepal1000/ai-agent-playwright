class DashboardPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.dashboardHeader = 'h6:has-text("Dashboard")';
    this.myInfoMenu = 'a[href="/web/index.php/pim/viewMyDetails"]';
  }

  async isLoggedIn() {
    // Wait for dashboard header to be visible
    return this.page.isVisible(this.dashboardHeader);
  }

  async gotoMyInfo() {
    await this.page.click(this.myInfoMenu);
  }
}

module.exports = { DashboardPage }; 