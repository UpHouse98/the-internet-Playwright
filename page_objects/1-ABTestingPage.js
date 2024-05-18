import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ABTestingPage extends BasePage {
  constructor(page) {
    super(page);
    this.heading = page.locator("h3");
    this.description = page.locator("");
  }

  async isABTestingPageOpened() {
    await expect(this.page).toHaveURL(/abtest/);
  }

  async toHaveHeading(heading) {
    await expect(this.heading).toContainText(heading);
  }
}
