<?php

        # <Antecedentes...

    /*
        PHP es un lenguaje de programación dinámico el cual se utiliza principalmente para
        aplicaciones web y backend. Es uno de los lenguajes más utilizados a nivel mundial
        y su historia arranca en 1995, tras varios años y constantes actualizaciones se ha
        sabido mantener en la mira de las empresas por su eficiencia.

            ¿Qué significa que sea "dinámico"?
        El ser "dinámico" da lugar a que si yo por ejemplo quiero cambiar el valor de una
        variable que ya he utilizado, asignandole así un nuevo valor, puedo seguir usando
        el código sin que se rompa por completo, como sucedería en lenguajes estáticos como
        por ejemplo: Java.
    */

    #------------------------------------------------------------------------------------------------

        #Variables...

    $variable = ""; # Declaración de una variable.

    echo $variable; # Imprimir en pantalla.

    echo "<br>"; # br sirve para saltar línea, así como en html.

    #------------------------------------------------------------------------------------------------

        # Tipos de datos...

    $string = "Soy una cadena de texto.";

    $int = 10;

    $double = 5.7;

    $boolean = true;

    /*
        Arriba se encuentran los tipos de datos más utilizados y comunes; string, int, double
        y boolean.

        Al ser dinámico PHP permite que por ejemplo, la cadena de texto vaya dentro de comillas
        pero los números no necesiten de ellas.
    */

    echo gettype($variable);    # Sirve para saber el tipo de dato que tiene una variable.

    echo "<br>";

    #------------------------------------------------------------------------------------------------

        # Interpolación...

    echo "El número entero es $int y el double $double";

    echo "<br>";
    
    /*
        La interpolación sirve para llamar a variables dentro de una cadena de texto, sin recurrir
        a cerrar la cadena, llamar a la variable y volver a abrir la candena para finalizarla.
    */

    #------------------------------------------------------------------------------------------------

        # Concatenación...

    echo $int . $double . "<br>";

    /*
        El concatenar sirve para juntar variables con finalidad de imprimir datos en pantalla.
        Al igual que en Java se usa el + , en PHP se usa el .
    */

    # Otro ejemplo de concatenación...

    echo "El entero es " . $int . " y el double " . $double . "<br>";

    #------------------------------------------------------------------------------------------------

        # Constantes...

    const CONSTANTE = 10; # Declaración de una constante.

    /*
        Las constantes sirven para fijar un dato en particular, en este caso esa constante valdrá
        siempre 10.

        TIP: Las constantes se declaran en mayúsculas y los espacios en _
    */

    echo CONSTANTE;

    /*
        A diferencia de las variables, las constantes no necesitan ser llamadas con el símbolo de $,
        solamente su nombre bastará.
    */

    echo "<br>";

        # Constantes por defecto que incluye PHP

        /*
            __CLASS__ # Si se usa dentro de una clase devuelve su nombre.

            __DIR__ # Identifica el directorio del archivo.

            __FILE__ # Nombre del archivo y el path.

            __FUNCTION__ # Si se usa dentro de una función devuelve su nombre.

            __LINE__ # Número de línea.
        */

    #------------------------------------------------------------------------------------------------

        # Listas...

    $array = array(10, 10, 15.2, "Hola", true); # Declaración de una lista.

    /*
        Los arrays sirven para almacenar distintos tipos de datos para su posterior utilización.

        Es algo así como una caja en la cual se pueden guardar cosas.
    */

    print_r($array);

    echo "<br>";

    /*
        Con print_r podremos imprimir la lista completa en pantalla, situandose entre []
        la posición de la lista que ocupa el dato que le sigue.
        
        Ejemplo: Array ( [0] => 10)
    */

    #------------------------------------------------------------------------------------------------

        # Set...

    /*
        Un SET en PHP se traduce a la proiedad array_unique. La propiedad interpreta los valores que
        tiene el array, y si encuentra valores repetidos, omite las repeticiones y muestra un único
        valor.
    */

    print_r(array_unique($array));

    echo "<br>";    


    #------------------------------------------------------------------------------------------------

        # Diccionario...

    $dict =  array("string" => "Hola", "Integer" => 10, "Boolean" => true);

    /*
        El diccionario es una lista, la cual tiene una clave vinculada a un valor.

        Dentro de este diccionario se encuentra la clave "string" la cual tiene el valor de "Hola".

        Cabe aclarar que una clave puede tener varios valores, creandose así una lista dentro de
        un diccionario, que en sí es una lista.
    */

    print_r($dict);

    echo "<br>";

    echo $dict["Integer"]; # Puedo mostrar todo el contenido de una clave específica del diccionario.

    echo "<br>";

    #------------------------------------------------------------------------------------------------

        # Flujos de datos
        
            # IF, ELSEIF, ELSE...

    /*
        El flujo de datos IF comprobará si se cumple una condición, en caso de cumplirse dicha condición
        se ejecutará el bloque que ocupa.
    
            if (condición) {
                # código...
            }
    */

    if (5 > 3) {
        echo "5 es mayor que 3";
    }

    echo "<br>";

    # IF también se puede escribir en una sola línea.

    /*
        $variable = (condition) ? a : b ;

        · Se guardará el resultado de la comprobación en una vaiable.

        a: es si la condición SE CUMPLE
        b: es si la condición NO SE CUMPLE

        echo $variable;
        
        · Imprime la variable if.
    */

    $if = (5 > 3) ? "5 es mayor que 3" : "5 es menor que 3";
    echo $if;

    echo "<br>";


    /*
        Else es un flujo que complementa a IF, si la condición de IF no se cumple, se ejecutará ELSE.
    */
    
    if (5 < 3) {
        echo "5 es menor que 3";
    } else {
        echo "La condición es incorrecta.";
    }

    echo "<br>";

    
    /*
        Elseif es un complemento a los anteriores flujos de datos, esta comprobará otra condición
        además de la ya comprobada por IF. Si es así devolverá un mensaje/acción.
    */

    if (5 < 3) {
        echo "5 es menor que 3";
    } elseif (3 > 2) {
        echo "La segunda condición es correcta.";
    } else {
        echo "La condición es incorrecta.";
    }

    echo "<br>";

    /*
            # Operadores utilizados en PHP:

        (==) # Comprobará si $a es IGUAL a $b

        (===) # Comprobará si $a es IDÉNTICO a $b

        (!=) # Comprobará si $a es NO IGUAL a $b

        (!==) # Comprobará si $a es NO IDÉNTICO a $b

        (<) # Comprobará si $a es MENOR a $b

        (>) # Comprobará si $a es MAYOR a $b

        (<=) # Comprobará si $a es MENOR O IGUAL a $b

        (>=) # Comprobará si $a es MAYOR O IGUAL a $b

    */

        # Operadores lógicos utilizados en PHP:

            # El operador and (&&) evaluará si ambas condiciones se cumplen.

        if (5 > 3 && 1 < 3) {  
            echo "Ambas condiciones se cumplen.";
        }

    echo "<br>";

            # El operador or (||) ecaluará si una de las opciones se cumplen.

        if (20 > 10 || 10 > 5) {
            echo "Una de las opciones se cumplen.";
        }
    
    echo "<br>";

            # El operador not (!) evaluará si la opción no se cumple.

        if (! 10 < 5) {
            echo "La opción no se cumple.";
        }

    echo "<br>";

    #------------------------------------------------------------------------------------------------
    
            # While y Do-While...

    /*
        Tanto While como Do-While son bucles, o conocidos también como iteradores. Estos repetirán
        una determinada acción mientras la condición sea verdadera, una vez la condición pase a falsa
        el bucle finalizará.

        while (condición) {
            # code...
            $i++;   # Contador.
        }

        Es importante colcar un contador, esto hará que la condición poco a poco se transforme en falsa.
        Ayudará a no crear bucles infinitos preveniendo el colapso del código.
    */

        $a = 0;

        while ($a < 5) {
            echo "Soy un bucle while." . "<br>";
            $a++;
        }

    /*
        La diferencia entre While y Do-While es que mientras while verifica la condición para luego
        ejecutar la acción encomendada, Do-While primero se ejecuta una vez y luego verifica la
        condición, si es verdadera seguirá ejecutandose hasta que la condición sea falsa.

        Do-While siempre se ejecutará una vez aunque la condición sea falsa.
    */

        $a = 0;

        do {
            echo "Soy un bucle Do-While" . "<br>";
            $a++;
        } while ($a > 3); # La condición es falsa y aún así se ejecuta una vez.

    #------------------------------------------------------------------------------------------------

            # For y Foreach...

    /*
        For es un ciclo que permite ejecutar un bloque de código un determinado número de veces.

        A diferencia del While, el for se utiliza cuando debemos iterar un número concreto de
        veces y no hasta que una condición sea falsa.

        for ($i=0; $i < ; $i++) { 
            # code...
        }

        Se declara una variable, luego elegimos cuantas veces la iteraremos, y agregamos el contador.
    */

    for ($i=0; $i < 8 ; $i++) { 
        echo "Soy un ciclo For" . "<br>";
    }

    /*
        Por otro lado el Foreach itera sobre los elementos de un array y ejecutar una función sobre
        cada uno de ellos.

        A diferencia de For, Foreach no tiene un contador, por lo cual no se interrumprá el bucle
        hasta finalizar la iteración sobre cada uno de los elementos del array.
    */

    $array = array(10, 12, 1.5, "Hola", "Mundo", true);

    foreach ($array as $clave => $valor) {
        echo $valor . " ; ";
    }

    echo "<br>";

    #------------------------------------------------------------------------------------------------

        # Switch-Case...

    /*
        Es una estructura que sirve más que nada a la hora de que el usuario interactúe con el
        programa, él pueda elegir una opción determinada. Normalmente se aplica en un menú, entre
        otros.

            switch ($variable) {
                case 'value':
                    # code...
                    break;
            
                default:    # Default es el caso que se activará si se elije un caso diferente.
                    # code...
                    break;
            }
    */

    $color = "azul";

    switch ($color) {

        case "rojo":
            echo "El color es rojo.";
            break;

        case "azul":
            echo "El color es azul.";
            break;

        case "amarillo":
            echo "El color es amarillo.";
            break;

        default:
            echo "El color es otro.";
            break;
    }

    echo "<br>";

    /*
        La varaible color podría utilizarse de tal manera que el usuario elija el color, y 
        dependiendo lo elejido se ejecutará el caso que corresponda.
    */

    #------------------------------------------------------------------------------------------------

        # Funciones...

    /*
        Las funciones son funcionalidades que podemos crear para facilitar y ordenar el código,
        también son utiles para definir el codigo una vez y luego poder acceder a él mediante
        el llamado de dicha función.

        Una función solo se ejecutará si es llamada.

            function nombre(){
                #code...
            }

        Dentro de los paréntesis podemos indicar si para acceder a la función es necesario
        parámetros específicos. Si se deja en blanco el usuario no necesitará de parámetros
        para acceder a ella.

        TIP: Las funciones se declaran en minúsculas y los espacios son _
    */

    function my_function(){
        echo "Hola, soy una función =)";
    }

    my_function();  # Manera de llamar a la función para que se ejecute.

    echo "<br>";

    /*
        Dentro de las funciones se pueden incluir extensas líneas de código o funcionalidades
        específicas para nuestra aplicación.
    */

    #------------------------------------------------------------------------------------------------

        # Clases...

    /*
        Las clases son objetos en los cuales podremos incluir variables y métodos con la finalidad
        de crear algo, por ejemplo un usuario.
    */

    class miUsuario{

        public $nombre;     # Si es public el usuario puede acceder a el dato.
        public $edad;
        private $contraseña;    # Si es private el usuario no podrá acceder al dato.

        function __construct($nombre, $edad, $contraseña){
            $this->nombre = $nombre;
            $this->edad = $edad;
            $this->contraseña = $contraseña;
        }

        /*
            Con la función "__construct" creo el método contructor, dictando el orden de los parámetros
            que deben de ser introducidos por el usuario, en este caso primero va el nombre y seguido la
            edad, y por último la contraseña.
        */
    }

    $miUsuario = new miUsuario("Rodrigo", "Rodríguez", "pass123");

    print_r($miUsuario);

    echo "<br>";

    echo $miUsuario->nombre . "<br>"; # Accedo a un único parametro de la clase.

    $miUsuario->nombre = "Sebastián"; # Puedo cambiar el valor del parámetro.

    echo $miUsuario->nombre . "<br>";
    
    #------------------------------------------------------------------------------------------------

    /*
        Estos fueron los conceptos básicos a la hora de programar en PHP.

        Para más información visitar: https://www.w3schools.com/php/default.asp
        La cual es una página destinada al aprendizaje y encontrarás tutoriales desde un nivel básico
        hasta un nivel avanzado.
    */

?>
