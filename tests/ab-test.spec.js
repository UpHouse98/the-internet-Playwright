require("dotenv").config();

import { test } from "@playwright/test";
import { BasePage } from "../page_objects/BasePage";

let basePage;

test.describe("A/B test", () => {
  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
  });

  test("Test - 1", async () => {
    await basePage.loadPage("/");
    await basePage.navigateToABTesting();
  });
});
