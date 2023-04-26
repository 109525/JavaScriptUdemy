/*
Ejemplos de tipos de datos en js
*/
//Tipo de dato string
var nombre = "Angel"
console.log(nombre)

nombre = 10;
console.log(typeof nombre);

//Tipo da deto numerico
var numero = 1000;
console.log(numero)

//Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Soto",
    telefono : 3225468796
}

console.log(objeto)

//Tipo de dato boolean (True, False)
var bandera = false
console.log(typeof bandera)

//Tipo de dato function
function miFuncion(){}
    console.log(typeof miFuncion);

    //Tipo de dato symbol
    var simbolo = Symbol("mi simbolo");
    console.log(typeof simbolo);

    //Tipo clase es una function
    class Persona {
        constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    }

    console.log(typeof Persona)

    //tipo undefined
    var x;
    console.log(typeof x)

    //null
    var y = null;
    console.log(typeof y);

    var autos = ['bmw', 'audi', 'volvo'];
    console.log(autos);
    console.log(typeof autos)
