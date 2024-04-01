/*
        Ejercicio Nº5

    Crear una función que haga de forma aleatoria un número entre 1 y 1000, y
    que a ese número le saque su mitad, el doble y su raíz cuadrada.
*/

function numeroAleatorio() {
    let num = Math.floor(Math.random() * (1000 - 1) + 1)
    //  Multiplico Math.random por el límite, o sea 1000.
    
    console.log(`El número random es: ${num}`)

    console.log(`Su mitad es: ${num / 2}`)

    console.log(`Su doble es: ${num * 2}`)

    console.log(`Su raíz cuadrada es: ${Math.sqrt(num)}`)
    //  Math.sqrt sirve para obtener la raíz de un número.
}

numeroAleatorio()

/*
        El atributo Math tiene consigo varios complementos, entre ellos se encuentran Math.floor
        y Math.random

        Math.random sirve para generar un número aleatorio entre 0 y 1, o sea que solo genera
        valores decimales.

        Math.floor sirve para redondear valores decimales.
    */
