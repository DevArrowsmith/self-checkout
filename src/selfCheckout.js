const {orange, pineapple, kiwi, apple, banana, catalogue} = require("../data/selfCheckoutData");

const selfCheckout = {

    scanBarcode: function(barcode) {
        return catalogue.find(item => item.barcode === barcode);
    }
    
};

module.exports = { selfCheckout };