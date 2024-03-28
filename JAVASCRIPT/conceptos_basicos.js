/*
        Antecedentes...

    JavaScript es un lenguaje de programación interpretado dinámico orientado a objetos para la web. 
    Es uno de los lenguajes de programación más utilizados a nivel mundial. A pesar de su nombre no
    tiene relación alguna con Java, son programas orientados a cometer un propósito diferente.

    Frameworks utilizados junto a Javascript:

        -> React
        -> Angular
        -> Vue
*/

//---------------------------------------------------------------------------------------------------------

/*
        Variables...

    Las variables en JavaScript utilizan la nomenclatura camelcase, esto significa que comienzan en
    minúsculas y cada vez que se agrega otra palabra esta comienza en mayúsculas.

        let myString1 = "Hola Mundo."            -> Variable.

        var myString2 = "Hola TODO el Mundo."    -> Variable Global.
*/

let myString = "Soy una cadena de texto"    // Declaro una variable

console.log(myString)   // Imprime en pantalla.

//---------------------------------------------------------------------------------------------------------

/*
        Tipos de datos...

    string  ->  let myString = "Soy un string" 

    number  ->  let myNumber = 5

    boolean ->  let myBool = true

    null    ->  Puedo asignar valores vacios a variables.

    undefined   -> Su tipo de dato no se ha definido inicialmente.
*/

console.log(typeof myString)    // Muestra el tipo de dato de una variable.

let myNumber = 5
console.log(myNumber)
console.log(typeof myNumber)

/*
    A diferencia de otros lenguajes JavaScript no diferencia entre los distintos grupos de
    números, como pueden ser; int, double o float.
*/

let myBool = true
console.log(myBool)
console.log(typeof myBool)

let myNull = null
console.log(myNull)

let myUndefined = undefined
console.log(myUndefined)

//---------------------------------------------------------------------------------------------------------

/*
        Constantes...

    ->  const CONSTANTE = "Soy una constante"

    Para diferenciarlas de las variables mejor declararlas en mayúsculas.
*/

const CONSTANTE = "Soy una constante"
console.log(CONSTANTE)

//---------------------------------------------------------------------------------------------------------

/*
        Flujo de datos...

    -> IF, ELSE IF, ELSE

    #   Planteamiento:

            if (condition) {
                #code...
            } else if (condition) {
                #code...
            } else {
                #code...
            }

    #   IF comprobará si se cumple determinada condición se ejecutará su bloque de código. Si no
        se cumple, se ejecutará el codigo que se encuentra en ELSE.

    #   Se pueden hacer comprobaciones intermedias con ELSE IF, para comprobar otra condición
        relacionada a la primera

*/

/*
        Operadores...

    Dentro de los flujos de datos vamos a encontrar que a la hora de declarar una condición necesitaremos
    de operadores para formular dicha condición.

            Una lista de los operadores comúnmente utilizados...

    ->  ==  -> Indica que es IGUAL A...

    ->  !=  -> Indica que es DISTINTO A...

    ->  >   -> Indica que es MAYOR QUE...
    
    ->  <   -> Indica que es MENOR QUE...

    ->  >=  -> Indica que es MAYOR O IGUAL QUE...

    ->  <=  -> Indica que es MENOR O IGUAL QUE...
*/

if (myNumber == 5) {
    console.log("El valor es 5")
} else if (myNumber == 10){
    console.log("El valor es 10")
} else {
    console.log("El valor es diferente")
}

/* 
        Curiosidad Interesante...

    Si yo tengo una variable que tiene un tipo de dato, idependientemente cual sea, debe ser distinto a
    NULL y UNDEFINED, unicamente con colocar la variable en la condición y sin usar operadores o
    operadores lógicos me va a tirar que la condición es verdadera.
*/

if (myNumber){
    console.log("myNumber = verdadero.")
} else {
    console.log("myNumber = falso.")
}

/*
    Esto funciona diferente si la variable tiene contenido NULL o UNDEFINED, como podremos comprobar.
*/

if (myNull){
    console.log("myNull = verdadero")
} else {
    console.log("myNull = falso.")
}

/*
    Esto se debe a que los flujos de datos por si solos comprueban que una variable tenga contenido, o sea
    si está o no vacía, luego harán la operación que querramos.

    Es algo a tener en cuenta...
*/

//---------------------------------------------------------------------------------------------------------

/*
        Operadores Lógicos...

    ->  &&  -> El "and" sirve para que se cumplan dos o más condiciones a la hora de ejecutar un bloque.

    ->  ||  -> El "or" sirve para que se cumpla solo una de dos condiciones para ejecutar un bloque.
*/

let myString1 = "Hola"
let myNumber1 = 10

if (myString1 == "Hola" && myNumber1 == 5) {
    //  Para que sea verdadera myString1 debe valer "Hola", y myNumber1 debe valer 5.
    console.log("La primera condición es correcta.")

} else if (myString1 == "Adiós" || myNumber1 == 10){
    //  Para que sea verdadera myString1 debe valer "Adiós", ó myNumber1 debe valer 10.
    console.log("La segunda condición es correcta.")

} else {
    //  Para que imprima en pantalla las anteriores condiciones deben ser falsas.
    console.log("Ninguna de las anteriores es correcta.")
}

//---------------------------------------------------------------------------------------------------------

/*
        Funciones...

    Es una estructura que sirve para acortar código, en ella introduciremos código que nos sirva para luego
    no tener que volver a escribirlo, podremos llamarla y se ejecutará el código que almacenamos en ella.

    ->  Planteamiento:

            function name(params) {
                #code...
            }

    #   Una función contará con un nombre, puede tener o no unos parámetros para su ejecución, y luego estará
        el bloque que contendrá el código.

    ->  Llamado:

            name(params)

    #   Para su llamado se colocará únicamente el nombre de la función que previamente creamos y sus
        parámetros, si cuenta con estos últimos.

    TIP: Los nombres de las funciones se dan en snakecase, o sea primera letra de la primera palabra en
    minúscula y primera letra de las demas palabras en mayúsculas, todo junto.
*/

function funcionSuma() {    //  Declaro la función, en este caso sin parámetros
    console.log("Hola, soy una función y se la suma de 2+2")
    let suma = 2+2
    console.log("El resultado es: " + suma)
}

funcionSuma()  //  Llamo a la función creada para que se ejecute.

/*
    Una peculiaridad que tiene JavaScript es que podemos llamar a una función que hemos creado más
    adelante, o sea, posterior a su llamado.
*/

funcionResta()  //  Llamo a la función creada para que se ejecute.

function funcionResta() {    //  Declaro la función, en este caso sin parámetros
    console.log("Hola, soy una función y se la resta de 4-1")
    let resta = 4-1
    console.log("El resultado es: " + resta)
}

/*
    Aquí, a diferencia del primer ejemplo de función, he primero llamado a la función y posteriormente
    la he creado. Y aún así la función se ha ejecutado, esto nos sirve por ejemplo lara posicionar
    todas las funciones al final del codigo y así conservar un orden.
*/

//---------------------------------------------------------------------------------------------------------

/*
        Estructuras...

            Listas...

        Las listas sirven para almacenar variables, es como una caja donde guardar cosas.

    ->  Planteamiento

        let nombreLista = [dato1, dato2]

    Declaro la lista con let, le doy un nombre, y dentro de corchetes almaceno los datos, pueden ser de
    cualquier tipo de datos.
*/

let myArray = ["Rodrigo", 22]
console.log(myArray)    //  Imprimo todos los valores de la lista.

console.log(myArray[0]) //  Imprima un valor relacionado a la posición que elija.

/* 
    En las Listas o Arrays, el primer valor siempre será el cero. En este caso el valor cero es
    Rodrigo y el uno es 21.
*/

myArray.push("Rodríguez")
console.log(myArray)

/*
    La estructura Array tiene varias propiedades, entre ellas "push" que sirve para añadir elementos
    a la lista
*/

//---------------------------------------------------------------------------------------------------------

/*
        Set...

    Los Set son similares a las listas con la diferencia que si se encuentran valores repetidos estos
    no se tendrán en cuenta, contando ese valor repetido como un único valor.

    -> Planteamiento:
    
        let nombreSet = new Set([dato1, dato2, dato3])

    Con el Set se utiliza en "new", lo que quiere decir que estoy creando un nuevo objeto de...
    en esta caso Set(), porque ese objeto será un set.
*/

let mySet = new Set(["Rodrigo", "Rodrigo", "Rodrigo", 22, 22, 22, 22])

console.log(mySet)

/*
    A diferencia de las Listas, cuando imprimo un Set entre paréntesis nos dirá cuantos elementos
    están en el Set, en este caso pone Set(2), porque solamente hay dos elementos, el resto están
    repetidos.
*/

mySet.add("Sebastián")
console.log(mySet)

/*
    Al igual que los Array, los Set también usan propidades para modificarse, entre ellas esta "add" la
    cual sirve para añadir más datos a un Set ya creado.
*/

//---------------------------------------------------------------------------------------------------------

/*
        Mapas... (también conocidos como Diccionarios)

    Un Mapa es una estructura clave-valor, siempre tenemos que crear una clave, y a esa clave le asignaremos
    un valor.

    ->  Planteamiento:

            let nombreMapa = new Map([[clave1, valor1], [clave2, valor2], [clave3, valor3]])

    #   Se asigna un corchete [] que engloba el resto de valores. 
*/

let myMap = new Map([["Rodrigo", 22], ["Florencia", 37], ["Tomás", 58]])
console.log(myMap)

/*
    En un Mapa las claves son únicas y no se pueden repetir, en cambio los valores no son únicos y sí
    se pueden repetir.
*/

myMap.set("Luana", 5)   //  Puedo añadir elementos al Mapa respetando la estructura clave-valor.

console.log(myMap)

console.log(myMap.get("Florencia"))  //  Puedo obtener el valor de una clave del Mapa.

//---------------------------------------------------------------------------------------------------------

/*
        Bucles...

    En el momento que tenemos estructuras que tienen más de un valor, es el momento de iterar dichas
    estructuras, una forma de acceder a esos valores.
*/

/*
        FOR...

    Buscamos que valor vamos a guardarnos de un listado de valores formados por una estructura.

    ->  Planteamiento:

        for (const valor of miLista) {
            console.log(valor)
        }

    #   For es bastante utilizado para acceder a valores almacenados en una Lista.
*/

for (const value of myArray) {
    console.log(value)
}

/*
    La estructura mostará en pantalla todos los valores que se encuentran en una Lista.
    Primero recorrerá la Lista encontrando los valores y los irá imprimiendo en pantalla.
*/

//---------------------------------------------------------------------------------------------------------

/*
        WHILE...

    While es otra forma de iterar elementos basada en una condición, mientras la condición sea verdadera
    los elementos se iterarán, hasta que la condición se vuelva falsa.

    ->  Planteamiento:

        while (condition) {
            #code...
        }
*/

let myCounter = 0

while (myCounter < myArray.length) {
    console.log(myArray[myCounter])
    myCounter++
}

/*
    Entre las propiedades de las Listas se encuentra "lenght" el cual es el largo de la lista, o sea,
    la cantidad de elementos que contiene una lista.

    En ese caso myCounter comienza valiendo 0, luego le digo al bucle while que mientras myCounter sea
    menor o al número de elementos de la lista, me imprima el elemento que se situa en la posición
    indicada por myCounter.

    En ese caso como vale 0 se mostrará el primer elemento de la Lista.

    Luego el valor de myCounter se incrementará en 1, eso es o que significa myCounter++

    Y por último se volverá a repetir hasta que la condición del while sea falsa, terminando así el bucle.
*/

//---------------------------------------------------------------------------------------------------------

/*
        Clases...

    TIP: Para definir el nombre de una clase se utilizar UpperCamelCase, o sea, primera letra de cada palabra
    en mayúsculas.

    Una clase sirve para definir un tipo de objeto en concreto, todas las clases llevarán consigo un
    constructor, el cual será una función que construirá la clase de la forma que nosotros queramos.
*/

class MyClass {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

let myClass = new MyClass("Rodrigo", 22) 

/*
    Para ejecutar una clase necesito crear un objeto del tipo de mi clase, y asignarle los parámetros
    que pide mi clase, en este caso nombre y edad.
*/

console.log(myClass)

console.log(myClass.age)    //  Puedo acceder a un valor en concreto del objeto.

//---------------------------------------------------------------------------------------------------------

/*
        Enum...

    Los Enum son estructuras complejas al igual que las clases y son similares a los Mapas, o sea,
    se formulan en la relación clave-valor.
*/

const MyEnum = {
    PYTHON: "python",
    JAVA: "java",
    PHP: "php",
    JAVASCRIPT: "javascript"
}

const myEnum = MyEnum.JAVASCRIPT
console.log(myEnum)

/*
    Dentro de un Enum puedo tener varias claves relacionadas a valores, pero puedo elegir con cual de
    esas claves quiero trabajar, creando una constante que almacene esa clave.

    Y cuando imprima la constante se imprimirá la clave almacenada.

    Es una forma de ordenar Constantes relacionadas de algún tipo, en este caso Lenguajes de Programación.
*/

//---------------------------------------------------------------------------------------------------------

/*
    Estos fueron los conceptos básicos de JavaScript.

    Para más información visitar: https://developer.mozilla.org/es/docs/Web/JavaScript

    La cual es una página que tiene los manuales de JavaScript completamente en español, desde nivel
    básico hasta un nivel avanzado, acompañados de tutoriales para un mejor aprendizaje.
*/





    



