import { expect } from "@playwright/test";

export class BasePage {
  constructor(page) {
    this.page = page;
    this.ABTesting = page.locator("li a", { hasText: "A/B Testing" });
    this.addRemoveElements = page.locator("li a", {
      hasText: "Add/Remove Elements",
    });
    this.basicAuth = page.locator("li a", { hasText: "Basic Auth" });
    this.brokenImages = page.locator("li a", { hasText: "Broken Images" });
    this.challengingDOM = page.locator("li a", { hasText: "Challenging DOM" });
    this.checkboxes = page.locator("li a", { hasText: "Checkboxes" });
    this.contextMenu = page.locator("li a", { hasText: "Context Menu" });
    this.digestAuth = page.locator("li a", {
      hasText: "Digest Authentication",
    });
    this.disapElements = page.locator("li a", {
      hasText: "Disappearing Elements",
    });
    this.dragAndDrop = page.locator("li a", { hasText: "Drag and Drop" });
    this.dropdown = page.locator("li a", { hasText: "Dropdown" });
    this.dynamicContent = page.locator("li a", { hasText: "Dynamic Content" });
    this.dynamicControls = page.locator("li a", {
      hasText: "Dynamic Controls",
    });
    this.dynamicLoadind = page.locator("li a", { hasText: "Dynamic Loading" });
    this.entryAdd = page.locator("li a", { hasText: "Entry Ad" });
    this.exitIntent = page.locator("li a", { hasText: "Exit Intent" });
    this.fileDownload = page.locator("li a", { hasText: "File Download" });
    this.fileUpload = page.locator("li a", { hasText: "File Upload" });
    this.floatingMenu = page.locator("li a", { hasText: "Floating Menu" });
    this.forgorPassword = page.locator("li a", { hasText: "Forgot Password" });
    this.formAuth = page.locator("li a", { hasText: "Form Authentication" });
    this.frames = page.locator("li a", { hasText: "Frames" });
    this.geolocation = page.locator("li a", { hasText: "Geolocation" });
    this.horizontalSlider = page.locator("li a", {
      hasText: "Horizontal Slider",
    });
    this.hovers = page.locator("li a", { hasText: "Hovers" });
    this.infiniteScroll = page.locator("li a", { hasText: "Infinite Scroll" });
    this.inputs = page.locator("li a", { hasText: "Inputs" });
    this.jqueryMenus = page.locator("li a", { hasText: "JQuery UI Menus" });
    this.jsAlerts = page.locator("li a", { hasText: "JavaScript Alerts" });
    this.jsOnloadEventErr = page.locator("li a", {
      hasText: "JavaScript onload event error",
    });
    this.keyPresses = page.locator("li a", { hasText: "Key Presses" });
    this.largeAndDeepDOM = page.locator("li a", {
      hasText: "Large & Deep DOM",
    });
    this.multiWindows = page.locator("li a", { hasText: "Multiple Windows" });
    this.nestedFrames = page.locator("li a", { hasText: "Nested Frames" });
    this.notifMsgs = page.locator("li a", { hasText: "Notification Messages" });
    this.redirectLink = page.locator("li a", { hasText: "Redirect Link" });
    this.secureFileDownload = page.locator("li a", {
      hasText: "Secure File Download",
    });
    this.shadowDOM = page.locator("li a", { hasText: "Shadow DOM" });
    this.shiftingContent = page.locator("li a", {
      hasText: "Shifting Content",
    });
    this.slowResources = page.locator("li a", { hasText: "Slow Resources" });
    this.sortDataTables = page.locator("li a", {
      hasText: "Sortable Data Tables",
    });
    this.statusCodes = page.locator("li a", { hasText: "Status Codes" });
    this.typos = page.locator("li a", { hasText: "Typos" });
    this.editor = page.locator("li a", { hasText: "WYSIWYG Editor" });
  }

  async isElementVisible(...locators) {
    for (let locator of locators) {
      await expect(locator).toBeVisible();
    }
  }

  async loadPage(url) {
    await this.page.goto(url);
  }

  async navigateToSection(locator) {
    await this.isElementVisible(locator);
    await locator.click();
  }

  async navigateToABTesting() {
    await this.navigateToSection(this.ABTesting);
  }

  async navigateToAddRemoveElem() {
    await this.navigateToSection(this.addRemoveElements);
  }

  async navigateToBasicAuth() {
    await this.navigateToSection(this.basicAuth);
  }
}
