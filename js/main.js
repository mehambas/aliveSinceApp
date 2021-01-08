// define variable 
var dayEl = document.getElementById('day_number');
var hourEl = document.getElementById('hour_number');
var minuteEl = document.getElementById('minute_number');
var secondEl = document.getElementById('second_number');

// birtdate 

alert('Would you like to know, how long you have been alive for?')
var yourYear = prompt(`In which year were you born?
Example: 1990`);
var yourMonth = prompt(`Which month were you born in? (numerical)
January = 1
February = 2
March = 3
April= 4
May = 5
June = 6
July = 7
August = 8
September = 9
October = 10
November = 11
December = 12`);
var yourDay = prompt(`On what day were you born? (numerical)
Example = 22`);

var yourBirth = new Date(yourYear, yourMonth-1, yourDay, 0, 0)


// our count function
count();


function count() {
    setInterval(() => {
        var currentTime = new Date();

        var differenceInTime = currentTime.getTime() - yourBirth.getTime();
        var differenceInDays = differenceInTime / (1000 * 3600 * 24);
        var remaining = differenceInDays - Math.floor(differenceInDays);
    
        var differenceInHours = remaining * 24;
        remaining = differenceInHours - Math.floor(differenceInHours);
    
        var differenceInMinutes = remaining * 60;
        remaining = differenceInMinutes - Math.floor(differenceInMinutes);
    
        var differenceInSeconds = remaining * 60;
        remaining = differenceInSeconds - Math.floor(differenceInSeconds);
    
        var differenceInMiliseconds = Math.floor(remaining * 1000);
        var day = Math.floor(differenceInDays);
        var hours = Math.floor(differenceInHours);
        var minutes = Math.floor(differenceInMinutes);
        var seconds = Math.floor(differenceInSeconds);
        var miliseconds = Math.floor(differenceInMiliseconds);
    
        dayEl.innerText = day;
        hourEl.innerText = hours;
        minuteEl.innerText = minutes;
        secondEl.innerText = seconds;

    }, 1000);
}

// dark mode

var btn = document.getElementById('btn');
var body_right = document.getElementById('body_right');
var body_left = document.getElementById('body_left');
var icon = document.getElementsByClassName('fas fa-toggle-on fa-2x')[0];
var boxes_first = document.getElementsByClassName('boxes_first');
var boxes_second = document.getElementsByClassName('boxes_second');
var first_header = document.getElementsByClassName('first_header')[0];
var second_header = document.getElementsByClassName('second_header')[0];

btn.addEventListener('click', switchMode);

function switchMode() {
    if (icon.classList == 'fas fa-toggle-on fa-2x') {
        icon.className = 'fas fa-toggle-off fa-2x';
        document.body.setAttribute('style', 'background-image: url(./img/background3.jpg); transition: all 0.5s ease-in-out;');
        boxes_first[0].setAttribute('style', 'background-color: #6d8bad; transition: all 0.5s ease-in-out;');
        boxes_first[1].setAttribute('style', 'background-color: #6d8bad; transition: all 0.5s ease-in-out;');
        boxes_second[0].setAttribute('style', 'background-color: #dfb480; transition: all 0.5s ease-in-out;');
        boxes_second[1].setAttribute('style', 'background-color: #dfb480; transition: all 0.5s ease-in-out;');
        first_header.setAttribute('style', 'color: #dfb480; transition: all 0.5s ease-in-out;');
        second_header.setAttribute('style', 'color: #6d8bad; transition: all 0.5s ease-in-out;');
    } else{
        icon.className = 'fas fa-toggle-on fa-2x';
        document.body.removeAttribute('style');
        boxes_first[0].removeAttribute('style');
        boxes_first[1].removeAttribute('style');
        boxes_second[0].removeAttribute('style');
        boxes_second[1].removeAttribute('style');
        first_header.removeAttribute('style');
        second_header.removeAttribute('style');
    }
}