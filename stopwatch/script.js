window.onload = function() {
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var mSecs = 0;
  var appendHours = document.getElementById("hours");
  var appendMinutes = document.getElementById("minutes");
  var appendSeconds = document.getElementById("seconds");
  var appendMsecs = document.getElementById("msecs");
  var buttonStart = document.getElementById("button-start");
  var buttonPause = document.getElementById("button-pause");
  var buttonLap = document.getElementById("button-lap");
  var buttonReset = document.getElementById("button-reset");
  var Interval;

  buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    document.getElementById("button-start").style.display = "none";
  };

  buttonPause.onclick = function() {
    clearInterval(Interval);
    var a = document.getElementById("button-start");
    if (a.style.display === "none") {
      document.getElementById('button-start').innerHTML = 'Resume';
      a.style.display = "";
    } else {
      a.style.display = "";
    }

  };

  
  buttonLap.onclick = function() {
    document.getElementById('record').innerHTML = 
      "<p style='font-style: oblique; color:whitesmoke; font-size: 0.8em;' id='lap'>"
      +"<b>"
      +document.getElementById('hours').innerHTML
      +": "
      +document.getElementById('minutes').innerHTML
      +": "
      +document.getElementById('seconds').innerHTML
      +"</b></p>";
  };

  buttonReset.onclick = function() {
    clearInterval(Interval);
    hours = "00 ";
    minutes = "00 ";
    mSecs = "00";
    seconds = "00 ";
    document.getElementById('button-start').innerHTML = 'START';
    appendMsecs.innerHTML = mSecs;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    appendHours.innerHTML = hours;
    document.getElementById("record").innerHTML = "";
    var a = document.getElementById("button-start");
    if (a.style.display === "none") {
      a.style.display = "";
    }

  }

  function startTimer() {
    mSecs++;
    appendMsecs.innerHTML = mSecs;

    if (mSecs > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = seconds;
      mSecs = 0;
      if (seconds < 10) {
        appendSeconds.innerHTML = "0" + seconds;
      } else {
        appendSeconds.innerHTML = seconds;
      }
    }
    if (seconds >= 60) {
      seconds = "0" + 0;
      minutes++;
      appendSeconds.innerHTML = seconds;
      appendMinutes.innerHTML = minutes;
      if (minutes < 10) {
        appendMinutes.innerHTML = "0" + minutes;
      } else {
        appendMinutes.innerHTML = minutes;
      }
    }
    if (minutes >= 60) {
      minutes = "0" + 0;
      hours++;
      appendMinutes.innerHTML = minutes;
      appendHours.innerHTML = hours;
    }
  }
};
