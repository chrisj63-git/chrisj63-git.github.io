var temp=55.0;
var windspeed=5.0;
var windchill=48.2

temp = parseFloat(document.getElementById("tmp").innerHTML);
windspeed = parseFloat(document.getElementById("ws").innerHTML);

if (temp <= 50 && windspeed > 3) {
    windchill = computeWindChill(temp, windspeed);
    windchill = roundOff(windchill, 2);
    document.getElementById("wc").innerHTML = windchill;
}

function computeWindChill(tempF, speed) {

    // Declare in-Function Variables
 
     let fchill = 0;
 
     fchill = (35.74 + (.6215 * tempF) - (35.75 * (speed ** 0.16)) + ((0.4275 * tempF) *(speed ** 0.16)))
 
     return(fchill);
 }

 function roundOff(rnumber, digits) {

    // Round to the number of digits parameter after the decimal.

        var multiplier = Math.pow(10, digits);
        var roundNumber = Math.round(rnumber * multiplier) / multiplier;
 return(roundNumber);
}