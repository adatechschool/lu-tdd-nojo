// https://codingdojo.org/kata/FizzBuzz/
//boucle qui compte jusqu'à 100, si oui print FizzBuzz
//boucle qui compte jusqu'à 3, si oui print Fizz
//boucle qui compte jusqu'à 5, si oui print Buzz

//on a juste fait le squelette
function fizzbuzz(nombre) {
    if (Number.isInteger(nombre)){
        if (nombre % 15 === 0){
            return "fizzbuzz";
        } else if (nombre % 3 === 0) {
            return "fizz";
        } else if (nombre % 5 === 0) {
            return "buzz";
        } else {
            return nombre.toString();
        }  
    } else {
        return "input error"; 
    }      
}

function main() {
    let i = 1;
    while (i <= 100) {
        console.log(fizzbuzz(i));
        i++;
    }  
}

main();
module.exports  = fizzbuzz; 