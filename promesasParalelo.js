

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


//ids que queremos
var ids = [1, 2, 3, 4, 5, 6, 7]
//Con map se va a recorrer el array y por cada elemento se va a retornar una promesa
/*var promesas = ids.map(function(id) {
    return getPersonaje(id)
})*/
var promesas = ids.map(id => getPersonaje(id))

//Los request se están haciendo en PARALELO
Promise
    .all(promesas) //recibe como parámetro un array de promesas
    .then(personajes => console.log(personajes)) //aquí se tienen los valores que esperamos, es decir, los personajes
    .catch(onError) //se ejecuta si cualquiera de las promesas del array falla