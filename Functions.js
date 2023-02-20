let harryPotterHealth = 100
let voldemortHealth = 150

let stringHealth1 = String(harryPotterHealth);
let stringHealth2 = " " + harryPotterHealth;
//These two do the same thing, they change it to a string variable.

// console.log(harryPotterHealth);
// console.log(stringHealth1);
// console.log(stringHealth2)

let theWinnerIs = "Voldemort has won, for today."

let theTrueWinner = theWinnerIs.replace("Voldemort", "Harry");

// console.log(theTrueWinner);

let isHarryInThisString = theTrueWinner.includes("Harry");

console.log(isHarryInThisString);

let lowerStatement = theTrueWinner.toLowerCase();

//Solution 1 for making kebab case:
let kebab1 = lowerStatement.replaceAll(" ", "-");
kebab1 = kebab1.replaceAll(".", "");
kebab1 = kebab1.replaceAll(",", "");
console.log(kebab1);

//Solution 2:
let kebab2 = lowerStatement.split(" ");
kebab2 = kebab2.join("-");
kebab2 = kebab2.replaceAll(".", "");
kebab2 = kebab2.replaceAll(",", "");

console.log(kebab2)

//Writing function in 2 ways:
//1.
function isPersonAlive(harryPotterHealth) {
    if (harryPotterHealth > 0){
        return true
    } else {
        return false
    }
}


//This function simulate a Voldemort attack on Harry. Voldemort's attack number is randomly generated between 30 and 100. It takes one parameter: Harry's current health, and it returns Harry's health after the attack. 

function voldemortAttack(harryPotterHealth){
    return harryPotterHealth - Math.floor(Math.random() * 71 + 30);
}


harryPotterHealth = voldemortAttack(harryPotterHealth);
harryPotterHealth = voldemortAttack(harryPotterHealth);

let aliveNow = isPersonAlive(harryPotterHealth)

console.log(aliveNow);
console.log(harryPotterHealth);