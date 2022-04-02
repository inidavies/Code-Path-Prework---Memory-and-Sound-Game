# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Inioluwa Davies**

Time spent: **20** hours spent in total

Link to project: (https://glitch.com/edit/#!/enshrined-spiny-lumber?path=script.js%3A128%3A3)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Displaying how many tries are left on the game screen

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/IySyrFd.gif)
![](https://i.imgur.com/iUFw4h5.gif)
![](https://i.imgur.com/sGovCiP.gif)
![](https://i.imgur.com/tNQ715p.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random, https://www.w3schools.com/cssref/pr_border.asp]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[I encountered some challenges trying to format images and toggling between hiding and displaying them. At first, my issue was making the images uniform so they were all properly sized on each button. To tackle this, I did some trial and error with the width, height, and margins, of the images until I found the optimal dimensions.

Another challenge I met was implementing the provided flowchart for the guessing function into code in javascript. It is easy to lose track of the various counters that determine the different states of the game. For example, the progress variable keeps track of the pattern cycles left in the game. Then I added strikes/attempts/tries to the mix as an extra feature of the game.

I kept these variables in order and incremented or decremented them in the correct portions of the if-else loop by labeling each counter variable with its respective purpose (on paper) and then matching them to the portion of the loop that required them.

After that, I had to make sure, the images would display while the clues were given as well as when the user played the clues back. Initially, I was not sure of where to implement the part of the code that displayed the image when the tone was played. But after careful consideration, I realized the best place would be in the lightButton() function, which is called every time a clue is played.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[This project made me curious about how other programming languages can be used to implement the logical functionality of web games. I use mainly C++ in my college classes, and I'm accustomed to having mainly text-based interactions with variables so I find it interesting how Javascript makes otherwise static website elements come to life. 
When it comes to updating web game software, what are some of the practices used by developers to keep track of both static website elements with HTML and CSS and dynamic elements in javascript, jquery, etc? And how do web developers keep these dynamic website elements consistent and optimized for the numerous and ever-growing screen shapes, types, and resolutions? 
]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had more time I would work on adding different levels to the game. Level one would be the regular color and sound game, level two would ask the user to match the image and sound clues, the third level would be a timed version of level two, and the fourth level would have the user match a mix of colored buttons and images (instead of just one or the other )within a time limit. The final level would have distractions where after a randomly generated time interval, a "distraction" button would be played to throw the player off.

Another modification I would make is to refactor the startGame and stopGame functions. I would combine them into one gameState function that either starts or stops the game depending on the value of a boolean function that is determined by what button is pressed (start or stop). I would do the same with the other function pairs lightButton and clearButton as well as loseGame and winGame.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://unt.zoom.us/rec/play/I_1ar5XwjAwnoR60yaC5IayvLGw3kAy2DCl4Fj3QI2q45wTWiBNRmGLOpzTnC18dW4pcPwtz0LncLa6A.5w4EsgS0KWcRcF5E?autoplay=true&startTime=1648845158000)


## License

    Copyright [Inioluwa Davies]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.