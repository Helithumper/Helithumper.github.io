$(window).on('load', function() {
  startDate();
})


function startDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 

    document.getElementById('date').innerHTML =
    
        mm+'/'+dd+'/'+yyyy;
    var t = setTimeout(startDate, 500);
}
function checkDate(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
