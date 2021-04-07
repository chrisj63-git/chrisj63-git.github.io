/*if (weekday=="Friday") {
    document.getElementById("testbanner").className = "banner";
} else {
    document.getElementById("testbanner").className = "nobanners";
}
*/

function toggleGrid () {
    if (document.getElementById("main").className == "list") {
        document.getElementById("main").classname = "grid";
     } 
    
     if (document.getElementById("main").className == "grid") {
        document.getElementById("menu").className = "list";
        }
    }