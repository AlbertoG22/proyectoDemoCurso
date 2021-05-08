

const beto = {
    nombre: 'Alberto',
    apellido: 'Garcia'
}
//-------------------------------------------- BIND ---------------------------------------------------
//esta función está definida dentro de un scope global, por lo tanto el "this" se refiere a window (es quien ejecuta la acción)
/*
function saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`)
}
const saludaABeto = saludar.bind(beto)
//se manda llamar: saludarABeto()       //Hola, mi nombre es Alberto
*/

//ejemplo con función que reciba parámetros
function saludar(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}
const saludaABeto = saludar.bind(beto, 'Quiubo')
//se manda llamar: saludarABeto()       //Quiubo, mi nombre es Alberto


//-------------------------------------------- CALL ------------------------------------------------------
/*
saludar.call(beto)
saludar.call(beto, 'Hola we')
*/


//-------------------------------------------- APPLY -----------------------------------------------------------
saludar.apply(beto)
saludar.apply(beto, ['Qué rollo'])