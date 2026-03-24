import { test } from "@playwright/test";
import { Dashboard } from "../pages/Dashboard.js";

let dashboard;

test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    });
    await page.goto('/dashboard');
    await page.waitForLoadState('domcontentloaded');
    dashboard = new Dashboard(page);
});

test('Verify dashboard heading is visible', async () => {
    await dashboard.verifyDashboardFunctionality();
});

test('Verify search dashboards is visible', async () => {
    await dashboard.verifySearchDashboardsVisible();
});

test('Verify create new dashboard button is visible', async () => {
    await dashboard.verifyCreateNewDashboardVisible();
});

test('Verify create dashboard group button is visible', async () => {
    await dashboard.verifyCreateDashboardGroupVisible();
});

test('Verify favorites dropdown is visible', async () => {
    await dashboard.verifyFavoritesDropdown();
});

test('Verify recents dropdown is visible', async () => {
    await dashboard.verifyRecentsDropdown();
});

test('Verify dashboard filters section is visible', async () => {
    await dashboard.verifyDashboardFiltersVisible();
});

test('Verify most popular filter', async () => {
    await dashboard.verifyMostPopularFilter();
});

test('Verify all dashboard filter', async () => {
    await dashboard.verifyAllDashboardFilter();
});

test('Verify new filter', async () => {
    await dashboard.verifyNewFilter();
});

test('Verify favorites filter', async () => {
    await dashboard.verifyFavoritesFilter();
});

test('Verify team filter', async () => {
    await dashboard.verifyTeamFilter();
});

test('Verify personal filter', async () => {
    await dashboard.verifyPersonalFilter();
});

test('Verify preset filter', async () => {
    await dashboard.verifyPresetFilter();
});

test('Verify dashboard groups filter', async () => {
    await dashboard.verifyDashboardGroupsFilter();
});

test('Verify widgets search is visible', async () => {
    await dashboard.verifyWidgetsSearchVisible();
});
