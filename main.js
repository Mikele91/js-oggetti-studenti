// // Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// var studente = {
//     "nome":"Michele",
//     "cognome": "Amoruso",
//     "eta": 30,
// };
// // Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// for(key in studente){
//     console.log(`${key} => ${studente[key]}`);
// }

// Creare un array di oggetti di studenti.

var listaStudenti=[

    {
        "nome":"Michele",
        "cognome": "Amoruso",
        "eta": 30,
    },
    {
        "nome":"Laura",
        "cognome": "Cubero",
        "eta": 30,
    },
    {
        "nome":"Franco",
        "cognome": "Stioli",
        "eta": 32,
    },
    {
        "nome":"Ennio ",
        "cognome": "Annio",
        "eta": 27,
    },

];


// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var nuovoIscritto = {
    "nome": prompt("inserisci il nome"),
    "cognome": prompt("inserisci il cognonome"),
    "eta": prompt("inserisci la tua età"),
}
listaStudenti.push(nuovoIscritto);
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for( var i = 0; i<listaStudenti.length; i++){
    console.log(listaStudenti[i]["nome"],listaStudenti[i]["cognome"]);
}
