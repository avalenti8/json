const fetch = require("node-fetch")

const body = { a: 1 };

const accreditamento = () =>
    fetch("http://192.168.1.231:8080", {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(response => {
           console.log(response)
        })
        .catch(error => console.log("Si è verificato un errore: " + error))
        
fetch("http://192.168.1.231:8080/esercizi/1", {
    method: 'get',
    headers: { 'x-data': 'true' },
    })
    .then(response => response.json())
    .then(response => {
       const data = response.data.to
    })
    .catch(error => console.log("Si è verificato un errore: " + error))


for(i=0; i<100; i++){
    if(id % 2 != 0){
        console.log(lista[i].title)
    }
}
