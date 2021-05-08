const {orange, pineapple, kiwi, apple, banana, catalogue} = require("../data/selfCheckoutData");

const selfCheckout = {

    basket: [],

    scanBarcode: function(barcode) {
        return catalogue.find(item => item.barcode === barcode);
    },

    addToBasket: function(item) {
        this.basket.push(item);
    },

    calculateTotal: function() {
        return this.basket.reduce((total, item) => total += item.price, 0);
    }
    
};

module.exports = { selfCheckout };