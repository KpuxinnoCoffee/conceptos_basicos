/*
        Ejercicio Nº4

    Hacer una función que filtre todos los números que sean múltiplos de 3 de una lista que contenga
    los números del 0 al 100.
*/

function filtrarNumeros() {

    let nums = []   //  ->  Lista para los números del 0 al 100.
    let fnums = []  //  ->  Lista para los números filtrados múltiplos de 3. 

    for (let i = 0; i <= 100; i++) {
        nums.push(i)
    }   //  ->  Con un for lleno la Lista nums con números del 0 al 100.
    
    console.log(`Lista de números: [${nums}]`)
    
    nums.filter((element) => {  //  ->  La propiedad .filter me permite filtrar números.
        if (element % 3 == 0) {     //  ->  Si el número es multiplo de 3.
            fnums.push(element)     //  ->  Lo agrego a la Lista fnums.
        }
    })
    
    console.log(`Lista de multiplos de 3: [${fnums}]`)
    //  ->  Terminada la ejecución de la propiedad  .filter, imprimo en consola.
}

filtrarNumeros()
