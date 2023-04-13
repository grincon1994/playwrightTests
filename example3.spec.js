const { test, expect } = require('@playwright/test');

test.describe("Authentication", () => {

    //test.use is only used within test.describe

        test.use({
            storageState: "automationUser.json"
        })

    test.beforeEach(async ({page})=>{
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    })


    test("Saving Authentication", async ({ page }) => {

        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        await page.locator('input[name="username"]').click();
        await page.locator('input[name="username"]').fill('test1');
        await page.locator('input[name="password"]').click();
        await page.locator('input[name="password"]').fill('test');
        await page.getByRole('button', { name: 'Log In' }).click();

        await page.context().storageState({path:'automationUser.json'});

    })

    test("test 2", async ({ page }) => {

        await page.locator('#leftPanel').getByRole('link', { name: 'Transfer Funds' }).first().click();

        

    })

    test("test 3", async ({ page }) => {

        await page.getByRole('link', { name: 'Bill Pay' }).first().click();
        await page.getByRole('link', { name: 'Log Out' }).click();

    })



})