/* eslint-env jasmine browser */
/* globals describe expect it loadedSuites */
/*
AboutJasmine.js
This spec introduces you to the Jasmine Testing Framework. It covers the
common assertions that are used to test JavaScript code. Later tests will
build on the concepts covered here

For more information about Jasmine, see https://jasmine.github.io/tutorials/your_first_suite

This file is a suite of tests called 'About Jasmine'.
Each 'spec' is a test of code and begins with the 'it' function

Modify the code in this file to pass each of the tests. DO NOT modify the 'expect'
statements. This is a warmup, the following suites test different areas of knowledge

These tests measure what you know and what you and figure out, so Google is
your friend. Go find the answer.

IIf you get stuck on a spec, don't panic. Some of the test may require skills you do
not currently have. Take a shot but if you get stuck, skip it
To skip a test, change 'it' to 'xit' for that test.

This first section is shamelessly copied from https://github.com/mrdavidlaing/javascript-koans/tree/master/koans

Good luck
*/

describe('About Jasmine', () => {
  // We shall contemplate truth by testing reality, via spec expectations.
  it('should expect true', () => {
    // Your journey begins here: Replace the word false with true
    const var1 = false;
    const var2 = true;

    expect(var1).toBeTruthy();
    // Notice the .not function: Replace the word true with false
    expect(var2).not.toBeTruthy();
  });

  // To understand reality, we must compare our expectations against reality.
  it('should expect equality', () => {
    var expectedValue = '< put code here >';
    var actualValue = 1 + 1;
    // DO NOT Modify the expect statements
    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  it('should assert equality a better way', () => {
    var expectedValue = '< put code here >';
    var actualValue = 1 + 1;

    // toEqual() compares using common sense equality.
    expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes you need to be precise about what you "type."
  it('should assert equality with ===', () => {
    var expectedValue = '< put code here >';
    var actualValue = (1 + 1).toString();

    // toBe() will always use === to compare.
    // DO NOT Modify the expect statements
    expect(actualValue).toBe(expectedValue);
  });

  // Sometimes we will ask you to fill in the values.
  it('should have filled in values', () => {
    var var1 = '< put code here >';

    // DO NOT Modify the expect statements
    expect(1 + 1).toEqual(var1);
  });
});

/*
  Next Step is to enable the next suite of tests.
  Go into drag-to-browser.html
  Uncomment the AboutJSBasics.js and save
  reload browser
*/
describe('go to JavaScript Basics', () => {
  it('should have the "AboutJSBacis.js" uncommented in "drag-to-browser.html"', () => {
    // DO NOT Modify the expect statements
    expect(loadedSuites.jsBasics).toBeTruthy();
  });
});
