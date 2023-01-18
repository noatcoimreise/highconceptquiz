var prompts = [
    {
        prompt: '<img src="images/alpha.png" title="Alpha" /><br />7s',
        a: ['a_ne', 'left', '3_nw', 'left']
    },
        {
        prompt: '<img src="images/beta.png" title="Beta" /><br />7s',
        a: ['b_se', 'left', '3_nw', 'left']
    },
    {
        prompt: '<img src="images/gamma.png" title="Gamma" /><br />7s',
        a: ['c_sw', 'left', '3_nw', 'left']
    },
    {
        prompt: '<img src="images/alpha.png" title="Alpha" /><br />7s',
        a: ['a_ne', 'middle', 'concept1', '3_nw', 'left']
    },
        {
        prompt: '<img src="images/beta.png" title="Beta" /><br />7s',
        a: ['b_se', 'middle', 'concept1', '3_nw', 'left']
    },
    {
        prompt: '<img src="images/gamma.png" title="Gamma" /><br />7s',
        a: ['c_sw', 'middle', 'concept1', '3_nw', 'left']
    },
        {
        prompt: '<img src="images/alpha.png" title="Alpha" /><br />26s',
        a: ['2_nw', 'left', 'a_ne', 'left']
    },
        {
        prompt: '<img src="images/beta.png" title="Beta" /><br />26s',
        a: ['3_nw', 'left', 'b_se', 'left']
    },
    {
        prompt: '<img src="images/gamma.png" title="Gamma" /><br />26s',
        a: ['3_nw', 'left', 'c_sw', 'left']
    },
        {
        prompt: '<img src="images/alpha.png" title="Alpha" /><br />26s',
        a: ['2_nw', 'left', 'a_ne', 'concept1', 'concept3a']
    },
        {
        prompt: '<img src="images/beta.png" title="Beta" /><br />26s',
        a: ['3_nw', 'left', 'b_se', 'concept1', 'concept3a']
    },
    {
        prompt: '<img src="images/gamma.png" title="Gamma" /><br />26s',
        a: ['3_nw', 'left', 'c_sw', 'concept1', 'concept3a']
    },
        {
        prompt: '<img src="images/2wayshare.png" title="Slice2" />',
        a: ['2_nw', 'left', 'a_ne', 'concept1', 'concept3a']
    },
    {
        prompt: '<img src="images/3wayshare.png" title="Slice3" />',
        a: ['3_nw', 'left', 'c_sw', 'concept1', 'concept3a']
    },
]

var ANSWERS = ["a_ne", "b_se", "c_sw", "middle", "left", "right", "concept1", "concept2", "concept3a", "concept3b", "concept3c", "concept3d", "3_nw", "2_nw", "finished" ];
var answer = [];
var inputAnswer = [];
var numCorrect = 0; // yeah yeah this naming is confusing
var correct = false;
var lastPrompt = 0;
var timeLimit = 0;
var timeoutEnabled = false;
var timeoutHandle;
var skipDone = false;

let prompt = document.getElementById('prompt');
let next = document.getElementById('next');
let n = Math.floor(Math.random() * prompts.length);
prompt.innerHTML = prompts[n].prompt;
answer = prompts[n].a;

StartNewRound();

function StartNewRound() {
    if(correct == false)
        numCorrect = 0;

    correct = false;
    startTimerIfEnabled();

    let prompt = document.getElementById('prompt');

    prompt.className = '';
    document.getElementById('success').className = 'hidecleave';
    ANSWERS.forEach((a) => {
        let answerButton = document.getElementById(a);

        if (answerButton != null) {
          if (a == 'b_se' || a == 'a_ne' || a == 'c_sw' || a == '2_nw' || a == '3_nw') {
            answerButton.className = 'btn btn-primary btn-markers';
          } else if (a.includes("concept")) {
            answerButton.className = 'btn btn-primary btn-concepts';
          } else {
            answerButton.className = 'btn btn-primary';
          }
        }

    });


    let n = 1 + Math.floor(Math.random() * (prompts.length-1));
    n = (lastPrompt + n) % prompts.length;
    lastPrompt = n;
    prompt.innerHTML = prompts[n].prompt;
    answer = prompts[n].a;
    inputAnswer = [];

    next.innerText = "Skip Question";

    let streak = document.getElementById('streak');
    streak.innerText = `Streak: ${numCorrect}`;
}

var nextButton = document.getElementById('next');
nextButton.onclick = () => {
    StartNewRound();

}

var answerButtons = document.getElementById('answerButtons');
answerButtons.onclick = (e) => {
    if(e.target.id === 'answerButtons') {return;}
    let t = e.target;
    if (e.target.nodeName == "B")
       t = e.target.parentElement;
    let a = t.id;
    let b = a;

    if (b == "middle" && answer[inputAnswer.length + 1] == "concept1") {
      if (document.getElementById('concept1').className.includes("water")) {
        document.getElementById('prompt').innerHTML = '<img src="images/waterConceptTransparent.png" style="height: 100px; width: 100px;" />';
      } else if (document.getElementById('concept1').className.includes("wind")) {
        document.getElementById('prompt').innerHTML = '<img src="images/wingedConceptionTransparent.png" style="height: 100px; width: 100px;" />';
      } else if (document.getElementById('concept1').className.includes("lightning")) {
        document.getElementById('prompt').innerHTML = '<img src="images/ShockingConceptTransparent.png" style="height: 100px; width: 100px;" />';
      }
    }

    if (b == "concept1" || b == "concept2") {
      b = "concept1";
    } else if (b == "concept3a" || b == "concept3b" || b == "concept3c" || b == "concept3d") {
      b = "concept3a";
    }

    if (b == "concept1" && answer[inputAnswer.length + 1] == "concept3a") {
      if (document.getElementById('concept3a').className.includes("water")) {
        document.getElementById('prompt').innerHTML = '<img src="images/waterConceptTransparent.png" style="height: 100px; width: 100px;" />';
      } else if (document.getElementById('concept3a').className.includes("wind")) {
        document.getElementById('prompt').innerHTML = '<img src="images/wingedConceptionTransparent.png" style="height: 100px; width: 100px;" />';
      } else if (document.getElementById('concept3a').className.includes("lightning")) {
        document.getElementById('prompt').innerHTML = '<img src="images/ShockingConceptTransparent.png" style="height: 100px; width: 100px;" />';
      }
    }

    if (lastPrompt == 12) {
      if (b == "2_nw") {
        var diceRoll = Math.floor(Math.random() * 3);
        if (diceRoll == 2) {
          document.getElementById('concept1').className = 'btn btn-primary btn-concepts btn-water';
          document.getElementById('concept2').className = 'btn btn-primary btn-concepts btn-water';
          answer[inputAnswer.length + 2] = 'a_ne';
        } else if (diceRoll) {
          document.getElementById('concept1').className = 'btn btn-primary btn-concepts btn-wind';
          document.getElementById('concept2').className = 'btn btn-primary btn-concepts btn-wind';
          answer[inputAnswer.length + 2] = 'a_ne';
        } else {
          document.getElementById('concept1').className = 'btn btn-primary btn-concepts btn-lightning';
          document.getElementById('concept2').className = 'btn btn-primary btn-concepts btn-lightning';
          answer[inputAnswer.length + 2] = 'b_se';
        }
      } else if (b == "left" || b == "right") {
        document.getElementById('concept1').className = 'btn btn-primary btn-concepts';
        document.getElementById('concept2').className = 'btn btn-primary btn-concepts';
      }
    }

    if (lastPrompt == 13) {
      if (b == "3_nw") {
        var diceRoll = Math.floor(Math.random() * 3);
        if (diceRoll == 2) {
          document.getElementById('concept1').className = 'btn btn-primary btn-concepts btn-water';
          document.getElementById('concept2').className = 'btn btn-primary btn-concepts btn-water';
          answer[inputAnswer.length + 2] = 'c_sw';
        } else if (diceRoll) {
          document.getElementById('concept1').className = 'btn btn-primary btn-concepts btn-wind';
          document.getElementById('concept2').className = 'btn btn-primary btn-concepts btn-wind';
          answer[inputAnswer.length + 2] = 'b_se';
        } else {
          document.getElementById('concept1').className = 'btn btn-primary btn-concepts btn-lightning';
          document.getElementById('concept2').className = 'btn btn-primary btn-concepts btn-lightning';
          answer[inputAnswer.length + 2] = 'c_sw';
        }
      } else if (b == "left" || b == "right") {
        document.getElementById('concept1').className = 'btn btn-primary btn-concepts';
        document.getElementById('concept2').className = 'btn btn-primary btn-concepts';
      }
    }

    if (b == 'b_se' || b == 'a_ne' || b == 'c_sw') {
      if (lastPrompt == 0) {
        document.getElementById('prompt').innerHTML = '<img src="images/fireWaterWind.png" style="height: 100px; width: 100px;" />';
        document.getElementById('concept1').className = 'btn btn-primary btn-concepts btn-lightning';
        document.getElementById('concept2').className = 'btn btn-primary btn-concepts btn-lightning';
      } else if (lastPrompt == 1) {
        document.getElementById('prompt').innerHTML = '<img src="images/lightningLeafFlask.png" style="height: 100px; width: 100px;" />';
        document.getElementById('concept1').className = 'btn btn-primary btn-concepts btn-water';
        document.getElementById('concept2').className = 'btn btn-primary btn-concepts btn-water';
      } else if (lastPrompt == 2) {
        document.getElementById('prompt').innerHTML = '<img src="images/lightningLeafWater.png" style="height: 100px; width: 100px;" />';
        document.getElementById('concept1').className = 'btn btn-primary btn-concepts btn-wind';
        document.getElementById('concept2').className = 'btn btn-primary btn-concepts btn-wind';
      } else if (lastPrompt == 3) {
        document.getElementById('prompt').innerHTML = '<img src="images/fireWaterWind.png" style="height: 100px; width: 100px;" />';
        if (Math.floor(Math.random() * 2)) {
          document.getElementById('concept1').className = 'btn btn-primary btn-concepts btn-water';
          document.getElementById('concept2').className = 'btn btn-primary btn-concepts btn-water';
        } else {
          document.getElementById('concept1').className = 'btn btn-primary btn-concepts btn-wind';
          document.getElementById('concept2').className = 'btn btn-primary btn-concepts btn-wind';
        }
      } else if (lastPrompt == 4) {
        document.getElementById('prompt').innerHTML = '<img src="images/lightningLeafFlask.png" style="height: 100px; width: 100px;" />';
        if (Math.floor(Math.random() * 2)) {
          document.getElementById('concept1').className = 'btn btn-primary btn-concepts btn-wind';
          document.getElementById('concept2').className = 'btn btn-primary btn-concepts btn-wind';
        } else {
          document.getElementById('concept1').className = 'btn btn-primary btn-concepts btn-lightning';
          document.getElementById('concept2').className = 'btn btn-primary btn-concepts btn-lightning';
        }
      } else if (lastPrompt == 5) {
        document.getElementById('prompt').innerHTML = '<img src="images/lightningLeafWater.png" style="height: 100px; width: 100px;" />';
        if (Math.floor(Math.random() * 2)) {
          document.getElementById('concept1').className = 'btn btn-primary btn-concepts btn-lightning';
          document.getElementById('concept2').className = 'btn btn-primary btn-concepts btn-lightning';
        } else {
          document.getElementById('concept1').className = 'btn btn-primary btn-concepts btn-water';
          document.getElementById('concept2').className = 'btn btn-primary btn-concepts btn-water';
        }
      } else if (lastPrompt == 6) {
        document.getElementById('prompt').innerHTML = '<img src="images/fireWaterWind.png" style="height: 100px; width: 100px;" />';
        document.getElementById('concept3a').className = 'btn btn-primary btn-concepts btn-lightning';
        document.getElementById('concept3b').className = 'btn btn-primary btn-concepts btn-lightning';
        document.getElementById('concept3c').className = 'btn btn-primary btn-concepts btn-lightning';
        document.getElementById('concept3d').className = 'btn btn-primary btn-concepts btn-lightning';
      } else if (lastPrompt == 7) {
        document.getElementById('prompt').innerHTML = '<img src="images/lightningLeafFlask.png" style="height: 100px; width: 100px;" />';
        document.getElementById('concept3a').className = 'btn btn-primary btn-concepts btn-water';
        document.getElementById('concept3b').className = 'btn btn-primary btn-concepts btn-water';
        document.getElementById('concept3c').className = 'btn btn-primary btn-concepts btn-water';
        document.getElementById('concept3d').className = 'btn btn-primary btn-concepts btn-water';
      } else if (lastPrompt == 8) {
        document.getElementById('prompt').innerHTML = '<img src="images/lightningLeafWater.png" style="height: 100px; width: 100px;" />';
        document.getElementById('concept3a').className = 'btn btn-primary btn-concepts btn-wind';
        document.getElementById('concept3b').className = 'btn btn-primary btn-concepts btn-wind';
        document.getElementById('concept3c').className = 'btn btn-primary btn-concepts btn-wind';
        document.getElementById('concept3d').className = 'btn btn-primary btn-concepts btn-wind';
      } else if (lastPrompt == 9 || (lastPrompt == 12 && b == 'a_ne')) {
        document.getElementById('prompt').innerHTML = '<img src="images/fireWaterWind.png" style="height: 100px; width: 100px;" />';
        if (Math.floor(Math.random() * 2)) {
          document.getElementById('concept3a').className = 'btn btn-primary btn-concepts btn-water';
          document.getElementById('concept3b').className = 'btn btn-primary btn-concepts btn-water';
          document.getElementById('concept3c').className = 'btn btn-primary btn-concepts btn-water';
          document.getElementById('concept3d').className = 'btn btn-primary btn-concepts btn-water';
        } else {
          document.getElementById('concept3a').className = 'btn btn-primary btn-concepts btn-wind';
          document.getElementById('concept3b').className = 'btn btn-primary btn-concepts btn-wind';
          document.getElementById('concept3c').className = 'btn btn-primary btn-concepts btn-wind';
          document.getElementById('concept3d').className = 'btn btn-primary btn-concepts btn-wind';
        }
      } else if (lastPrompt == 10 || (lastPrompt == 12 && b == 'b_se') || (lastPrompt == 13 && b == 'b_se')) {
        document.getElementById('prompt').innerHTML = '<img src="images/lightningLeafFlask.png" style="height: 100px; width: 100px;" />';
        if (Math.floor(Math.random() * 2)) {
          document.getElementById('concept3a').className = 'btn btn-primary btn-concepts btn-wind';
          document.getElementById('concept3b').className = 'btn btn-primary btn-concepts btn-wind';
          document.getElementById('concept3c').className = 'btn btn-primary btn-concepts btn-wind';
          document.getElementById('concept3d').className = 'btn btn-primary btn-concepts btn-wind';
        } else {
          document.getElementById('concept3a').className = 'btn btn-primary btn-concepts btn-lightning';
          document.getElementById('concept3b').className = 'btn btn-primary btn-concepts btn-lightning';
          document.getElementById('concept3c').className = 'btn btn-primary btn-concepts btn-lightning';
          document.getElementById('concept3d').className = 'btn btn-primary btn-concepts btn-lightning';
        }
      } else if (lastPrompt == 11 || (lastPrompt == 13 && b == 'c_sw')) {
        document.getElementById('prompt').innerHTML = '<img src="images/lightningLeafWater.png" style="height: 100px; width: 100px;" />';
        if (Math.floor(Math.random() * 2)) {
          document.getElementById('concept3a').className = 'btn btn-primary btn-concepts btn-lightning';
          document.getElementById('concept3b').className = 'btn btn-primary btn-concepts btn-lightning';
          document.getElementById('concept3c').className = 'btn btn-primary btn-concepts btn-lightning';
          document.getElementById('concept3d').className = 'btn btn-primary btn-concepts btn-lightning';
        } else {
          document.getElementById('concept3a').className = 'btn btn-primary btn-concepts btn-water';
          document.getElementById('concept3b').className = 'btn btn-primary btn-concepts btn-water';
          document.getElementById('concept3c').className = 'btn btn-primary btn-concepts btn-water';
          document.getElementById('concept3d').className = 'btn btn-primary btn-concepts btn-water';
        }
      }
    }

    if (answer[inputAnswer.length + 1] == 'left' || answer[inputAnswer.length + 1] == 'right') {
      if (Math.floor(Math.random() * 2)) {
        answer[inputAnswer.length + 1] = 'left';
        document.getElementById('eastside').className = 'showcleave';
      } else {
        answer[inputAnswer.length + 1] = 'right';
        document.getElementById('westside').className = 'showcleave';
      }
    } else if (answer[inputAnswer.length + 1] == 'concept1') {
       if (Math.floor(Math.random() * 2)) {
        document.getElementById('eastside').className = 'showcleave';
      } else {
        document.getElementById('westside').className = 'showcleave';
      }
    } else if (answer[inputAnswer.length + 1] != 'concept3a') {
      document.getElementById('westside').className = 'hidecleave';
      document.getElementById('eastside').className = 'hidecleave';
    }

    if(b === answer[inputAnswer.length]) {
        if (a == 'b_se' || a == 'a_ne' || a == 'c_sw' || a == '2_nw' || a == '3_nw') {
          document.getElementById(a).className = 'btn btn-success btn-markers';
        } else if (a.includes("concept")) {
          document.getElementById(a).className = 'btn btn-concepts';
        } else {
          document.getElementById(a).className = 'btn btn-success';
        }
        inputAnswer.push(b);

        ANSWERS.forEach((x) => {
            let answerButton = document.getElementById(x);
            if (x == 'b_se' || x == 'a_ne' || x == 'c_sw' || x == '2_nw' || x == '3_nw') {
              x.className = 'btn btn-primary btn-markers';

              if (x != a && x != b && document.getElementById(x).className.includes("success")) {
                document.getElementById(x).className = 'btn btn-primary btn-markers';
              }
            } else if (x.includes("concept")) {
              x.className = 'btn btn-primary btn-concepts';

              if (x != a && x != b && document.getElementById(x).className.includes("success")) {
                document.getElementById(x).className = 'btn btn-primary btn-concepts';
              }
            } else {
              x.className = 'btn btn-primary';

              if (x != a && x != b && document.getElementById(x).className.includes("success")) {
                document.getElementById(x).className = 'btn btn-primary';
              }
            }
        });

        let skip = 0;
        if(skipDone)
            skip = 1;

        if(inputAnswer.length >= answer.length - skip) {
            let prompt = document.getElementById('prompt');
            prompt.className = 'bg-success promptsuccess';
            document.getElementById('success').className = 'showcleave';
            next.innerText = "Next!";

            if(inputAnswer.length == answer.length - skip)
                numCorrect+=1
            correct = true;
        }
    } else {
        t.className = t.className + ' btn-fail';
        numCorrect = 0;
        document.getElementById('westside').className = 'hidecleave';
        document.getElementById('eastside').className = 'hidecleave';
    }
    let streak = document.getElementById('streak');
    streak.innerText = `Streak: ${numCorrect}`;
}

function toggleDone()
{
    skipDone = !skipDone;
}

function timerEnableToggled(checkbox)
{
    if(checkbox.checked == true) {
        document.getElementById("timeLimitInput").removeAttribute("disabled");
        timeoutEnabled = true;
        startTimerIfEnabled();
    } else {
        document.getElementById("timeLimitInput").setAttribute("disabled", "disabled");
        timeoutEnabled = false;
        resetTimer();
   }
}


function timerEnableToggled(checkbox)
{
    if(checkbox.checked == true) {
        document.getElementById("timeLimitInput").removeAttribute("disabled");
        timeoutEnabled = true;
        startTimerIfEnabled();
    } else {
        document.getElementById("timeLimitInput").setAttribute("disabled", "disabled");
        timeoutEnabled = false;
        resetTimer();
   }
}

function startTimerIfEnabled() {
    // Reset timer so that users don't fail twice
    resetTimer();

    if (timeoutEnabled) {
        timeLimit = parseInt(document.getElementById('timeLimitInput').value);
        timeoutHandle = setTimeout(failure, timeLimit * 1000);
    }
}

function resetTimer() {
    if (timeoutHandle != null) {
        clearTimeout(timeoutHandle);
        timeoutHandle = null;
    }
}

function failure() {
    if (correct === false) {
        numCorrect = 0;
        let streak = document.getElementById('streak');
        streak.innerText = `Streak: ${numCorrect}`;
    
        alert("Time out - You died");
    }
}