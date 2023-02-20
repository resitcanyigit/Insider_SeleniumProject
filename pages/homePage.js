const { I } = inject();
module.exports = {
    parameters: {
        baseUrl: "https://www.lcwaikiki.com/tr-TR/TR",
        cookiesText: "Tüm Çerezlere İzin Ver",
        categoryText: "Sweatshirt",
        title: "h1",
        expectedValue: "Kadın Sweatshirt Modelleri"
    },
    buttons: {
        CookiesBtn: "#cookieseal-banner",
        homePageIcon: ".main-header-logo",
        kadinCategory: ".menu-header-item__title",
        sweatCategory: ".zone-item__anchor",
        categorySelect: ".flex-col.flex-col--zone-items"
    },

    goToHomePage: function () {
        I.amOnPage(this.parameters.baseUrl);
    },
    acceptCookies: function () {
        I.waitForClickable(this.buttons.CookiesBtn);
        I.click(this.parameters.cookiesText, this.buttons.CookiesBtn);
        I.wait(2);
    },
    selectCategories: function () {
        I.moveCursorTo(this.buttons.kadinCategory);
        I.waitForClickable(this.buttons.sweatCategory);
        I.click(this.parameters.categoryText, this.buttons.categorySelect);
    },
    returnHomePage: function () {
        I.click(this.buttons.homePageIcon);
    },
    getCategoryPageTitle: async function () {
        const text = await I.grabTextFrom(this.parameters.title);
        return text;
    }
}
