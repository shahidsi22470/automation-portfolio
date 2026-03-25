import { expect } from "@playwright/test";

export class NavigationPanel {

    constructor(page) {
        this.page = page;


    }

    async openMenuIfClosed() {
        await this.page.getByRole('button', { name: 'Menu' }).waitFor({ state: 'visible' });
        await this.page.getByRole('button', { name: 'Menu' }).click();
        await this.page.waitForTimeout(800);

        // if News still not visible — sidebar was already open, click again to reopen
        const isVisible = await this.page.getByRole('link', { name: 'News', exact: true }).isVisible();
        if (!isVisible) {
            await this.page.getByRole('button', { name: 'Menu' }).click();
            await this.page.waitForTimeout(800);
        }
    }

    async verifyNavigationItems() {
        await this.openMenuIfClosed();

        await expect(this.page.getByText('Messenger')).toBeVisible();
        await expect(this.page.getByText('My Dock', { exact: true })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'News', exact: true })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Screener', exact: true })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Chart', exact: true })).toBeVisible();
        await expect(this.page.getByLabel('Menu').getByRole('button', { name: 'Companies' }).first()).toBeVisible();
        await expect(this.page.getByLabel('Menu').getByRole('button', { name: 'Alerts' }).first()).toBeVisible();
        await expect(this.page.getByLabel('Menu').getByRole('button', { name: 'Additional Pages' }).first()).toBeVisible();
    }

    async openMenuIfClosedSecond() {
        await this.page.getByRole('button', { name: 'New and Trending' }).click();
        await this.page.waitForTimeout(800);

        const isVisible = await this.page.getByRole('button', { name: 'Crypto ETFs' }).isVisible();
        if (!isVisible) {
            await this.page.getByRole('button', { name: 'New and Trending' }).click();
            await this.page.waitForTimeout(800);
        }
    }

            async verifyNavigationItemsSecond() {
            await this.openMenuIfClosedSecond();

            await expect(this.page.getByRole('button', { name: 'Tezos' })).toBeVisible();
            await expect(this.page.getByRole('button', { name: 'Crypto ETFs' })).toBeVisible();
            await expect(this.page.getByRole('button', { name: 'Prediction' })).toBeVisible();
            await expect(this.page.getByRole('button', { name: 'VeChain' })).toBeVisible();
            await expect(this.page.getByRole('button', { name: 'Bridge Overview' })).toBeVisible();
            await expect(this.page.getByLabel('New and Trending').getByRole('link', { name: 'Narrative Trends' })).toBeVisible(); 
           await expect(this.page.getByRole('button', { name: 'Canton' })).toBeVisible();

            // bottom
        await expect(this.page.getByText('My Account', { exact: true })).toBeVisible();
        await expect(this.page.getByText('Market Cap')).toBeVisible();
        }
    }


