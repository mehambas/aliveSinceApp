// define variable 
var dayEl = document.getElementById('day_number');
var hourEl = document.getElementById('hour_number');
var minuteEl = document.getElementById('minute_number');
var secondEl = document.getElementById('second_number');

// birtdate 

var welcome = prompt('Would you like to know, how long you have been alive for?')
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

    }, 1);
}

