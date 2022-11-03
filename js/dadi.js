const btnGenera = document.getElementById ("genera");

btnGenera.addEventListener("click", function() {
    // Genera numeri
    const numGiocatore = Math.ceil(Math.random() * 6);
    const numComputer = Math.ceil(Math.random() * 6);

    // computer e giocatore
    const giocatore = document.getElementById("giocatore");
    giocatore.innerHTML +=` ${numGiocatore}`;
    giocatore.classList.add ("fw-bold", "fs-5");

    const computer = document.getElementById("computer");
    computer.innerHTML +=` ${numComputer}`;
    computer.classList.add ("fw-bold", "fs-5");

    // vincitore con numero più alto
    const risultato = document.querySelector (".risultato")

    let color = ""

    if (numGiocatore < numComputer) {
        color="text-primary";
        risultato.innerHTML = `<div class="${color}">Computer ha vinto</div>`;
    } else if (numGiocatore === numComputer){
        color ="text-secondary";
        risultato.innerHTML = `<div class="${color}">Pareggio</div>`;
    } else {
        color="text-success";
        risultato.innerHTML = `<div class="${color}">Giocatore ha vinto</div>`;
    } 
})

const btnRefresh = document.getElementById ("refresh");
btnRefresh.addEventListener("click", function() {
    location.reload();
})