// @ts-check
import { test, expect } from '@playwright/test';
import { loginSwagLabs } from './helper/login.js';

test('test login swaglabs', async ({ page }) => {
    await loginSwagLabs(page, 'standard_user', 'secret_sauce');

    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'ADD TO CART' }).first().click();
    await page.getByRole('link', { name: '1' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'CHECKOUT' }).click();
    await page.waitForTimeout(2000);
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('test name');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('last test name');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('000111');
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'CONTINUE' }).click();
    await page.getByRole('link', { name: 'FINISH' }).click();
    await expect(page.getByText('THANK YOU FOR YOUR ORDER')).toBeVisible();

    await page.pause();
});
