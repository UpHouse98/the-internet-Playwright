import { test } from "@playwright/test";
import { BasePage } from "../page_objects/BasePage";
import { AddRemoveElemPage } from "../page_objects/2-AddRemovePage";

let basePage, addRemoveElemPage;

test("Add/Remove Element - Test", async ({ page }) => {
  basePage = new BasePage(page);
  addRemoveElemPage = new AddRemoveElemPage(page);

  await basePage.loadPage("/");
  await basePage.navigateToAddRemoveElem();
  await addRemoveElemPage.isAddRemoveElemPageOpened();
});
