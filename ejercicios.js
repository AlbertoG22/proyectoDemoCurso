
//----------------------------------DESTRUCTURAR OBJETOS---------------------------
var persona1 = {
    nombre: "Alberto",
    apellido: "García",
    edad: 22
}
var persona2 = {
    nombre: "Juan",
    apellido: "López",
    edad: 28
}

function imprimirNombreYEdad(persona) {
    var { nombre } = persona
    var { edad } = persona
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(persona1)
imprimirNombreYEdad(persona2)


//-----------------------------Arrow function--------------------------------------
const MAYORIA_DE_EDAD = 18
var persona1 = {
    nombre: "Alberto",
    apellido: "García",
    edad: 22
}

const esMayordeEdad = ( {edad} ) => edad >= MAYORIA_DE_EDAD
const esMenordeEdad = ( {edad} ) => !esMayordeEdad({edad})

esMayordeEdad(persona1)
esMenordeEdad(persona1)


//-----------------------------Ejercicio con for --------------------------------------
var beto = {
    nombre: "Alberto",
    apellido: "García",
    edad: 22,
    peso: 60
}
console.log(`Al inicio del año ${beto.nombre} pesa ${beto.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for(var i = 1; i <= DIAS_DEL_ANO; i++){
    var random = Math.random() //genera números random de 0 a 1

    if(random < 0.25){ //el 25% de las veces aumenta
        aumentarDePeso(beto)
    } else if(random < 0.5){ //el 50% de las veces adelgaza
        adelgazar(beto)
    }
}
console.log(`Al final del año ${beto.nombre} pesa ${beto.peso.toFixed(2)}kg`)