import { test } from "@playwright/test";
import { BasePage } from "../page_objects/BasePage";
import { AddRemoveElemPage } from "../page_objects/2-AddRemovePage";

let basePage, addRemoveElemPage;

test.describe("Add/Remove Element Page", () => {
  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    addRemoveElemPage = new AddRemoveElemPage(page);
    await basePage.loadPage("/");
    await basePage.navigateToAddRemoveElem();
    await addRemoveElemPage.isAddRemoveElemPageOpened();
  });

  test("Add/Remove element - Test", async () => {
    await addRemoveElemPage.addElement();
    await addRemoveElemPage.deleteElement();
  });

  test.only("Add/Remove multimple elements", async () => {
    let numberOfElements = 5;
    await addRemoveElemPage.addMultipleElements(numberOfElements);
    await addRemoveElemPage.checkDeletedElements(numberOfElements);
  });
});
