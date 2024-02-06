var milisecCounter = 0
var secondsCounter = 0
var minuteCounter = 0
var hourCounter = 0

var start = document.getElementById("start")
var stop = document.getElementById("stop")
var reset = document.getElementById("reset")
stop.disabled = true
reset.disabled = true

var hour = document.getElementById("hour")
var minute = document.getElementById("minute")
var seconds = document.getElementById("seconds")
var milisec = document.getElementById("milisec")
var counter = 0
var interval;

function timer() {
    milisecCounter++
    milisec.innerHTML = milisecCounter
    // console.log(milisecCounter)
    if (milisecCounter === 100) {
        secondsCounter++
        seconds.innerHTML = secondsCounter
        milisecCounter = 0
        if (secondsCounter === 60) {
            secondsCounter = 0
            minuteCounter++
            minute.innerHTML = minuteCounter
            if(minuteCounter === 60){
                minuteCounter =0
                hourCounter++
                hour.innerHTML = hourCounter
            }
        }

    }


}

function startTimer(e) {
    e.disabled = true
    stop.disabled = false
    reset.disabled = false
    interval = setInterval(timer, 10)
}


function stopTimer() {
    clearInterval(interval)
    start.disabled = false
    stop.disabled = true

    
}


function resetTimer() {
    clearInterval(interval)
    start.disabled = false
    stop.disabled = true
    reset.disabled = true

    hour.innerHTML = "00"
    minute.innerHTML = "00"
    seconds.innerHTML = "00"
    milisec.innerHTML = "00"
    secondsCounter = 0
    minuteCounter = 0
    hourCounter = 0
    milisecCounter = 0

}