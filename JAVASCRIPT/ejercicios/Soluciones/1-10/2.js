/*
        Ejercicio Nº2

    Realizar una función que almacene en un arreglo todos los números pares desde a hasta b.
*/

function numerosPares(a = 0, b = 0) {
    let nums = []   //  ->  Declaro una Lista vacía.

    for (let i = a; i < b; i++) {   //  ->  Recorro la lista con los valores a y b.

        if (i % 2 == 0) {  //  ->  IF evaluará si es par.
            nums.push(i)    //  ->  En caso de ser par, lo agregará a la Lista.
        }
    }
    console.log(nums)   //  ->  Imprimirá la Lista.  
}

numerosPares(2, 16)

/*
        i % 2 == 0

    Para evaluar si un número es par, se comprueba si al dividirlo entre 2 el resultado de su
    resto es igual a 0.
*/
