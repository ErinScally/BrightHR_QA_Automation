import {chromium, expect} from '@playwright/test';

async function globalSetup() {
    //const { baseURL, storageState} = config.projects[0].use;
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://sandbox-app.brighthr.com/lite");
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill('erin.batman@yahoo.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Testpassword1');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.context().storageState({ path: "./LoginAuth.json" });
    await browser.close();
}

export default globalSetup;
