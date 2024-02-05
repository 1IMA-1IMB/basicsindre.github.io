
let tempname = document.getElementById("temp");

if tempname = "fahrenheit" {
    function temperatureConverter(fahrenheitnum) {
    
        fahrenheitnum = parseFloat(fahrenheitnum);
        document.getElementById("outputcelcius").innerHTML=(fahrenheitnum-32)/1.8;
    }
}else {
    function temperatureConverter(celciusnum) {

        celciusnum = parseFloat(celciusnum);
        document.getElementById("outputFahrenheit").innerHTML=(celciusnum*1.8)+32;
      }
}