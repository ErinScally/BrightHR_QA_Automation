import { test, expect } from '@playwright/test';

test('Test create two employees and assert profiles exist', async ({ page }) => {
    //navigate to site and log in
    await page.goto("https://sandbox-app.brighthr.com/lite");
    await page.getByTestId('sideBar').getByRole('link', { name: 'Employees' }).click();

});
