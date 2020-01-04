var interval;
var time;
 
function createClock() {
  interval = setInterval(getTime, 1000);
}

function getTime(){
    var today = new Date();
    var hours = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var ampm = "AM";
    if (hours > 12){
        hours = hours % 12;
        ampm = "PM";
    }
    else if (hours == 0){
        hours = "12"
    }
    min = ( min < 10 ? "0" : "" ) + min;
    sec = ( sec < 10 ? "0" : "" ) + sec;
    time = hours + ":" + min + ":" + sec +" "+ ampm;
    document.getElementById("time").innerHTML = time;
}



