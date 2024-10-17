const {sum, fromEuroToDolar, fromDolarToYen, fromYenToPound} = require('./app.js');
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

test('8 euros should be 8,56 USD', () => {
    let exchangeCurrency = (fromEuroToDolar(8));
    const expected = 8 * 1.07

    expect(exchangeCurrency).toBe(expected);
})

test('200 USD should be 29,252.33 JPY', () => {
    jest.fn(function () {
        return this.fromDolarToYen(200);
      });
})
test('200 USD should be 29,252,33 JPY', () => {
    let exchangeCurrency1 = (fromDolarToYen(200));
    let expected2 = 200 * 156.5 / 1.07
    
    expect(exchangeCurrency1).toBe(expected2);
})

test('3800 JPY should be 21,124 GBP', () => {
    let exchangeCurrency2 = (fromYenToPound(3800));
    let expected3 = 3800 * 0.87 / 156.5
    
    expect(exchangeCurrency2).toBe(expected3);
})

