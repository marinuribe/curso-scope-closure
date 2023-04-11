
/* function moneybox(coins) {
    let saveCoins = 0 
    saveCoins += coins
    console.log(`You have ${saveCoins} coins saved`);
}

moneybox(5)
moneybox(5) */

function moneyBag() {
    let coinsSaved = 0

    function addFunction(coins) {
        coinsSaved += coins
        console.log(`You have ${coinsSaved} coins saved`);
    }
    return addFunction
}

const myMoneyBox = moneyBag()
myMoneyBox(5)
myMoneyBox(5)
myMoneyBox(5)

const annaMoneyBox = moneyBag()
annaMoneyBox(5)
annaMoneyBox(5)
annaMoneyBox(10)

