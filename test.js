// // import the function sum from the app.js file
const { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)
    
    // this is the comparison for the unit test
     expect(dollars).toBe(4.20); //1 euro is 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One yen should be 0.006 pound", function(){
    // use the function like its suppoed to be used
    const yen = fromYenToPound(300)
    
    // this is the comparison for the unit test
     expect(yen).toBe(1.88); //1 yen is 0.006 pounds, then 300 yen should be = (300 * 0.006)
})

test("One dollar should be 106.58 pound", function(){
    // use the function like its suppoed to be used
    const dollar = fromDollarToYen(50)
    
    // this is the comparison for the unit test
     expect(dollar).toBe(5329.17); //1 dollar is 106.58 yen, then 50 dollars should be = (50 * 106.58)
})