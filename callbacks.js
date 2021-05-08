

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }


function getPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, function (persona) {
        console.log(`Hola, yo soy ${persona.name}`)

        if(callback) {
            callback()
        }
    }) //peopleResponse es un callback que se ejecuta cuando regresa algo la petición get
}

//Múltiples request 
//Cada que se llama trae diferentes resultados
//Esto es el asincronismo en JS, no saber el orden en que van a llegar, esto depende del servidor y de cuánto tiempo tardan
//en responder los request
//Se hacen las llamadas en paralelo
/*getPersonaje(1)
getPersonaje(2)
getPersonaje(3)*/

//Con callbacks
//Se hacen las llamadas en serie
getPersonaje(1, function (){ //esta function es el callback que se define arriba
    getPersonaje(2, function(){
        getPersonaje(3, function() {
            getPersonaje(4, function(){
                getPersonaje(5, function (){
                    getPersonaje(6, function(){
                        getPersonaje(7, function (){
                            getPersonaje(8, function(){
                                getPersonaje(9)
                            })
                        })
                    })
                })
            })
        })
    })
})