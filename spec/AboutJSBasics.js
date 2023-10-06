/* eslint-env jasmine browser */
/* globals describe expect it loadedSuites */
/* eslint  no-unused-vars:off */
/*
   this suite of test covers basic JS knowledge
   if you get stuck, ask questions or move on to the next question
   Note: it is OK to use the internet
*/

describe('JavaScript Basics', () => {
  it('should reference elements in an Array ', () => {
    var srcArray = [1, 2, 3, 4];
    var element;
    // Access the array and the correct element to satisfiy the spec
    // put work here
    element = '< put code here >';

    expect(element).toEqual(3);
    expect(srcArray).toEqual([1, 2, 3, 4]);
  });

  it('should remove the first element from the Array', () => {
    var srcArray = [1, 2, 3, 4];
    var element;
    // Modify the array programmically to satisfiy the spec
    // put work here - one statement will satisfy both expects
    element = '< put code here >';
    // DO NOT Modify the expect statements
    expect(element).toEqual(1);
    expect(srcArray).toEqual([2, 3, 4]);
  });

  it('should remove the last element from the Array', () => {
    var srcArray = [1, 2, 3, 4];
    var element;
    // Modify the array programmically to satisfiy the spec
    // put work here
    element = '< put code here >';

    // DO NOT Modify the expect statements
    expect(element).toEqual(4);
    expect(srcArray).toEqual([1, 2, 3]);
  });

  it('should insert element into the Array', () => {
    var srcArray = [1, 2, 4];
    var element;
    // Modify the array programmically to satisfiy the spec
    // put work here
    element = '< put code here >';
    // DO NOT Modify the expect statements
    expect(srcArray).toEqual([1, 2, 3, 4]);
  });

  it('should clone an array (separate copy)', () => {
    var srcArray = [1, 2, 3, 4];
    var destArray;
    // Modify the array programmically to satisfiy the spec
    // put work here
    destArray = '< put code here >';

    // DO NOT modify below
    srcArray[0] = 'a';
    expect(srcArray).toEqual(['a', 2, 3, 4]);
    expect(destArray).toEqual([1, 2, 3, 4]);
  });

  /* OK, no more FILL_ME_IN. Solve the rest using one of more lines of code  */

  it('should check property exists in object', () => {
    var srcObject = {
      booleanProp: false,
      stringProp: ''
    };
    var existsObj = {};
    var propsToCheck = ['booleanProp', 'stringProp', 'missingProp'];
    // Loop through the propsToCheck array to check if the prop exists in srcObject
    // set the boolean result in a property of the same name on existsObj
    // put work here

    // DO NOT Modify the expect statements
    expect(existsObj.booleanProp).toEqual(true);
    expect(existsObj.stringProp).toEqual(true);
    expect(existsObj.missingProp).toEqual(false);
  });

  it('should be able to remove duplicates', () => {
    var models = ['camry', 'camry', 'corolla', 'rav4', 'corolla', 'sienna', 'camry'];
    var uniques = [];
    // put work here

    // DO NOT Modify the expect statements
    expect(uniques.length).toEqual(4);
    expect(uniques.indexOf('camry') > -1).toBeTruthy();
    expect(uniques.indexOf('corolla') > -1).toBeTruthy();
    expect(uniques.indexOf('rav4') > -1).toBeTruthy();
    expect(uniques.indexOf('sienna') > -1).toBeTruthy();
  });

  it('should be able to transform data', () => {
    // data to transform
    var colorsArray = [{
      year: 2021,
      color_group: 'Black',
      color_code: 'WB25',
      oem_name: 'BLACK'
    },
    {
      year: 2021,
      color_group: 'Other',
      color_code: 'LA41',
      oem_name: 'GLAZED CARAMEL'
    },
    {
      year: 2021,
      color_group: 'Brown',
      color_code: 'LA42',
      oem_name: 'Hickory'
    },
    {
      year: 2021,
      color_group: 'Brown',
      color_code: 'LJ42',
      oem_name: 'TERRA'
    }
    ];
    // destination var
    var colorMap = {};
    // loop through the colorArray and update colorMap with a key of color_code and the value of color_group  i.e. colorMap.LJ42 with the value 'Brown'
    // put work here

    // DO NOT Modify the expect statements
    expect(colorMap.WB25).toEqual('Black');
    expect(colorMap.LA41).toEqual('Other');
    expect(colorMap.LA42).toEqual('Brown');
    expect(colorMap.LJ42).toEqual('Brown');
  });

  // The next few tests use markup in Drag_to_browser.html
  it('should be able to find all li tags in the div with id of "woodenspos"', () => {
    var nodeList;

    // Examine the markup of Drag_to_browser.html and create a CSS selectoror to capute the Dom Nodes tp satisfy spec
    // put work here

    // DO NOT Modify the expect statements
    expect(nodeList.length).toEqual(15);
  });

  it('should be able to find all li tags with data-row attribute of "5"', () => {
    var nodeList;

    // Query the DOM to satisfy spec. Use Native JS
    // put work here

    // DO NOT Modify the expect statements
    expect(nodeList.length).toEqual(5);
  });

  it('should be able to filter the li tags in the div with id of "woodenspos" to find those that start with "C"', () => {
    var foundArray;

    // Query the DOM and filter the results to satisfy spec
    // put work here

    // DO NOT Modify the expect statements
    expect(foundArray.length).toEqual(4);
    expect(foundArray.indexOf('COMPETITIVE GREATNESS') > -1).toBeTruthy();
    expect(foundArray.indexOf('CONFIDENCE') > -1).toBeTruthy();
    expect(foundArray.indexOf('CONDITION') > -1).toBeTruthy();
    expect(foundArray.indexOf('COOPERATION') > -1).toBeTruthy();
  });

  it('should be able to create objects and convert object to JSON', () => {
    var srcObj = {};
    var jsonStr = '';
    // modify srcObj to add property/value
    // name / John Cheese
    // age / 20
    // convert srcObj to JSON programattically to satisfy spec
    // put work here

    // DO NOT Modify the expect statements
    expect(jsonStr).toEqual('{"name":"John Cheese","age":20}');
  });

  it('should be able to create objects and convert object to JSON', () => {
    var jsonStringWithError = '{"campaigns":[{"campaign":60968,"timestamp":1453246494,"categories":[{"categoryID":328173,"timestamp":1452892713};{"categoryID":328181,"timestamp":1452892713},{"categoryID":328599,"timestamp":1452892713}]}]}';
    var categories = [];
    // Find and correct the error in jsonStringWithError that stops it
    // from a being a valid JSON string
    // then ...
    var newObj = JSON.parse(jsonStringWithError);
    // ... traverse newObj programatically to collect the categoryID properties
    // and store them in the categories array
    // put work here

    // DO NOT Modify the expect statements
    expect(categories.length).toEqual(3);
    expect(categories.indexOf(328173) > -1).toBeTruthy();
    expect(categories.indexOf(328181) > -1).toBeTruthy();
    expect(categories.indexOf(328599) > -1).toBeTruthy();
  });
});

/*
  Next Step is to enable the next suite of tests.
  Go into drag-to-browser.html
  Uncomment the AboutRegEx.js and save
  reload browser
*/
describe('go to About RegEx', () => {
  it('should have the "AboutRegEx.js" uncommented in "drag-to-browser.html"', () => {
    expect(loadedSuites.regex).toBeTruthy();
  });
});

// house keeping
loadedSuites.jsBasics = true;
