alert("Ciao, compila i dati qui sotto per generare il tuo biglietto")

const submitBtn = document.getElementById("submitButton")
const inputUserName = document.querySelector("[name='userName']");
const inputKmDaFare = document.querySelector("[name ='kmDaFare']");
const inputFasciaEta = document.querySelector("[name ='fasciaEta' ]");

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

// if (isNaN(inputFasciaEta) && isNaN(inputKmDaFare)) {
//     datiValidi=false
//     alert("Inserisci un numero valido")
// }
let prezzoFinale = inputKmDaFare * prezzoKm
 prezzoFinale.toFixed(2)

if(eta<14) {
    alert("Torna a casa")
}
if(eta<18) {
   let prezzo20 = prezzo * 0.20
   prezzo -= prezzo20
} else if(eta>65) {
   let prezzo40 = prezzo * 0.4
    prezzo-= prezzo40
}



const userHTML = document.getElementById("userHTML")
const costoTotaleHTML = document.getElementById("costoTotaleHTML")

userHTML.value
});


const deleteBtn = document.getElementById("deleteButton")
const prezzoKm = 0.21;

deleteBtn.addEventListener("click", function(){
    window.location.reload();
})









