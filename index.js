let jonSnowHealth = 100;

jonSnowHealth = String(jonSnowHealth);
jonSnowHealth = +jonSnowHealth;

let theWinnerIs = 'Jamie is winner.';

let newWinner = theWinnerIs.replace('Jamie', 'Jon');

// if (theWinnerIs.includes('Jon')) {
//     console.log('Replaced successfully');
// }

let lowerCamelCase;
let UpperCamelCase = 'Pascal case';
let kebabCase = 'this-is-kebab-case';
let snake_case;

newWinner = newWinner.toLocaleLowerCase.split(' ').join('-');

function isJonAlive(){
    if (jonSnowHealth > 0) {
        console.log('Jon is alive!');
    } else {
        console.log('Jon has perished.');
    }
}

isJonAlive();

function surpriseAttack(attackValue) {
    jonSnowHealth -= attackValue;
    isJonAlive();
}

surpriseAttack(20);
surpriseAttack(12);
surpriseAttack(13);

console.log(jonSnowHealth);

function greeting(person1, person2) {
    console.log(`${person1} says hello to ${person2}`);
}

// greeting('Joe', 'John');

function rollDice() {
    let possibleRolls = [1,2,3,4,5,6];
    let randomNumber = Math.floor(Math.random() * possibleRolls.length);
    return possibleRolls[randomNumber];
}

function diceMultiplier(){
    let firstRoll = rollDice();
    let secondRoll = rollDice();
    return firstRoll * secondRoll;
}

let multipliecNumber = diceMultiplier();

console.log(multipliecNumber);