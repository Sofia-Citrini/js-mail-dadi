// Chiedere la mail 
const mailUtente = document.querySelector("[name='mail-utente']");
const btnControlla = document.getElementById("controlla");

// Controllare la mail 
btnControlla.addEventListener("click", function () {
    const mailList = ["mariorossi@gmail.com", "annaverdi@gmail.com", "pietrobianchi@gmail.com"];
    console.log = (mailList);

    let utente = false;

    for (let i = 0; i < mailList.length; i++) {

        if (mailList[i] === mailUtente.value) {
            utente = true;
        }
    }

    // messagio di mail esistente o no
    const mailStato = document.querySelector(".stato")

    if (utente === true) {
        console.log = "E-mail approvata";
        mailStato.innerHTML = `email approvata`;
        mailStato.classList.add ("text-success");
    } else {
        mailStato.innerHTML = `email errata. riprova!`;
        mailStato.classList.add ("text-danger");
    }
})


