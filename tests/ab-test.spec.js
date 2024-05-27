import { test } from "../page_objects/fixtures";

test("A/B - Test", async ({ basePage, abtestingPage }) => {
  await basePage.loadPage("/");
  await basePage.navigateToABTesting();
  await abtestingPage.toHaveHeading("A/B Test");
});
