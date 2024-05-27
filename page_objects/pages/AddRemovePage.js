import { expect } from "@playwright/test";
import { BasePage } from "../BasePage.js";

export class AddRemoveElemPage extends BasePage {
  constructor(page) {
    super(page);
    this.heading = page.locator("h3");
    this.addElemButton = page.locator("button", { hasText: "Add Element" });
    this.deleteButton = page.locator("button", { hasText: "Delete" });
  }

  async isAddRemoveElemPageOpened() {
    await expect(this.page).toHaveURL(/add_remove_elements/);
  }

  async addElement() {
    await this.addElemButton.click();
    await expect(this.deleteButton).toHaveCount(1);
  }

  async deleteElement() {
    await this.deleteButton.click();
    await expect(this.deleteButton).toHaveCount(0);
  }

  async addMultipleElements(nrOfElements) {
    for (let i = 0; i < nrOfElements; i++) {
      await this.addElemButton.click();
    }
    await expect(this.deleteButton).toHaveCount(nrOfElements);
  }

  async checkDeletedElements(nrOfElements) {
    for (let i = 0; i < nrOfElements; i++) {
      await expect(this.deleteButton).toHaveCount(nrOfElements);
      await this.deleteButton.first().click();
      nrOfElements -= 1;
    }
  }
}
