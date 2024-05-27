import { test } from "../page_objects/fixtures";

test.describe("Add/Remove Element Page", () => {
  test.beforeEach(async ({ basePage, addRemoveElemPage }) => {
    await basePage.loadPage("/");
    await basePage.navigateToAddRemoveElem();
    await addRemoveElemPage.isAddRemoveElemPageOpened();
  });

  test("Add/Remove element - Test", async ({ addRemoveElemPage }) => {
    await addRemoveElemPage.addElement();
    await addRemoveElemPage.deleteElement();
  });

  test("Add/Remove multimple elements", async ({ addRemoveElemPage }) => {
    let numberOfElements = 5;
    await addRemoveElemPage.addMultipleElements(numberOfElements);
    await addRemoveElemPage.checkDeletedElements(numberOfElements);
  });
});
