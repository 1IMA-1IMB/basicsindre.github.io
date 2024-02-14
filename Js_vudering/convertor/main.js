function convertValue() {
    const fromValue = parseFloat(document.getElementById("fromValue").value); //Tar valuen av tallet du skriver inn i inputen
    const fromUnit = parseFloat(document.getElementById("fromUnit").value); //Tar valuen av enheten du velger å convertere fra
    const toUnit = parseFloat(document.getElementById("toUnit").value); //Tar valuen av enheten du velger å convertere til

    if (isNaN(fromValue)) {  //Har dette i koden min fordi jeg ville ikke at den skulle displaye NaN/(Not a Number) når du ikke skrivet et tall eller når input boksen er tom
        displayResult(""); //Viser ingen ting isteaden for NaN
        return;
    }

    const toValue = fromValue * (fromUnit / toUnit); //Dette deler først enheten du velger å converte fra også deler på den du converter til så ganger den det tallet du skriver inn i input boksen
    displayResult(toValue); //Viser svaret i resultatboksen
}

function displayResult(result) { 
    const toValueInput = document.getElementById("toValue"); //Lagrer toValue i en variabel
    toValueInput.value = !isNaN(result) ? result.toFixed(4) : ""; //Sjekker om valuen er NaN/(Not a Number) og hvis den er det oppdaterer den valuen til ingen ting ("?"" = en kort if statement)
}

function swapUnits() { //Har dette for å switche mellom enheter lettere altså gjør nettsiden mer brukerveldlig 😁👍
    const fromUnit = document.getElementById("fromUnit").value; // Tar å lagrer enheten du converterer fra
    const toUnit = document.getElementById("toUnit").value; // Tar å lagrer enheten du converterer til

    document.getElementById("fromUnit").value = toUnit; // switcher enheten du converter fra og bytter den med den du converter til
    document.getElementById("toUnit").value = fromUnit; // switcher enheten du converter til og bytter den med den du converter fra

    convertValue(); // Viser det nye resultatet
}
