import { test, expect, Page } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { RegisterPage } from '../pages/RegisterPage';
import registerData from '../data/registerData.json';


test.describe("Products Page script", () => {

    let registerPage: RegisterPage;
    let productsPage: ProductsPage;

    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        productsPage = new ProductsPage(page);
        await registerPage.navigate();
    });

    test("Verify All Products and Product Detail Page", async ({ page }) => {

        await expect(page).toHaveTitle(registerData.user.assertions.pageTitle);
        await expect(registerPage.getHomeButton()).toBeVisible();

        await productsPage.clickOnProductsButton();

        await expect(productsPage.getAllProductsLabel()).toHaveText('All Products');
        await expect(productsPage.getProductsList()).toBeVisible;

    })
});
