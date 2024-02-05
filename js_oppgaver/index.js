let sauer = 100;

// Oppgave 1a
function tellEnSau() {
    sauer -= 1;
    console.log("Du har " + sauer + " sauer igjen å telle før du sovner.");
}

// Oppgave 1b
function tellNoenSauer(antall) {
    sauer
    if (sauer <= 0){
        console.log("zzZzzzZzZZzzz...")
    }else {
        console.log("Du har " + sauer + " sauer igjen å telle før du sovner.");
   }
}

// Oppgave 1c
function mistetTellingen() {
    sauer = 100
}

// Oppgave 1e
function klippSauer(antallSauer) {
    if (antallSauer >= 0) {
        console.log("Du fikk nok ull til et par sokker!");
    } 
    if (antallSauer >= 10) {
        console.log("Du fikk nok ull til en stor genser!");
    } 
    if (antallSauer >= 30) {
        console.log("Du fikk nok ull til kjeledress og sengetøy!");
    } 
    if (antallSauer >= 50) {
        console.log("Du fikk nok ull til å lage en saue-klone!");
    } 
    if (antallSauer >= 80) {
        console.log("Du fikk nok ull til et ull-hoppeslott!");
    } 
}

let antallSauer = 0
// Oppgave 1f
// function tellEnSau2() {
//     if (sauer >= 1) {
//         sauer -= 1;
//         console.log("Du har " + sauer + " sauer igjen å telle før du sovner.");
//         antallSauer += 1;
//     } 
//     if (antallSauer == 1) {
//         console.log("Du fikk nok ull til et par sokker!");
//     } 
//     if (antallSauer == 10) {
//         console.log("Du fikk nok ull til en stor genser!");
//     } 
//     if (antallSauer == 30) {
//         console.log("Du fikk nok ull til kjeledress og sengetøy!");
//     } 
//     if (antallSauer == 50) {
//         console.log("Du fikk nok ull til å lage en saue-klone!");
//     } 
//     if (antallSauer == 80) {
//         console.log("Du fikk nok ull til et ull-hoppeslott!");
//     } 
//     if (sauer == 0){
//         console.log("zzZzzzZzZZzzz...")
//     }
//     let mistetTellingen = Math.floor((Math.random() * 10) + 1);
//     if (mistetTellingen == 10) {
//         sauer = 100
//         console.log("Oi! Du har mistet tellingen.")
//     }
// }


document.getElementById("p1").innerHTML = "Du har " + sauer + " sauer igjen å telle før du sovner.";
// Oppgave 2
function tellEnSau3() {
    if (sauer >= 1) {
        sauer -= 1;
        document.getElementById("p1").innerHTML = "Du har " + sauer + " sauer igjen å telle før du sovner.";
        antallSauer += 1;
    } 
    if (antallSauer == 1) {
        console.log("Du fikk nok ull til et par sokker!");
    } 
    if (antallSauer == 10) {
        console.log("Du fikk nok ull til en stor genser!");
    } 
    if (antallSauer == 30) {
        console.log("Du fikk nok ull til kjeledress og sengetøy!");
    } 
    if (antallSauer == 50) {
        console.log("Du fikk nok ull til å lage en saue-klone!");
    } 
    if (antallSauer == 80) {
        console.log("Du fikk nok ull til et ull-hoppeslott!");
    } 
    if (sauer == 0){
        console.log("zzZzzzZzZZzzz...")
    }
    let mistetTellingen = Math.floor((Math.random() * 100) + 1);
    if (mistetTellingen == 100) {
        sauer = 100
        alert("Oi! Du har mistet tellingen.")
        document.getElementById("p1").innerHTML = "Du har " + sauer + " sauer igjen å telle før du sovner.";
    }
}
function resetKnapp() {
    sauer = 100
    document.getElementById("p1").innerHTML = "Du har " + sauer + " sauer igjen å telle før du sovner.";
}
function minusEnSau() {
    if(sauer < 100){
        sauer += 1
        document.getElementById("p1").innerHTML = "Du har " + sauer + " sauer igjen å telle før du sovner.";
    }
}