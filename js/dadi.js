// numeri random
const numGiocatore = Math.ceil(Math.random() * 6);
const numComputer = Math.ceil(Math.random() * 6);

// computer e giocatore
const giocatore = document.getElementById("giocatore");
giocatore.innerHTML = `Giocatore: ${numGiocatore}`;

const computer = document.getElementById("computer");
computer.innerHTML = `Computer: ${numComputer}`;



