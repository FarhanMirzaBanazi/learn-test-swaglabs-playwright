const { expect } = require('@playwright/test');

/**
 * Fungsi helper untuk login ke SwagLabs.
 * Dapat digunakan di file test lain tanpa menulis ulang login flow.
 * 
 * @param {import('@playwright/test').Page} page - objek page dari Playwright
 * @param {string} username - username akun SwagLabs
 * @param {string} password - password akun SwagLabs
 */
async function loginSwagLabs(page, username, password) {
    // direct ke halaman login SwagLabs
    await page.goto('https://www.saucedemo.com/v1/');

    // step mengisi username dan password
    await page.fill('[data-test="username"]', username);
    await page.waitForTimeout(2000);
    await page.fill('[data-test="password"]', password);
    await page.waitForTimeout(2000);

    // step klik tombol login
    await page.click('[id="login-button"]');

    // step Verifikasi login berhasil
    await expect(page).toHaveURL(/inventory.html/);
}

module.exports = { loginSwagLabs };
