//We created variables
let tarjetasDestapadas = 0;

//Create a array with numbers
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

//Generate random numbers with a arrow function
numeros = numeros.sort(()=>{return Math.random() - 0.5});
//Write on console the same array with disort numbers
console.log(numeros);

//We create a MAIN FUNCTION named destapar
function destapar(id) {
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);
}