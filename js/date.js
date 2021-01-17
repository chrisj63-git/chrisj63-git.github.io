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

let d = new Date(document.lastModified);
fulldate = formatDate(d);

document.getElementById("lastmoddate").textContent = fulldate;

let c = new Date().getFullYear()
document.getElementById("copydate").textContent = c;

function formatDate (d) {
    
    let dayName = daynames[d.getDay()];
    let monthName = months[d.getMonth()];
    let year = d.getFullYear();
    let fulldate =  dayName + ", " + monthName + " " + d.getDate() + ", " + year;

    return fulldate;
}