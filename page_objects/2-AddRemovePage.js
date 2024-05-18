import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AddRemoveElemPage extends BasePage {
  constructor(page) {
    super(page);
    this.heading = page.locator("h3");
    this.addElemButton = page.locator("");
    this.deleteButton = page.locator("");
  }

  async isAddRemoveElemPageOpened() {
    await expect(this.page).toHaveURL(/add_remove_elements/);
  }
}
