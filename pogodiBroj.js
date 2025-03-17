var randomBroj = Math.ceil(Math.random() * 100); // random broj u opsegu od 1 do 100;
console.log(`Tajni broj je: ${randomBroj}`); // Ovo obrisati kasnije;
var brojPokusaja = 0; // Početni broj pokušaja je 0, neće se odmah povećavati prilikom inicijalizacije, a mi smo stavljali da je =1, cim otvori ekran

var maxBrojPokusaja = 3;

function pogodiBroj() {
    // Uzimamo broj koji je korisnik uneo:
    var unetiBroj = document.getElementById("unetiBroj").value;
    console.log(`Uneti broj je: ${unetiBroj}`);

    // Ispis poruka
    var poruka = document.getElementById("poruka");

    // Provera da li je korisnik uneo bilo šta:
    if (unetiBroj === "") {
        poruka.innerHTML = `<span style="color: red"><i class="fa-regular fa-face-angry"></i><br>Morate uneti broj!</span>`;
        return;
    }

    brojPokusaja++; // Povećavamo broj pokušaja nakon što korisnik unese broj

    if (unetiBroj == randomBroj) {
        poruka.innerHTML = `<span style="color: green; ">ČESTITAMO! <br> <i class="fa-solid fa-hands"></i> <br> Pogodili ste tajni broj iz ${brojPokusaja}. pokušaja!</span>`;
        setTimeout(novaIgra, 4000);
        return; // Prekidamo funkciju ako je pogodio broj, ne dozvoljavamo više pokušaja
    // Ako broj nije pogođen
    } else if (unetiBroj > randomBroj) {   
        poruka.innerHTML = `<span style="color: red;">Probajte manji broj!<br><i class="fa-regular fa-face-smile"></i></span>`;
    } else {
        poruka.innerHTML = `<span style="color: brown;">Probajte veći broj!<br><i class="fa-solid fa-hand-point-up"></i></span>`;
    }

    // Ako je broj prešao maksimalni broj pokušaja
    if (brojPokusaja >= maxBrojPokusaja) {
        poruka.innerHTML = `<span style="color: red;">Izgubili ste! <br><i class="fa-regular fa-thumbs-down"></i><br> Tačan broj je bio <i class="fa-regular fa-hand-point-right"></i> ${randomBroj}</span>`;
        setTimeout(novaIgra, 3000); // Pokreće novu igru posle 3 sekunde
        return; // Prekida se funkcija, jer je igrač iskoristio sve pokušaje
    }

}

function novaIgra() {
    location.reload(); // Pokreće novu igru, ponovo učitava stranicu
}
