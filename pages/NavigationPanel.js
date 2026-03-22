import { expect } from "@playwright/test";

export class NavigationPanel {

    constructor(page) {
        this.page = page;


    }

    async openMenuIfClosed() {
        // always click to toggle
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

        // top bar
        await expect(this.page.getByText('Messenger')).toBeVisible();

        // MY DOCK section
        await expect(this.page.getByText('My Dock', { exact: true })).toBeVisible();

        // MENU section — use exact: true to avoid matching dashboard names in the list
        await expect(this.page.getByRole('link', { name: 'News', exact: true })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Screener', exact: true })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Chart', exact: true })).toBeVisible();
        await expect(this.page.getByText('Companies', { exact: true })).toBeVisible();
        await expect(this.page.getByText('Alerts', { exact: true })).toBeVisible();
        await expect(this.page.getByText('Additional Pages', { exact: true })).toBeVisible();

        // NEW AND TRENDING section




        
    }

    async openMenuIfClosedSecond() {
        // always click to toggle
        await this.page.getByRole('button', { name: 'New and Trending' }).click();
        await this.page.waitForTimeout(800);

        // if News still not visible — sidebar was already open, click again to reopen
        const isVisible = this.page.getByRole('button', { name: 'Crypto ETFs', exact: true }).isVisible();
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


