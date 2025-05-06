class MyInfoPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.editButton = 'button:has-text("Edit")';
    this.firstNameInput = 'input[name="firstName"]';
    this.middleNameInput = 'input[name="middleName"]';
    this.lastNameInput = 'input[name="lastName"]';
    this.saveButton = 'button:has-text("Save")';
  }

  async clickEdit() {
    await this.page.waitForSelector(this.editButton, { state: 'visible', timeout: 10000 });
    await this.page.click(this.editButton);
  }

  async editFullName(newFirstName) {
    await this.page.fill(this.firstNameInput, newFirstName);
    // Optionally clear or fill middle and last name if needed
  }

  async save() {
    await this.page.click(this.saveButton);
  }
}

module.exports = { MyInfoPage }; 