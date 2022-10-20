// create new element for date to display in header
let currentDay = $('<p>');
let dateDisplay = $('#currentDay');

setInterval(eachSecond, 1000);

function eachSecond() {
currentDay.text(moment().format('MMMM Do YYYY, HH:mm:ss a')).addClass('current-date');
}

dateDisplay.append(currentDay).addClass('mt-5');

let hourlyForm = $('<form>');
let dailySchedule = $('.container');

hourlyForm.addClass('form');

for(var i=9; i<18; i++) {
    
    let hour = $('<label>');
    let userResponse = $('<input>');
    let saveBtn = $('<button>');

    hour.addClass('hour').text(i + ':00 AM').height('40px').width('75px');
    userResponse.addClass('past').attr('id', i).attr('type', 'text').attr('name', i).height('40px').width('60%').text();
    saveBtn.addClass('saveBtn').text('📌').attr('type', 'submit').height('40px').width('40px');

    hourlyForm.append(hour);
    hourlyForm.append(userResponse);
    hourlyForm.append(saveBtn);
    hourlyForm.append($('<br>'));
    
    if(i >= 12) {
        hour.text(i + ':00 PM');
    }

    if(i > dayjs().hour()) {
        userResponse.addClass('future');
    }
    
    if (i == dayjs().hour()) {
        userResponse.addClass('present')
    }
    
    let key = hour.text();
    let autoFill = localStorage.getItem(key);
    userResponse.val(autoFill);

    saveBtn.on('click', saveBtnClick);

    function saveBtnClick(e) {
        e.preventDefault();

        let saveUserResponse = userResponse.val();
        

        localStorage.setItem(key, saveUserResponse);

    }
}

dailySchedule.append(hourlyForm); 