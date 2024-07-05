const { LoginPage } = require('../pages/login-page');


import {test, expect } from '@playwright/test';
import {URLS}from '../data/Constantes';
import {CREDENCIALES}from '../data/Constantes';


test('Permite loguearse y realizar la compra ', async ({ page }) => {
  await page.goto(URLS.URL_SAUCEDEMOURL);
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginFOrm(CREDENCIALES.SAUCEDEMOUSER, CREDENCIALES.SAUCEDEMOPASS);
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('nombreuno');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('apellidounoi');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('17181818');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="complete-header"]').click();

});

