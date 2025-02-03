import * as moneyModule from "../scripts/utils/money.js";
import * as testUtilsModule from "./testUtils.js";

function testFormatCurrency(priceCents, targetReturnString, testCaseName) {
  let result = "failed";
  let formattedPrice = moneyModule.formatCurrency(priceCents);
  let passed = formattedPrice === targetReturnString;
  if (passed) {
    result = "passed";
  }
  console.log(`Testing if formatCurrency() ${testCaseName} using ${priceCents} ${result}: 
    Formatted-'${formattedPrice}' ${passed ? "=" : "!"}= Expected-'${targetReturnString}'`);
}

testUtilsModule.beginTestSuite("formatCurrency()");
testFormatCurrency(2095, "20.95", "converts cents to dollars");
testFormatCurrency(0, "0.00", "works with 0");
testFormatCurrency(2000.5, "20.01", "rounds up to the nearest cent");