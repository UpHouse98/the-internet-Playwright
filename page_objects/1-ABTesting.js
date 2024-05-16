import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ABTesting extends BasePage {
  constructor(page) {
    super(page);
  }

  async isABTestingPageOpened() {
    await expect(this.page).toHaveURL(/abtest/);
  }
}
