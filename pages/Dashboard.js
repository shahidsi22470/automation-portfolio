import { expect } from "@playwright/test";

export class Dashboard {

    constructor(page) {
        this.page = page;
    }

    // GETTERS
    get dashboardSelection() {
        return this.page.getByText('Dashboard Selection');
    }

    get searchDashboards() {
        return this.page.getByPlaceholder('Search Dashboards');
    }

    get createNewDashboardBtn() {
        return this.page.getByText('Create New Dashboard');
    }

    get createDashboardGroupBtn() {
        return this.page.getByText('Create Dashboard Group');
    }

    get listViewBtn() {
        return this.page.getByRole('button').filter({ hasText: /^$/ }).nth(3);
    }

    get gridViewBtn() {
        return this.page.getByRole('button').filter({ hasText: /^$/ }).nth(4);
    }

    get favoritesDropdown() {
        return this.page.locator('span').filter({ hasText: 'Favorites' });
    }

    get recentsDropdown() {
        return this.page.getByText('Recents');
    }

    get dashboardFilters() {
        return this.page.getByText('Dashboard Filters');
    }

    get mostPopularFilter() {
        return this.page.getByText('Most Popular');
    }

    get allDashboardFilter() {
        return this.page.getByText('All Dashboard');
    }

    get newFilter() {
        return this.page.getByText('New').first();
    }

    get favoritesFilter() {
        return this.page.getByText('Favorites').nth(1);
    }

    get teamFilter() {
        return this.page.getByText('Team', { exact: true });
    }

    get personalFilter() {
        return this.page.getByText('Personal').first();
    }

    get presetFilter() {
        return this.page.getByText('Preset').first();
    }

    get dashboardGroupsFilter() {
        return this.page.getByText('Dashboard Groups');
    }

    get widgetsSearch() {
        return this.page.locator('input[placeholder="Search"]').last();
    }

    // METHODS
    async verifyDashboardFunctionality() {
        await expect(this.dashboardSelection).toBeVisible();
    }

    async verifySearchDashboardsVisible() {
        await expect(this.searchDashboards).toBeVisible();
    }

    async verifyCreateNewDashboardVisible() {
        await expect(this.createNewDashboardBtn).toBeVisible();
    }

    async verifyCreateDashboardGroupVisible() {
        await expect(this.createDashboardGroupBtn).toBeVisible();
    }

    async verifyListViewToggle() {
        await this.listViewBtn.click();
        await expect(this.listViewBtn).toBeVisible();
    }

    async verifyGridViewToggle() {
        await this.gridViewBtn.click();
        await expect(this.gridViewBtn).toBeVisible();
    }

    async verifyFavoritesDropdown() {
        await expect(this.favoritesDropdown).toBeVisible();
    }

    async verifyRecentsDropdown() {
        await expect(this.recentsDropdown).toBeVisible();
    }

    async verifyDashboardFiltersVisible() {
        await expect(this.dashboardFilters).toBeVisible();
    }

    async verifyMostPopularFilter() {
        await expect(this.mostPopularFilter).toBeVisible();
    }

    async verifyAllDashboardFilter() {
        await expect(this.allDashboardFilter).toBeVisible();
    }

    async verifyNewFilter() {
        await expect(this.newFilter).toBeVisible();
    }

    async verifyFavoritesFilter() {
        await expect(this.favoritesFilter).toBeVisible();
    }

    async verifyTeamFilter() {
        await expect(this.teamFilter).toBeVisible();
    }

    async verifyPersonalFilter() {
        await expect(this.personalFilter).toBeVisible();
    }

    async verifyPresetFilter() {
        await expect(this.presetFilter).toBeVisible();
    }

    async verifyDashboardGroupsFilter() {
        await expect(this.dashboardGroupsFilter).toBeVisible();
    }

    async verifyWidgetsSearchVisible() {
        await expect(this.widgetsSearch).toBeVisible();
    }
}
