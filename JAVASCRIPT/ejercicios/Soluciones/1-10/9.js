/*
        Ejercicio Nº9

    Realizar una función que nos diga la fecha de apertura de un examen de la universidad, es decir,
    la cantidad de horas restantes que faltan para que abra dicho examen.

    En caso de que el examen haya cerrado, retornar un mensaje que diga: "El examen ya cerró."
*/

function examenUni(materia = "biología") {
    let hoy = new Date()
    let fecha = new Date()
    let horasFaltantes = 0
    /*
        Declaro las variables que utilizaré:

            ->  hoy: almacenáre el día actual.
            ->  fecha: almacenaré la fecha del examen.
            ->  diasFaltantes: almacenaré los días que faltan para el examen.
    */
    
    switch (materia) {
        //  Creo un switch que según la materia que elija me diga los dias faltantes.

        case "biología":
        //  Creo un caso con el nombre de la materia

            fecha.setFullYear(2024, 12, 18)
            //  Cambio el valor de la variable fecha a la fecha del examen, con el metodo .setFullYear

            horasFaltantes = Math.floor((fecha.getTime() - hoy.getTime()) / (1000 * 60 * 60))
            //  Calculo la diferencia entre el valor fecha y hoy, y lo convierto a horas
            
            if (horasFaltantes <= 0) {
            //  Si diasRestantes es CERO o NEGATIVO

                console.log(`El examen de ${materia} ya cerró.`)
                //  Muestro que el examen ya cerró.

            } else {
                console.log(`Faltan ${horasFaltantes} horas para el examen de ${materia}`)
                //  De lo contrario muestro cuantas horas faltan para dicho examen.
            }
            break;

        case "matemática":
            fecha.setFullYear(2024, 4, 28)

            horasFaltantes = Math.floor((fecha.getTime() - hoy.getTime()) / (1000 * 60 * 60))
            
            if (horasFaltantes <= 0) {
                console.log(`El examen de ${materia} ya cerró.`)
            } else {
                console.log(`Faltan ${horasFaltantes} horas para el examen de ${materia}`)
            }

            break;

        case "química":
            fecha.setFullYear(2024, 2, 15)

            horasFaltantes = Math.floor((fecha.getTime() - hoy.getTime()) / (1000 * 60 * 60))
            
            if (horasFaltantes <= 0) {
                console.log(`El examen de ${materia} ya cerró.`)
            } else {
                console.log(`Faltan ${horasFaltantes} horas para el examen de ${materia}`)
            }
            break;
    
        default:
            break;
    }
}

examenUni()
