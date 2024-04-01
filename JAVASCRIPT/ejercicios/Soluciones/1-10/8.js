/*
        Ejercicio Nº8

    Crea 5 Objetos y almacénalos en una Lista, debes hacer una función para filtrar a todas
    las personas que tengan el nombre Luis y que también filtre cuales de ellas son mayores de edad.
*/

function luisMayores() {
    const personas = [{
    //  Creo una Lista en la cual colocaré objetos, será constante porque no agregaŕe más objetos.

            nombre: "Raúl",
            apellido: "López",
            edad: 7
            //  Los objetos cuentan con nombre, apellido y edad.
        },
        {
            nombre: "Luis",
            apellido: "Araújo",
            edad: 19
        },
        {
            nombre: "Luis",
            apellido: "Álvez",
            edad: 12
        },
        {
            nombre: "Fernando",
            apellido: "Giménez",
            edad: 27
        },{
            nombre: "Luis",
            apellido: "Torres",
            edad: 32
        }]
        console.log(personas)
        //  Imprimo en pantalla el arreglo.

        console.log("Personas que se llaman Luis:")
        personas.filter((element) => {
        //  Utilizo la propiedad .filter para filtrar elementos..

            if (element.nombre == "Luis") {
            //  Los elementos nombre deben ser igual a "Luis".

                console.log(`${element.nombre} ${element.apellido}`)
                //  Imprimo las propiedades nombres y apellido de los elementos que cumplen la condición.
            }
        })

        console.log("De ellas, mayores de edad son:")
        personas.filter((element) => {
            if (element.nombre == "Luis" && element.edad >= 18) {
            //  Filtro por los Luis que sean mayores de 10 años.
            
                console.log(`${element.nombre} ${element.apellido}, ${element.edad} años de edad.`)
                //  Imprimo las propiedades nombre, apellido y edad del elemento que cumple la condición.
            }
        })
    
}

luisMayores()
