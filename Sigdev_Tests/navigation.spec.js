import { test } from "@playwright/test"
import { NavigationPanel } from "../pages/NavigationPanel.js"

let navpanel;

test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    });
    await page.goto('/dashboard');
    await page.waitForLoadState('domcontentloaded');
    navpanel = new NavigationPanel(page);
})

test('Verify the side Nav menu items are present', async ({page}) =>{



    await navpanel.verifyNavigationItems();


    await navpanel.openMenuIfClosedSecond();
    await navpanel.verifyNavigationItemsSecond();
    // knkbkjh

})