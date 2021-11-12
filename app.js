// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

let oneEurois = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP":0.8
}

const fromDollarToYen = (dollar) => {
    let yen = ((oneEurois.JPY * dollar) / oneEurois.USD).toFixed(2)
    return yen
}

const fromEuroToDollar = (euro) => {
    let dollar = ((euro * oneEurois.USD)).toFixed(2)
    return dollar
}

const fromYenToPound = (yen) => {
    let pound = ((oneEurois.GBP * yen) / oneEurois.JPY).toFixed(2)
    return pound
}

module.exports = {sum, fromYenToPound, fromEuroToDollar, fromDollarToYen };