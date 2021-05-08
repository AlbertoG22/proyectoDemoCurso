

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }


function getPersonaje(id) {

    //retorna una promesa
    return new Promise((resolve, reject) => {
        //llamado asíncrono
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function(data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.group(`Sucedió un error al obtener al personaje ${id}`)
}

getPersonaje(1)
    .then(function(personaje) { //personaje es data, llega desde el resolve
        console.log(`El personaje 1 es ${personaje.name}`)
    })
    .catch(onError) //no se invoca a la función, se está pasando el nombre de la función que se va a ejecutar