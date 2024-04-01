/*
        Ejercicio Nº3

    Realizar una tabla de multiplicación de un número "a" desde 0 hasta 12, pero que no se
    muestre la multiplicación de a * 5
*/

function multiplicationTable(a = 0) {

    for (let i = 0; i <= 12; i++) {
    //  ->  Creo un for que inicializará en 0 hasta 12.   

        if (i != 5) {
        //  ->  Cuando el valor de "i" sea distinto a 5.

            console.log(`${a} x ${i} = ${a * i}`)
            //  ->  Imprimirá por consola la tabla de "a" x "i".
        }
        
    }
}

multiplicationTable(5)
