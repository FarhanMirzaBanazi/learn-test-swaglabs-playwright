// @ts-check
import { test, expect } from '@playwright/test';
import { loginSwagLabs } from './helper/login.js';

test('test login swaglabs', async ({ page }) => {
    await loginSwagLabs(page, 'standard_user', 'secret_sauce');

    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
    await page.pause();
});
