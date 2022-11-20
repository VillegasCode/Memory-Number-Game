//We created variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let tarjeta3 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;

//Pointing to document HTML to its ID with QUOTATION MARKS
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');

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
        //First button pressed id captured
        primerResultado = numeros[id];
        tarjeta1.innerHTML = primerResultado;

        //Disable the first button pushed
        tarjeta1.disabled = true;
    } else if(tarjetasDestapadas == 2){
        //Show second number
        tarjeta2 = document.getElementById(id);
        //Second button pressed id captured
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = segundoResultado;

        //Disabled second button
        tarjeta2.disabled = true;

        //Increase movements
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if (primerResultado == segundoResultado){
            //Reset counter of upface cards
            tarjetasDestapadas = 0;

            //Increase hits
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if (aciertos == 8) {
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 👏`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 🤟😎`;
            }

    } else {
        //Show for a moment values and come back to hidden
        setTimeout(()=>{
            tarjeta1.innerHTML = ' ';
            tarjeta2.innerHTML = ' ';
            tarjeta1.disabled = false;
            tarjeta2.disabled = false;
            tarjetasDestapadas = 0;
        }, 2000);
    }
    }
}