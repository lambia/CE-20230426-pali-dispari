//recuperiamo i due numeri
//numero 1: chiediamo all'utente
let inputUtenteOk = false;
let numeroUtente;

while( inputUtenteOk==false ) {

    numeroUtente = parseInt(prompt("Scegli un numero tra 1 e 5, inclusi"));

    if ( isNaN(numeroUtente)==false && numeroUtente>=1 && numeroUtente<=5) {
        inputUtenteOk = true;
    } else {
        alert("Devi inserire un numero valido tra 1 e 5");
    }

}

//numero 2: lo estriamo casualmente
let numeroComputer = getRandomNumber(1, 5);

//facciamo scegliere all'utente l'esito (pari/dispari)
let previsioneUtente = prompt("Pari o dispari?");
previsioneUtente = minuscolo( previsioneUtente );
// previsioneUtente = previsioneUtente.toLowerCase();

//stampiamo entrambi i numeri, per debug
console.log(`Numero utente: ${numeroUtente} - Numero computer: ${numeroComputer}`);

//sommiamo i due numeri
let somma = numeroUtente + numeroComputer;

//controlliamo che la somma sia pari o dispari
let esito = getPariOrDispari(somma);

//avvisiamo l'utente dell'esito
console.log(`Il numero ${somma} è ${esito}`);

if(esito.toLowerCase() == previsioneUtente) {
    alert("Hai vinto");
} else {
    alert("Hai perso");
}

//Funzione che genera un numero casuale compreso tra min e max
function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min );
}

//Funzione che controlla un numero e restituisce "pari" o "dispari" (come stringa)
function getPariOrDispari(numero) {

    if (numero % 2 == 0)
    {
        return 'pari';
    }

    return 'dispari';

}

function minuscolo(stringa) {
    return stringa.toLowerCase();
}