//const piggyBank = { "quarters": 386, "dimes": 2, "nickles": 0, "pennies": 3 }

// const coinWorth = { "quarters": .25, "dimes": .10, "nickles": .05, "pennies": .01 }

// let dollarAmmount = 0;

// function howMuch() {
//     dollarAmmount += piggyBank["quarters"]*.25;
//     dollarAmmount += piggyBank["dimes"]*.10;
//     dollarAmmount += piggyBank["nickles"]*.05;
//     dollarAmmount += piggyBank["pennies"]*.01;

//     return dollarAmmount;
// }

// console.log(howMuch());

// let ammountOfMoney = 96.74;
// let piggyBank2 = { "quarters": 0, "dimes": 0, "nickles": 0, "pennies": 0};

// function numberOfCoins () {
//     debugger;
//     piggyBank2["quarters"] = Math.floor(ammountOfMoney / .25);
//     ammountOfMoney -= (piggyBank2["quarters"]*.25);
//     piggyBank2["dimes"] = Math.floor(ammountOfMoney / .10);
//     ammountOfMoney -= (piggyBank2["dimes"]*.10);
//     piggyBank2["nickles"] = Math.floor(ammountOfMoney / .05);
//     ammountOfMoney -= (piggyBank2["nickles"]*.05);
//     piggyBank2["pennies"] = Math.floor(ammountOfMoney / .01);
//     ammountOfMoney -= (piggyBank2["pennies"]*.01);

//     return piggyBank2
// }
// // use toPercison() to fix calc errors
// console.log(numberOfCoins())

// Use a for in loop to solve the totalAmmount problem

const piggyBank = [ 
    { "coin": "quarter",
    "quantity": 175,
    "value": .25 },

    { "coin": "dime",
    "quantity": 682,
    "value": .10 },

    { "coin": "nickle",
    "quantity": 1873,
    "value": .05 },

    { "coin": "penny",
    "quantity": 53,
    "value": .01 }
]

totalDollarAmmount = 0;

for (let index = 0; index < piggyBank.length; index++) {
    totalDollarAmmount += piggyBank[index].quantity*piggyBank[index].value; 
}

console.log(totalDollarAmmount.toFixed(2))

// Using a for loop to solve the dollar ammount -> coins problem & using .reduce() to format output

totalValue = 10.41;

const piggyBank2 = [ 
    { "coin": "quarter",
    "quantity": 0,
    "value": .25 },

    { "coin": "dime",
    "quantity": 0,
    "value": .10 },

    { "coin": "nickle",
    "quantity": 0,
    "value": .05 },

    { "coin": "penny",
    "quantity": 0,
    "value": .01 }
]

for (var index = 0; index < piggyBank2.length; index++) {
    
    piggyBank2[index].quantity = Math.floor((totalValue / piggyBank2[index].value))

    totalValue = (totalValue - (piggyBank2[index].quantity)*(piggyBank2[index].value)).toFixed(2)

}

const piggyBank2Display = piggyBank2.reduce(function(obj, item) {
    obj[item.coin] = item.quantity;
    return obj;
}, {})

console.log(piggyBank2Display)

