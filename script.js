let timer;
    let seconds = 0,
      minutes = 0,
      hours = 0;

    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let reset = document.getElementById("reset");
    let timerText = document.getElementById("timer");

    function startTimer() {
      timer = setInterval(updateTimer, 1000);
    }
    function updateTimer() {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
          minutes = 0;
          hours++;
        }
      }
      timerText.innerText = formatTime(seconds, minutes, hours);
    }
    function resetTimer() {
      clearInterval(timer);
      seconds = minutes = hours = 0;
      timerText.innerText = "00:00:00";
    }
    function stopTimer() {
      clearInterval(timer);
    }

    function formatTime(seconds, minutes, hours) {
      if (seconds < 10) seconds = "0" + seconds;
      if (minutes < 10) minutes = "0" + minutes;
      if (hours < 10) hours = "0" + hours;
      return hours + ":" + minutes + ":" + seconds;
    }

    start.addEventListener("click", startTimer);
    stop.addEventListener("click", stopTimer);
    reset.addEventListener("click", resetTimer);