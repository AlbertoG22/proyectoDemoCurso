

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }


function getPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    //Mismo código de abajo
    /*
    $.get(url, opts, callback).fail(function (){
        console.log(`Sucedió un error. No se pudo obtener el personaje con el id ${id}`)
    })*/

    $
        .get(url, opts, callback)
        .fail(() => {
            console.log(`Sucedió un error. No se pudo obtener el personaje con el id ${id}`)
        })
}

//Explicación
//Se obtiene el personaje 1, luego se llama al calback para manejar la respuesta (imprimirlo)
//Después se llama al peronaje 2, se hace lo mismo y asi sucesivamente
getPersonaje(1, function (personaje){ 
    console.log(`Hola, yo soy ${personaje.name}`)

    getPersonaje(2, function(personaje){
        console.log(`Hola, yo soy ${personaje.name}`)

        getPersonaje(3, function(personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            getPersonaje(4, function(personaje){
                console.log(`Hola, yo soy ${personaje.name}`)

                getPersonaje(5, function (personaje){
                    console.log(`Hola, yo soy ${personaje.name}`)

                    getPersonaje(6, function(personaje){
                        console.log(`Hola, yo soy ${personaje.name}`)

                        getPersonaje(7, function (personaje){
                            console.log(`Hola, yo soy ${personaje.name}`)

                            getPersonaje(8, function(personaje){
                                console.log(`Hola, yo soy ${personaje.name}`)

                                getPersonaje(9, function(personaje){
                                    console.log(`Hola, yo soy ${personaje.name}`)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})