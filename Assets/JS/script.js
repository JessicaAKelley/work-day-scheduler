$(document).ready(function () {

    var init = false;
    var now = moment().format('LLLL'); // Day M/D/Y/T format

    let now24 = moment().format('H'); // 12 hour clock format
    let now12 = moment().format('h'); // 24 hour clock format
    if (init) {
        now24 = 13;
        now12 = 1;
    }

    // Display current date
    const currentDate = $('#currentDay');
    currentDate.text(now);

    // Initiate date and time
    var cal = new Date();
    var currentHour = cal.getHours();

    for (var i = 8; i < 18; i++) {
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add('past');
        } else if (i === currentHour) {
            document.getElementById(i.toString()).classList.add('present');
        } else if (i > currentHour) {
            document.getElementById(i.toString()).classList.add('future');
        }
    }
});