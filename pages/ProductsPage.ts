import { Page, Locator } from "@playwright/test";

export class ProductsPage{

    readonly page:Page;
    readonly btnProducts : Locator;
    readonly lblAllProducts : Locator;
    readonly lstProducts : Locator;


    constructor(page:Page){
        this.page=page;
        this.btnProducts =page.getByRole('link', { name: 'Products' });
        this.lblAllProducts=page.getByRole('heading', { name: 'All Products' });
        this.lstProducts=page.locator("//div[@class='features_items']");
    }


    async clickOnProductsButton(): Promise<void>{
        await this.btnProducts.click();
    }

    getAllProductsLabel(){
        return this.lblAllProducts;

    }

    getProductsList(){
        return this.lstProducts;
    }

}