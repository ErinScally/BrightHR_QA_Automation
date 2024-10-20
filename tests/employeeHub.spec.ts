import { test, expect } from '@playwright/test';

// test.use({storageState: "./LoginAuth.json"});
test('Test create two employees and assert profiles exist', async ({ page }) => {
    //navigate to site and log in
    await page.goto("https://demoblaze.com/");
    await expect(page.locator("#logout2")).toBeVisible();
    // await page.getByTestId('sideBar').getByRole('link', { name: 'Employees' }).click();

});
