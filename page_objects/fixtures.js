import { test as base } from '@playwright/test';

import { BasePage } from './BasePage';
import { ABTestingPage } from '../page_objects/pages/ABTestingPage';
import { AddRemoveElemPage } from '../page_objects/pages/AddRemovePage';
import { BasicAuthPage } from '../page_objects/pages/BasicAuthPage';

export const test = base.test.extend({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },

  abtestingPage: async ({ page }, use) => {
    await use(new ABTestingPage(page));
  },

  addRemoveElemPage: async ({ page }, use) => {
    await use(new AddRemoveElemPage(page));
  },

  basicAuthPage: async ({ page }, use) => {
    await use(new BasicAuthPage(page));
  },
});
