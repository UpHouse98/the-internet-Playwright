import { expect } from '@playwright/test';
import { BasePage } from '../BasePage.js';

export class BasicAuthPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async isDialogVisible() {
    await this.page.on('dialog', (dialog) => dialog.accept());
  }
}
