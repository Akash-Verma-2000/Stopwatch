let startButton = document.getElementById("start-button");  //MAKING A VARIABLE TO GET THE STARTBUTTON
let stopButton = document.getElementById("stop-button");    //MAKING A VARIABLE TO GET THE STOPBUTTON
let resetButton = document.getElementById("reset-button");  //MAKING A VARIABLE TO GET THE RESETBUTTON

let hrsText = document.getElementById("hrs");   //MAKING A VARIABLE TO GET THE ACCESS OF THE HOURS BLOCK'S HTML
let minText = document.getElementById("min");   //MAKING A VARIABLE TO GET THE ACCESS OF THE MINUTES BLOCK'S HTML
let secText = document.getElementById("sec");   //MAKING A VARIABLE TO GET THE ACCESS OF THE SECONDS BLOCK'S HTML
let micText = document.getElementById("mic");   //MAKING A VARIABLE TO GET THE ACCESS OF THE MICROSECONDS BLOCK'S HTML

let microseconds = 0;   //DECLARING THE INITIAL VALUE OF MICROSECONDS
let seconds = 0;        //DECLARING THE INITIAL VALUE OF SECONDS
let minutes = 0;        //DECLARING THE INITIAL VALUE OF MINUTES
let hours = 0;          //DECLARING THE INITIAL VALUE OF HOURS

let button;             // ID FOR THE SETINTERVAL FUNCTION
function stopWatch() {  //MAIN FUNCTION OF THE STOPWATCH
    button = setInterval(() => {    //THIS FUNCTION IS RUNNING IN EACH 10 MICROSECONDS

        //TAKING CARE IF THE MICROSECONDS ARE LESS THEN TEN THEY SHOULD BE JOINED WITH A ZERO
        if (microseconds < 10) {
            microseconds = "0" + microseconds;
        }

        //TAKING CARE IF THE SECONDS ARE LESS THEN TEN THEY SHOULD BE JOINED WITH A ZERO
        if (microseconds == 0 && seconds < 10) {
            seconds = "0" + seconds;
        }

        //TAKING CARE IF THE MINUTES ARE LESS THEN TEN THEY SHOULD BE JOINED WITH A ZERO
        if (microseconds == 0 && seconds == 0 && minutes < 10) {
            minutes = "0" + minutes;
        }

        //TAKING CARE IF THE HOURS ARE LESS THEN TEN THEY SHOULD BE JOINED WITH A ZERO
        if (microseconds == 0 && seconds == 0 && minutes == 0 && hours < 10) {
            hours = "0" + hours;
        }

        microseconds++;     //INCREAMENTING THE MICROSECONDS IN EACH ITRATION OF THE FUNCTION

        micText.innerHTML = microseconds;   //PUTTING THE VALUE OF MICROSECONDS IN THE MICROSECOND TIMING BLOCK
        secText.innerHTML = seconds;        //PUTTING THE VALUE OF SECONDS IN THE SECOND TIMING BLOCK
        minText.innerHTML = minutes;        //PUTTING THE VALUE OF MINUTES IN THE MINUTE TIMING BLOCK
        hrsText.innerHTML = hours;          //PUTTING THE VALUE OF HOURS IN THE HOUR TIMING BLOCK

        if (microseconds == 100) {   // UPDATING THE SECONDS VALUE 
            seconds++;
            microseconds = 0;
        }
        if (seconds == 60) {         //UPDATING THE MINUTES VALUE

            minutes++;
            seconds = 0;
        }
        if (minutes == 60) {        //UPDATING THE HOURS VALUE
            hours++;
            minutes = 0;
        }
    }, 10);
}

startButton.addEventListener("click", () => {   //FUNCTION FOR START BUTTON
    startButton.disabled = true;
    stopButton.disabled = false;
    stopWatch();

})
stopButton.addEventListener("click", () => {    //FUNCTION FOR STOP BUTTON
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(button);

})
resetButton.addEventListener("click", () => {   //FUNCTION FOR RESET BUTTON
    startButton.disabled = false;
    clearInterval(button);
    microseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    secText.innerHTML = "00";
    micText.innerHTML = "00";
    minText.innerHTML = "00";
    hrsText.innerHTML = "00";
})
























