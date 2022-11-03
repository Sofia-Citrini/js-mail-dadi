// Chiedere la mail 
const mail = prompt("Inserisci la tua e-mail");
console.log = (`Email utente: ${mail}`);

const mailUtente = document.querySelector(".mail-utente")
mailUtente.innerHTML = `Email utente: ${mail}`;

// Controllare la mail 
const mailList = ["mariorossi@gmail.com", "annaverdi@gmail.com", "pietrobianchi@gmail.com"];
console.log = (mailList);

let utente = false;

for (let i = 0; i < mailList.length; i++) {

    if (mailList[i] === mail) {
        utente = true;
    }
}

// messagio di mail esistente o no
const mailStato = document.querySelector(".stato")

if (utente === true) {
    console.log = "E-mail approvata";
    mailStato.innerHTML = `email approvata`;
} else {
    mailStato.innerHTML = `email errata`;
}