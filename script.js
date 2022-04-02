// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const pattern = [];
const patternSize = 8;

//Global Variables
var progress = 0;
var tries = 3;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound

function showImage(btn){
  while(document.getElementById("button"+ btn).style.background != "green"){
    document.getElementById("image" + btn).classList.add("hidden");
  }
}

function generatePattern() {
  //Generates a random pattern
  var min = Math.ceil(1);
  var max = Math.floor(7);
  for (let i = 0; i <= patternSize - 1; i++) {
    pattern[i] = Math.floor(Math.random() * (max - min) + min);
  }
}

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  tries = 3;
  document.getElementById("trialTracker").innerHTML = tries;
  document.getElementById("trialTracker").style.color = "white";
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  generatePattern();
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  tries = 3;
  document.getElementById("trialTracker").innerHTML = tries;
  document.getElementById("trialTracker").style.color = "white";
  // swap the Start and Stop buttons back
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 520,
  6: 620.7,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
  document.getElementById("image" + btn).classList.add("hidden");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
  document.getElementById("image" + btn).classList.remove("hidden");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  clueHoldTime -= 100;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You win!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    if (tries == 0) {
      loseGame();
    } else {
      tries--;
      document.getElementById("trialTracker").innerHTML = tries;
      document.getElementById("trialTracker").style.color = "red";
      alert(
        "You have " +
          tries +
          " tries left! Think carefully! What's the next button in the pattern?"
      );
    }
  }
}
