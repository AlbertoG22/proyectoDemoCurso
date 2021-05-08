function Persona (nombre, apellido, estatura){
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
}

Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.decirAltura = function (){
    if(this.estatura >= 1.8){
        console.log(`Soy alto`)
    }
    else if(this.estatura < 1.8){
        console.log(`Soy chaparro`)
    }
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
Desarrollador.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

var beto = new Persona('Alberto', 'García', 1.60)
var karla = new Persona('Karla', 'Luna', 1.8)


//--------------------------------------------------------------------------------------------------------------------------------
//Con los cambios hechos en ECMA Script 2015, los prororipos ya no se crean con function, sino con class
class Persona {
    constructor(nombre, apellido, estatura){
        this.nombre = nombre
        this.apellido = apellido
        this.estatura = estatura
    }
    saludar(fn){
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(fn) {
            fn(nombre, apellido)
        }
    }
    soyAlto(){
        return this.estatura > 1.8
    }
}

//Herencia con ECMA Sript 2015
class Desarrollador extends Persona {
    constructor(nombre, apellido, estatura) {
        //No podemos utilizar this hasta que no hayamos llamado al contructor de la clase padre, para ello se utiliza super
        super(nombre, apellido, estatura)
        //Y lo demás ya no se pone
        //this.nombre = nombre
        //this.apellido = apellido
        //this.estatura = estatura
    }

    saludar(fn){
        //var nombre = this.nombre
        //var apellido = this.apellido
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
        if(fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev) {
        console.log(`Ah, también eres Desarrollador`)
    }
}

var beto = new Desarrollador('Alberto', 'García', 1.60)
var karla = new Persona('Karla', 'Luna', 1.8)

//Llamar funciones como parámetro
beto.saludar(responderSaludo)
karla.saludar()