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

let d = new Date();
fulldate = formatDate(d);
console.log(fulldate);
tfulldate = fulldate.trim();
console.log(tfulldate);

document.getElementById("currdate").textContent = tfulldate;

function formatDate(d) {
    
    let dayName = daynames[d.getDay()];
    let monthName = months[d.getMonth()];
    let year = d.getFullYear();
    let fulldate = dayName + ", " + monthName + " " + d.getDate() + " " + year;

    return fulldate;
}

function toggleMenu () {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}