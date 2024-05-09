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
    this.DisapElements = page.locator("li a", {
      hasText: "Disappearing Elements",
    });
    this.dragAndDrop = page.locator("li a", { hasText: "Drag and Drop" });
    this.dropdown = page.locator("li a", { hasText: "Dropdown" });
    this.dynamicContent = page.locator("li a", { hasText: "Dynamic Content" });
    this.basicAuth = page.locator("li a", { hasText: "Basic Auth" });
    this.basicAuth = page.locator("li a", { hasText: "Basic Auth" });
    this.basicAuth = page.locator("li a", { hasText: "Basic Auth" });
    this.basicAuth = page.locator("li a", { hasText: "Basic Auth" });
    this.basicAuth = page.locator("li a", { hasText: "Basic Auth" });
    this.basicAuth = page.locator("li a", { hasText: "Basic Auth" });
    this.basicAuth = page.locator("li a", { hasText: "Basic Auth" });
    this.basicAuth = page.locator("li a", { hasText: "Basic Auth" });
    this.basicAuth = page.locator("li a", { hasText: "Basic Auth" });
  }

  async loadPage(url) {
    await this.page.goto(url);
  }

  async navigateToABTesting() {
    await this.ABTesting.click();
    await expect(this.page).toHaveURL(/abtest/);
  }
}

//
//
//
//
//
//
//
//
//
//
// Dynamic Controls
// Dynamic Loading
// Entry Ad
// Exit Intent
// File Download
// File Upload
// Floating Menu
// Forgot Password
// Form Authentication
// Frames
// Geolocation
// Horizontal Slider
// Hovers
// Infinite Scroll
// Inputs
// JQuery UI Menus
// JavaScript Alerts
// JavaScript onload event error
// Key Presses
// Large & Deep DOM
// Multiple Windows
// Nested Frames
// Notification Messages
// Redirect Link
// Secure File Download
// Shadow DOM
// Shifting Content
// Slow Resources
// Sortable Data Tables
// Status Codes
// Typos
// WYSIWYG Editor
