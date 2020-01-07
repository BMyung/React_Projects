// var interval;
function createClock() {
    setInterval(nowTime, 1000);
}

function nowTime(){
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

    var c_time = hours + ":" + min + ":" + sec +" "+ ampm;
    const time = React.createElement("span", null, c_time);

    ReactDOM.render(time, document.getElementById("time"));
}


