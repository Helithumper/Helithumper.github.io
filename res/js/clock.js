$(window).on('load', function() {
  startTime();
})


function startTime() {
    var today = new Date();
    var h = (today.getHours()==12)?12:today.getHours()%12;
    var ampm = (today.getHours>=12)?" AM":" PM";
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    //h + ":" + m + ":" + s + ampm;
    h + ":" + m + ampm
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
