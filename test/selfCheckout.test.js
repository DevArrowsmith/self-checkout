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

    test("returns the total price of all items in the basket", () => {
        selfCheckout.addToBasket(orange);
        selfCheckout.addToBasket(apple);
        selfCheckout.addToBasket(banana);
        expect(selfCheckout.calculateTotal()).toBe(18);
    })

    test("removes one instance of an item from the basket", () => {
        selfCheckout.addToBasket(kiwi);
        selfCheckout.addToBasket(pineapple);
        selfCheckout.addToBasket(pineapple);
        expect(selfCheckout.basket).toEqual([kiwi, pineapple, pineapple]);
        selfCheckout.removeFromBasket(pineapple);
        expect(selfCheckout.basket).toEqual([kiwi, pineapple]);
    })
});