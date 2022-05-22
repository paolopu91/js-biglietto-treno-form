alert("Ciao, compila i dati qui sotto per generare il tuo biglietto")

// costanti e variabili da poter usare nel mio foglio js

const submitBtn = document.getElementById("submitButton")
let inputUserName = document.querySelector("[name='userName']");
let inputKmDaFare = document.querySelector("[name ='kmDaFare']");
let inputFasciaEta = document.querySelector("[name ='fasciaEta' ]");

submitBtn.addEventListener("click" , function() {

// document.getElementById("[name = 'userName']").value;
// document.getElementById("[name='kmDaFare']").value;
// document.getElementById("[name='fasciaEta']").value;

inputUserName.value = "";
inputKmDaFare.value = "";
inputFasciaEta.value = "";

const eta = parseInt(inputUserName.value)
const km = parseInt(inputKmDaFare.value)
let datiValidi = true

// costanti con i miei prezzi per le diverse età
let prezzo= 0.21

console.log(inputUserName, inputFasciaEta, inputKmDaFare)

let prezzoFinale = inputKmDaFare * prezzoKm
 prezzoFinale.toFixed(2)

if(eta<14) {
    alert("Torna a casa")
}
if(eta<18) {
    const prezzo20 = 0.2
    prezzo = prezzo * inputKmDaFare - prezzo20

} else if(eta>65) {
    const prezzo40= 0.4
    prezzo = prezzo * inputKmDaFare - prezzo40
}

let userHTML = document.getElementById("userHTML")
let costoTotaleHTML = document.getElementById("costoTotaleHTML")

userHTML.innerHTML = inputUserName.value;
costoTotaleHTML.innerHTML = prezzoFinale.value
});


const deleteBtn = document.getElementById("deleteButton")

deleteBtn.addEventListener("click", function(){
    window.location.reload();
})









