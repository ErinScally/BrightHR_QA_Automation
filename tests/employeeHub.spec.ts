import { test, expect } from '@playwright/test';

// test('Test create two employees and assert profiles exist', async ({ page }) => {
//     //navigate to site and log in
//     await page.goto("https://sandbox-app.brighthr.com/lite");
//     await page.getByTestId('sideBar').getByRole('link', { name: 'Employees' }).click();
//
//
// });

test('Add one employee', async ({ page }) => {
    await page.goto('https://sandbox-app.brighthr.com/lite');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill('erin.batman@yahoo.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Testpassword1');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByTestId('sideBar').getByRole('link', { name: 'Employees' }).click();
    await page.getByRole('button', { name: 'Add employee' }).click();
    await page.getByLabel('First name').click();
    await page.getByLabel('First name').fill('Employee');
    await page.getByLabel('Last name').click();
    await page.getByLabel('Last name').fill('Testone');
    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill('employeeone@test.com');
    await page.getByLabel('Phone number(optional)').click();
    await page.getByLabel('Phone number(optional)').fill('07799889889');
    await page.getByTestId('input-selector').getByRole('img').click();
    await page.getByLabel('Wed Oct 30').getByText('30').click();
    await page.getByLabel('Job title(optional)').click();
    await page.getByLabel('Job title(optional)').fill('Employee One');
    await page.getByRole('button', { name: 'Save new employee' }).click();
    await page.getByLabel('Close modal').click();
});

test('Add employee plus third from modal', async ({ page }) => {
    await page.goto('https://sandbox-app.brighthr.com/lite');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill('erin.batman@yahoo.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Testpassword1');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Employees' }).click();
    await page.getByRole('button', { name: 'Add employee' }).click();
    await page.getByLabel('First name').click();
    await page.getByLabel('First name').fill('Another');
    await page.getByLabel('Last name').click();
    await page.getByLabel('Last name').fill('Employee');
    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill('employeetwo@test.com');
    await page.getByRole('button', { name: 'Save new employee' }).click();
    await page.getByRole('button', { name: 'Add another employee' }).click();
    await page.getByLabel('First name').click();
    await page.getByLabel('First name').fill('Third');
    await page.getByLabel('Last name').click();
    await page.getByLabel('Last name').fill('Employee');
    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill('employeethree@test.com');
    await page.getByRole('button', { name: 'Save new employee' }).click();
    await page.getByLabel('Close modal').click();
});

test('Assert three employees present', async ({ page }) => {
    await page.goto('https://sandbox-app.brighthr.com/lite');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill('erin.batman@yahoo.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Testpassword1');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByTestId('sideBar').getByRole('link', { name: 'Employees' }).click();
    await expect(page.locator('text=ETTest Employee')).toBeTruthy;
    await expect(page.locator('text=AEAnother Employee')).toBeTruthy;
    await expect(page.locator('text=TEThird Employee')).toBeTruthy;
});
