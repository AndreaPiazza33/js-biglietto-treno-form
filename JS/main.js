//variabile km
const  passengerKm = parseFloat(prompt ("quanti km percorrerai?"))

//variabile età
const passengerAge = parseInt(prompt("quanti anni hai?"))

//variabile sconto minorenni
const underageDiscount = (20 / 100)

//variabile sconto over 65
const overageDiscount = (40 / 100)

//variabile costo al km
const kmPrice = (0.21)

//condizioni numeri km e prezzo
if (isNaN(passengerKm)){
    alert(passengerKm + " non è un numero!")
}
else if (isNaN(passengerAge)){
    alert(passengerAge + " non è un numero!")
}

if (passengerKm < 0){
    alert(passengerKm + " non è un numero positivo!")
}
else if (passengerAge < 0){
    alert(passengerAge + " non è un numero positivo!")
}

//condizioni per lo sconto
if((passengerAge < 18) && (passengerAge > 0)){
    x = underageDiscount
}
else if (passengerAge >= 65) {
    x = overageDiscount
}
else {
    x = 1
}

//variabile prezzo finale

const ticketPrice = ((kmPrice * passengerKm) * x )

//condizioni prezzo finale
if ((ticketPrice <= 0) || (isNaN(ticketPrice))){
    alert (ticketPrice + " non è un risultato valido")
}
else {
  alert( "Il prezzo del tuo biglietto è: " + Math.round(ticketPrice * 100) / 100 )  
}


