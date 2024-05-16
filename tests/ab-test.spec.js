import { test } from "@playwright/test";
import { BasePage } from "../page_objects/BasePage";

let basePage;

test("Test - 1", async ({ page }) => {
  basePage = new BasePage(page);
  await basePage.loadPage("/");
  await basePage.navigateToABTesting();
});
