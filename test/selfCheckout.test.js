const {orange, pineapple, kiwi, apple, banana, catalogue} = require("../data/selfCheckoutData");

const { selfCheckout } = require ("../src/selfCheckout")

describe("selfCheckout", () => {
    test("scans an item's barcode and retrieves that item's details", () => {
        expect(selfCheckout.scanBarcode(765)).toEqual(kiwi);
    })
})