/*
        Ejercicio Nº6

    Realizar una función que, dado el dato de entrada nuestra fecha de cumpleaños, nos diga cuántos
    días faltan para el mismo.
*/

function miCumpleaños(a = "21 jan 2025") {
    let birthday = new Date(a)
    //  ->  Creo un objeto tipo Date, el cual registrará la fecha introducida por el usuario.

    let today = new Date()
    //  ->  Creo un objeto tipo Date, el cual tomará como referencia el día actual.

    let daysLeft = Math.floor((birthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    /*
        Para calcular los días restantes, obtengo la propiedad .getTime tanto de el cumpleaños
        introducido por el usuario, como del día actual, y las resto.

        Luego para convertir esa diferencia en días los divido entre 1000, le multiplico 60 que
        serían los minutos, multiplico nuevamente por 60 que serían las horas, y por 24 que sería
        ya el valor en días.

        Todo eso lo redondeo a enteros con Math.floor y guardo en una variable.
    */

    console.log(`Tu cumpleaños es ${birthday} y faltan ${daysLeft} días.`)

}

miCumpleaños("18 apr 2024")
