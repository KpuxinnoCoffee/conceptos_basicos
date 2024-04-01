/*
        Ejercicio Nº10

    En una Lista tenemos varios valores numéricos, crea una función que elimine los valores
    que se encuentran repetidos.
*/

let numeros = [32, 32, 16, 79, 12, 12, 56, 5, 5, 3, 16]
//  Lista con valores repetidos

function ceroRepeticiones() {
    let sinRepetir = new Set()
    //  Creo un Set, que tiene la propiedad de no aceptar valores repetidos.

    for (let i = 0; i <= numeros.length; i++) {
    //  Recorro los numeros de la Lista

        if (numeros[i] != null && numeros[i] != undefined) {
        //  Si el valor no es null o undefined.

            sinRepetir.add(numeros[i])   
            //  Guardo el valor de esa posición en el Set.
        }
    }
    console.log(sinRepetir)
    //  Imprimo el Set
}

ceroRepeticiones()
