const {orange, pineapple, kiwi, apple, banana, catalogue} = require("../data/selfCheckoutData");

const { selfCheckout } = require ("../src/selfCheckout")

describe("selfCheckout", () => {

    afterEach(() => {
        selfCheckout.basket = [];
    });

    test("scans an item's barcode and retrieves that item's details", () => {
        expect(selfCheckout.scanBarcode(765)).toEqual(kiwi);
    });

    test("adds an item to a basket array", () => {
        selfCheckout.addToBasket(kiwi);
        expect(selfCheckout.basket).toEqual([kiwi]);
        selfCheckout.addToBasket(pineapple);
        expect(selfCheckout.basket).toEqual([kiwi, pineapple]);
    });
});