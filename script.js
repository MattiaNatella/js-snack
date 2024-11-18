// JSnack 1
// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

// 1. inserisco le variabili prompt
// 2. verifico che siano numeri 
// 3. li confronto e stampo il maggiore

let primoNumero, secondoNumero, numeroMaggiore
let numeriCorretti = false;

while (!numeriCorretti) {
  primoNumero = parseInt(prompt('Inserisci il primo numero'))
  if (!isNaN(primoNumero)) {
    secondoNumero = parseInt(prompt('Inserisci il secondo numero'))
  }
  if (!isNaN(secondoNumero)) {
    numeriCorretti = true
  }
} 
if (primoNumero > secondoNumero) {
  numeroMaggiore = primoNumero
} else if (secondoNumero > primoNumero){
  numeroMaggiore = secondoNumero
} else {
  numeroMaggiore = 'i numeri sono uguali'
}

console.log('Numero maggiore = ', numeroMaggiore)

