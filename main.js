//We created variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;

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

    if (tarjetasDestapadas == 1){
        //Show first number id
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id]
        tarjeta1.innerHTML = primerResultado;

        //Disable the first button pushed
        tarjeta1.disabled = true;
    }
}