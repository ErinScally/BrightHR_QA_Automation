import { test, expect, Page } from '@playwright/test';

let page: Page;

test.beforeAll(async ({browser}) =>{
    page = await browser.newPage();
    await page.goto('https://sandbox-app.brighthr.com/lite');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill('erin.batman@yahoo.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Testpassword1');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByTestId('sideBar').getByRole('link', { name: 'Employees' }).click();
});

// test.afterAll(async () => {
//
//     await page.close();
// });

test('Add employee with full details and verify fields', async () => {
    //employee creation
    await page.getByRole('button', { name: 'Add employee' }).click();
    await page.getByLabel('First name').click();
    await page.getByLabel('First name').fill('Employee');
    await page.getByLabel('Last name').fill('One');
    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill('test@test.com');
    await page.getByLabel('Phone number(optional)').click();
    await page.getByLabel('Phone number(optional)').fill('07788667667');
    await page.getByTestId('input-selector').click();
    await page.getByLabel('Wed Oct 30').getByText('30').click();
    await page.getByLabel('Job title(optional)').click();
    await page.getByLabel('Job title(optional)').fill('Job');
    await page.getByRole('button', { name: 'Save new employee' }).click();

    //validate employee was created and all fields are set
    await page.getByRole('link', { name: 'Go to profile' }).click();
    await expect(page.getByLabel('First name')).not.toBeEmpty();
    await expect(page.getByLabel('Last name')).not.toBeEmpty();
    await expect(page.getByLabel('Email address')).not.toBeEmpty();
    await expect(page.getByLabel('Phone number(optional)')).not.toBeEmpty();
    await expect(page.getByLabel('Job title(optional)')).not.toBeEmpty();
});

test('Add additional employee via modal', async () => {
    //creation initial employee
    await page.getByRole('button', { name: 'Add employee' }).click();
    await page.getByLabel('First name').click();
    await page.getByLabel('First name').fill('Another');
    await page.getByLabel('Last name').click();
    await page.getByLabel('Last name').fill('Employee');
    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill('employeetwo@test.com');
    await page.getByRole('button', { name: 'Save new employee' }).click();

    //creation of additional employee via modal
    await page.getByRole('button', { name: 'Add another employee' }).click();
    await page.getByLabel('First name').click();
    await page.getByLabel('First name').fill('Third');
    await page.getByLabel('Last name').click();
    await page.getByLabel('Last name').fill('Employee');
    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill('employeethree@test.com');
    await page.getByRole('button', { name: 'Save new employee' }).click();

    //validate additional employee was created and all fields are set
    await page.getByRole('link', { name: 'Go to profile' }).click();
    await expect(page.getByLabel('First name')).not.toBeEmpty();
    await expect(page.getByLabel('Last name')).not.toBeEmpty();
    await expect(page.getByLabel('Email address')).not.toBeEmpty();
});

test('Validate all created employees are present', async () => {
    //navigate to employee tab
    await page.getByTestId('sideBar').getByRole('link', { name: 'Employees' }).click();

    //validate three profiles exist
    await expect(page.locator('text=EOEmployee One')).toBeTruthy;
    await expect(page.locator('text=AEAnother Employee')).toBeTruthy;
    await expect(page.locator('text=TEThird Employee')).toBeTruthy;
});
