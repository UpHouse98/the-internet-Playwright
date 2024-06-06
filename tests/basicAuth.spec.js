import { test } from '../page_objects/fixtures';
//todo
test('Basic Auth - Test', async ({ basePage, basicAuthPage }) => {
  await basePage.loadPage('/');
  await basePage.navigateToBasicAuth();
  await basicAuthPage.isDialogVisible();
});
