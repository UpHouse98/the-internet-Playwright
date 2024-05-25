import { test } from "@playwright/test";
import { BasePage } from "../page_objects/BasePage";
import { BasicAuth } from "../page_objects/3-BasicAuth";

let basePage, basicAuth;

test.only("Basic Auth - Test", async ({ page }) => {
  basePage = new BasePage(page);
  basicAuth = new BasicAuth(page);
  await basePage.loadPage("/");
  await basePage.navigateToBasicAuth();
  await basicAuth.isDialogVisible();
});
