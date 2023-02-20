const { I } = inject();
module.exports = {
   parameters: {
      size: "L",
      cartText: "Sepetim"
   },
   buttons: {
      clickProduct: ".product-card",
      addCartBtn: "#pd_add_to_cart",
      selectSizeBtn: ".mobile-size-and-cart-container",
      showCartBtn: ".header__middle__right",
      deleteProduct: ".cart-square-link"
   },
   goToProduct: function () {
      I.waitForClickable(this.buttons.clickProduct);
      I.click(this.buttons.clickProduct);

   },
   selectSize() {
      I.waitForClickable(this.buttons.selectSizeBtn);
      I.click(this.parameters.size, this.buttons.selectSizeBtn);
   },
   addCart: function () {
      I.waitForClickable(this.buttons.addCartBtn);
      I.click(this.buttons.addCartBtn);
      I.wait(2)
   },
   goToCartPage: function () {
      I.waitForClickable(this.buttons.showCartBtn);
      I.click(this.parameters.cartText, this.buttons.showCartBtn);
   }
}