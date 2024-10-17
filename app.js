let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const sum = (a,b) => a+b;
//console.log(sum(7,3));

const fromEuroToDolar = eur => {
    let exchange = eur * oneEuroIs["USD"];
    return exchange;
}

const fromDolarToYen = usd => {
    let exchange1 =  oneEuroIs["JPY"] / oneEuroIs["USD"];
    let totalYenes = usd * exchange1;
    return totalYenes;
}

const fromYenToPound = yen => {
    let exchange2 = oneEuroIs["GBP"] / oneEuroIs["JPY"];
    let totalGbp = yen * exchange2;
    return totalGbp;
}




module.exports = {sum,fromEuroToDolar, fromDolarToYen, fromYenToPound};