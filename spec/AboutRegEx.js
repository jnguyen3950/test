/* eslint-env jasmine browser */
/* globals describe expect it loadedSuites */

/*
AboutRegEx.js

Like JavaScript, Regular Expressions are used throughout web technologies.
It is important to have a basic understanding using RegEx to match strings
*/

describe('About RegEx', () => {
  it('should match multiple conditions', () => {
    // Set a value for regEx that satisfies the spec
    const regEx = /put regex here/;

    expect('www.toyota.com'.match(regEx)).toBeTruthy();
    expect('touch.toyota.com'.match(regEx)).toBeTruthy();
    // notice the .not.toBeTruthy
    expect('staging.toyota.com'.match(regEx)).not.toBeTruthy();
  });

  it('should use "Ends with" operator', () => {
    // Set a value for regEx that satisfies the spec
    const regEx = /put regex here/;

    expect('www.toyota.com/camry/'.match(regEx)).toBeTruthy();
    expect('touch.toyota.com/camry/'.match(regEx)).toBeTruthy();
    // notice the .not.toBeTruthy
    expect('touch.toyota.com/'.match(regEx)).not.toBeTruthy();
    expect('www.toyota.com/camry/overview/'.match(regEx)).not.toBeTruthy();
  });

  it('should use "Optional" operator', () => {
    // Set a value for regEx that satisfies the spec
    const regEx = /put regex here/;

    expect('www.toyota.com/camry/'.match(regEx)).toBeTruthy();
    expect('www.toyota.com/camry'.match(regEx)).toBeTruthy();
    expect('staging.toyota.com/camry'.match(regEx)).toBeTruthy();
    // notice the .not.toBeTruthy
    expect('www.toyota.com/camry/overview/'.match(regEx)).not.toBeTruthy();
    expect('staging.toyota.com'.match(regEx)).not.toBeTruthy();
  });

  it('should use "Look-Ahead" operator (Advanced)', () => {
    let regEx;
    // Set a value for regEx that satisfies all of the specs
    // should only accept a string that starts with 'ssl' or 'www'
    // and does not have 'staging' or 'qa' is in string
    regEx = /put regex here/;
    expect('ssl.toyota.com'.match(regEx)).toBeTruthy();
    expect('www.lexus.com'.match(regEx)).toBeTruthy();
    expect('ssl.scion.com'.match(regEx)).toBeTruthy();
    // notice the .not.toBeTruthy
    expect('staging.ssl.toyota.com'.match(regEx)).not.toBeTruthy();
    expect('origin.www.lexus.com'.match(regEx)).not.toBeTruthy();
    expect('ssl.qa.scion.com'.match(regEx)).not.toBeTruthy();
  });
});

// house keeping
loadedSuites.regex = true;
