import { test } from "@playwright/test";
import { BasePage } from "../page_objects/BasePage";
import { ABTestingPage } from "../page_objects/1-ABTestingPage";

let basePage, abtestingPage;

test("A/B - Test", async ({ page }) => {
  basePage = new BasePage(page);
  abtestingPage = new ABTestingPage(page);

  await basePage.loadPage("/");
  await basePage.navigateToABTesting();
  await abtestingPage.toHaveHeading(
    "A/B Test Variation 1" || "A/B Test Control",
  );
});
