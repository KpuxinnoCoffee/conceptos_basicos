/*
        Ejercicio Nº1

    Realizar una función que nos permita llevar a cabo operaciones aritmétricas (suma, resta, multiplicación
    y división).

    La función debe pedir 3 parámateros, los cuales serán los números a operar y el tipo de
    operación aritmétrica elegido.

    En caso de que el parámetro de la operación sea inválido, retornar un mensaje de error personalizado.
*/

function aritmetricOperation(a = 0, b = 0, operation = "+") {   //  ->  Valores preestablecidos.
    switch (operation) {
        case "+":   //  ->  Operacion aritmétrica.
            return console.log(a + b);  //  ->  Retorna por consola el resultado de la operación.
            break;
        case "-":
            return console.log(a - b);
            break;
        case "x":
            return console.log(a * b);
            break;
        case "/":
            return console.log(a / b);
            break;    
        default:
            console.error(`La operación ${operation} es inválida!`) //  ->  Mensaje de error.
            break;
    }
}

aritmetricOperation(12, 5, "+")

/*
        a = 0, b = 0, operation = 0

    ->  Son valores por defecto que tendrán dichos parámetros en caso de que el usuario no los introduzca.
*/
