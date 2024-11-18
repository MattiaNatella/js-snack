// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while (facoltativo)


 let somma = 0;
 let i = 0;

 while (i !== 5) {
  let inputNumeri = parseInt(prompt('inserisci un numero'))
  somma += inputNumeri;
  i++
}
 console.log('La somma è pari a', somma)


// ALTERNATIVA


let sum = 0;

for (let i = 0; i < 5; i++) {
  let insNumero = parseInt(prompt('Inserisci un numero'))
  sum += insNumero
}
console.log('la somma è pari a', sum)