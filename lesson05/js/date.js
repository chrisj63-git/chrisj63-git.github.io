let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

var weekday = "Monday";

let d = new Date();
fulldate = formatDate(d);

document.getElementById("currdate").textContent = fulldate;

weekday = bannerDate(d);

if (weekday=="Friday") {
    document.getElementById("testbanner").className = "banner";
} else {
    document.getElementById("testbanner").className = "nobanner";
}

function formatDate(d) {
    
    let dayName = daynames[d.getDay()];
    let monthName = months[d.getMonth()];
    let year = d.getFullYear();
    let fulldate = dayName + ", " + monthName + " " + d.getDate() + " " + year;

    return fulldate;
}

function toggleMenu () {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    if (document.getElementById("testnav").className == "navigation responsive") {
        document.getElementById("menu").innerHTML = "&#9776; Close Menu";
     } 
    
     if (document.getElementById("testnav").className == "navigation") {
        document.getElementById("menu").innerHTML = "&#9776; Menu";
        }
    }

function bannerDate(d) {
    let dayName = daynames[d.getDay()];
    
    return dayName;
}
