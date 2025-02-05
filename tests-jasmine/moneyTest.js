import * as moneyModule from "../scripts/utils/money.js";

describe("test suite: formatCurrency", () => {
    it("converts cents into dollars", () => {
        expect(moneyModule.formatCurrency(2095)).toEqual("20.95");
    });

    it("works with 0", () => {
        expect(moneyModule.formatCurrency(0)).toEqual("0.00");
    });

    it("rounds up to the nearest cent", () => {
        expect(moneyModule.formatCurrency(2000.5)).toEqual("20.01");
    });
});