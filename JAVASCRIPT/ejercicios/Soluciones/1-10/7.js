/*
        Ejercicio Nº7

    Realizar una función que, dado el dato de entrada una oración, nos devuelva un arreglo que contenga
    todas las palabras usadas en la oración.
*/

function palabrasUsadas(oracion = "Buenos días.") {
    
    let palabras = oracion.split(separador = " ")
    /*
        Utilizo el método .split para que me divida la oración y la almacene en un arreglo.

        .split divide las oraciones por medio de un separador, en este caso como el ejercicio pide
        las palabras las dividiré por espacios " ".
    */
    console.log(palabras)
    //  Imprimo en pantalla la Lista con las palabras separadas.
}

palabrasUsadas("Que lindo día hace hoy.")
