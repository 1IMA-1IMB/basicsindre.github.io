function checkPalindrome() {
    var input = document.getElementById("Input").value; //Lagrer valueen til det du legger inn i input boksen
    var reversedInput = input.split('').reverse().join(''); //Lager en ny variabel også bruker jeg split for å splitte opp ordet eller taller i en liste så bruker jeg reverse for å gjøre om rekkeføllen på listen også til slutt setter jeg dem sammen igjen med join
            
    if (input == reversedInput) {
        document.getElementById("result").innerText = "Dette er et palindrom!"; //Hvis ordet/tallet du skrev inn matcher med det reversa ordet/tallet Skriver den ut "Dette er et palidrom!"
    } else {
        document.getElementById("result").innerText = "Dette er ikke et palindrom."; //Hvis ordet/tallet du skrev inn ikke matcher med det reversa ordet/tallet Skriver den ut "Dette er ikke et palidrom!"
    }
}
