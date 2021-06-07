$(document).ready(function () {

    var init = false;
    var now = moment().format('LLLL'); // Day, M/D/Y/T format

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

    // Local Storage
    {
        $('.saveBtn').click(function () {
            var hr8 = document.getElementById('8').value;
			localStorage.setItem('text8', hr8);
			var hr9 = document.getElementById('9').value;
			localStorage.setItem('text9', hr9);
			var hr10 = document.getElementById('10').value;
			localStorage.setItem('text10', hr10);
			var hr11 = document.getElementById('11').value;
			localStorage.setItem('text11', hr11);
			var hr12 = document.getElementById('12').value;
			localStorage.setItem('text12', hr12);
			var hr13 = document.getElementById('13').value;
			localStorage.setItem('text13', hr13);
			var hr14 = document.getElementById('14').value;
			localStorage.setItem('text14', hr14);
			var hr15 = document.getElementById('15').value;
			localStorage.setItem('text15', hr15);
			var hr16 = document.getElementById('16').value;
			localStorage.setItem('text16', hr16);
			var hr17 = document.getElementById('17').value;
			localStorage.setItem('text17', hr17);
        });
    }






});