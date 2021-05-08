

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

//Los request se están haciendo en SERIE
getPersonaje(1)
    .then(personaje => {
        console.log(`El personaje 1 es ${personaje.name}`)
        return getPersonaje(2) //retorna una promesa en cada uno
    })
    .then(personaje => {
        console.log(`El personaje 2 es ${personaje.name}`)
        return getPersonaje(3)
    })
    .then(personaje => {
        console.log(`El personaje 3 es ${personaje.name}`)
        return getPersonaje(4)
    })
    .then(personaje => {
        console.log(`El personaje 4 es ${personaje.name}`)
        return getPersonaje(5)
    })
    .then(personaje => {
        console.log(`El personaje 5 es ${personaje.name}`)
        return getPersonaje(6)
    })
    .then(personaje => {
        console.log(`El personaje 6 es ${personaje.name}`)
        return getPersonaje(7)
    })
    .then(personaje => {
        console.log(`El personaje 7 es ${personaje.name}`)
    })
    .catch(onError) 