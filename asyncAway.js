

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

async function getPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => getPersonaje(id))

    try{
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch(id) {
        onError(id)
    }
}
getPersonajes()
