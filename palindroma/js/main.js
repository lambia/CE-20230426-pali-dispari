//ricevere una [parola] dall'utente
let parola = prompt("Inserisci una parola");
console.log("Hai scelto: ", parola);

//scrivere la [parola al contrario]
let parolaReverse = invertiParola(parola);
console.log("Parola invertita: ", parolaReverse);

//controllare che la [parola] sia uguale alla [parola al contrario]
if(parola.toLowerCase() == parolaReverse.toLowerCase()) {
    alert("La parola è palindroma!");
} else {
    alert("La parola NON è palindroma!");
}

//Funzione che a partire da una parola, restituisce la stessa stringa invertita
function invertiParola(parolaDaInvertire) {
    let parolaInvertita = "";

    for (let i = parolaDaInvertire.length - 1; i >= 0; i--) {
        let carattere = parolaDaInvertire[i];
        parolaInvertita += carattere;
    }

    return parolaInvertita;
}