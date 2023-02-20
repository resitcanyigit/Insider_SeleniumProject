const { homePage } = require("../pages/homePage");

Feature('Insider test case study');

Scenario('LCWaikiki E2E', async ({ I, homePage, productPage }) => {
    homePage.goToHomePage();
    I.seeCurrentUrlEquals(homePage.parameters.baseUrl);
    homePage.acceptCookies();
    homePage.selectCategories();
    I.assertEqual(homePage.parameters.expectedValue, await homePage.getCategoryPageTitle());
    productPage.goToProduct();
    I.seeElement(productPage.buttons.addCartBtn);
    productPage.selectSize();
    productPage.addCart();
    productPage.goToCartPage();
    I.seeElement(productPage.buttons.deleteProduct);
    homePage.returnHomePage();
    I.seeCurrentUrlEquals(homePage.parameters.baseUrl);
});
