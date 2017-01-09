// var game = {
//   currentSequence: 0,
//   sequences: [sequence1, sequence2, sequence3],
//   isGameOver: false,
var p1Points = 0;
var p2Points = 0;
var gameState = false; //to stop key inputs by setting false at the start and only true after sequence is played out



$(".startbutton").click(function() {
  sequence1Display();
  $(".sequencenumber").css("background-color", "yellow");
  p1Index = 0;
  p2Index = 0;
  turn = 0;
  turn1 = turn +1;
  $(".startbutton").text("Restart");
  $(".sequencenumber").text("Game" + " " + turn1);
});

$(".sequencenumber").click(function() {
  gameState = false;
  sequenceDisplay[turn]();
});

function arrowReset() {
  $(".uparrow").css({
    "margin": "0% 0% 0% 35%",
    "visibility": "hidden"
  });
  $(".rightarrow").css({
    "margin": "35% 0% 0% 70%",
    "visibility": "hidden"
  });
  $(".downarrow").css({
    "margin": "70% 0% 0% 35%",
    "visibility": "hidden"
  });
  $(".leftarrow").css({
    "margin": "35% 0% 0% 0%",
    "visibility": "hidden"
  });
}
function sequence1Display() {
  $(".uparrow").css("visibility", "visible");
  setTimeout('$(".uparrow").css("visibility", "hidden")', 500);
  setTimeout('$(".downarrow").css("visibility", "visible")',1000);
  setTimeout('$(".downarrow").css("visibility", "hidden")', 1500);
  setTimeout('$(".leftarrow").css("visibility", "visible")',2000);
  setTimeout('$(".leftarrow").css("visibility", "hidden")',2500);
  setTimeout('$(".rightarrow").css("visibility", "visible")',3000);
  setTimeout('$(".rightarrow").css("visibility", "hidden")',3500);
  setTimeout(function () {
    $(".sequencenumber").css("background-color", "green");
    gameState = true;
    arrowReset();
  },3600);
}

function sequence2Display() {
  $(".downarrow").css("visibility", "visible");
  setTimeout('$(".downarrow").css("visibility", "hidden")', 500);
  setTimeout('$(".uparrow").css("visibility", "visible")',1000);
  setTimeout('$(".uparrow").css("visibility", "hidden")', 1500);
  setTimeout('$(".rightarrow").css("visibility", "visible")',2000);
  setTimeout('$(".rightarrow").css("visibility", "hidden")',2500);
  setTimeout('$(".leftarrow").css("visibility", "visible")',3000);
  setTimeout('$(".leftarrow").css("visibility", "hidden")',3500);
  setTimeout('$(".downarrow").css("visibility", "visible")', 4000);
  setTimeout('$(".downarrow").css("visibility", "hidden")', 4500);
  setTimeout(function () {
    $(".sequencenumber").css("background-color", "green");
    gameState = true;
    arrowReset();
  },4600);
}

//up position margin: 0% 0% 0% 35%; right position margin: 35% 0% 0% 70%;
//bottom position margin: 70% 0% 0% 35%; left position margin: 35% 0% 0% 0%;

function sequence3Display() {
  $(".uparrow").css({
    "margin": "70% 0% 0% 35%",
    "visibility": "visible"
  });
  setTimeout('$(".uparrow").css("visibility", "hidden")', 500);
  setTimeout('$(".downarrow").css("visibility", "visible")',1000);
  setTimeout('$(".downarrow").css("visibility", "hidden")', 1500);
  setTimeout('$(".rightarrow").css("margin", "35% 0% 0% 0%")',1900)
  setTimeout('$(".rightarrow").css("visibility", "visible")',2000);
  setTimeout('$(".rightarrow").css("visibility", "hidden")',2500);
  setTimeout('$(".leftarrow").css("visibility", "visible")',3000);
  setTimeout('$(".leftarrow").css("visibility", "hidden")',3500);
  setTimeout('$(".uparrow").css("visibility", "visible")', 4000);
  setTimeout('$(".uparrow").css("visibility", "hidden")', 4500);
  setTimeout('$(".downarrow").css("margin", "0% 0% 0% 35%")',4900)
  setTimeout('$(".downarrow").css("visibility", "visible")',5000);
  setTimeout('$(".downarrow").css("visibility", "hidden")', 5500);
  setTimeout(function () {
    $(".sequencenumber").css("background-color", "green");
    gameState = true;
    arrowReset();
  },5600);
}

function gameReset() {
  p1Index = 0;
  p2Index = 0;
  turn = 0;
  turn1 = turn +1;
  gameState = false;
  p1Points = 0;
  p2Points = 0;
  $(".startbutton").text("Start!");
  $(".sequencenumber").text("Game 0");
  $(".sequencenumber").css("background-color", "yellow");
  $(".p2score").text(p2Points);
  $(".p1score").text(p1Points);
  $(".p2_win_pic").css("visibility", "hidden");
  $(".p1_lose_pic").css("visibility", "hidden");
  $(".p1_win_pic").css("visibility", "hidden");
  $(".p2_lose_pic").css("visibility", "hidden");
}
function whoWon() {
  if (turn === 3) {
    if (p1Points > p2Points) {
      // alert ("Player 1 Wins!");
      setTimeout(function() {
        $(".winscreen").css("visibility", "visible");
        },500);
        setTimeout(function() {
        $(".winscreen").css("visibility", "hidden");
        },4000);
      gameReset();
    } else if (p2Points > p1Points) {
      // alert ("Player 2 Wins!");
      setTimeout(function() {
        $(".winscreen2").css("visibility", "visible");
        },500);
        setTimeout(function() {
        $(".winscreen2").css("visibility", "hidden");
        },4000);
      gameReset();
    } else if (p1Points === p2Points) {
      alert ("You both win!")
      gameReset();
    }
  }
}
//p1 keycodes = W - 87, S - 83, A - 65, D - 68
//p2 keycodes = Up - 38, Down - 40, Left - 37, Right - 39
var sequence1P2Answer = [38, 40, 37, 39];
var sequence1P1Answer = [87, 83, 65, 68];
var sequence1 = [sequence1P1Answer, sequence1P2Answer]

var sequence2P2Answer = [40, 38, 39, 37, 40];
var sequence2P1Answer = [83, 87, 68, 65, 83];
var sequence2 = [sequence2P1Answer, sequence2P2Answer]

var sequence3P2Answer = [38, 40, 39, 37, 38, 40];
var sequence3P1Answer = [87, 83, 68, 65, 87, 83];
var sequence3 = [sequence3P1Answer, sequence3P2Answer]

var sequenceArray = [sequence1, sequence2, sequence3]
var sequenceDisplay = [sequence1Display, sequence2Display, sequence3Display]
var p1Index = 0;
var p2Index = 0;
var turn = 0;
var turn1 = turn + 1; //for registering game number since turn starts at 0
$(document).keyup(checkKeyStroke);

function checkKeyStroke(e) {
  if (gameState === true) {
    if (e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 37 || e.keyCode === 39) {
      // if (sequenceArray[0] === sequence1) {
      if (sequenceArray[turn][1][p2Index] === e.keyCode) { //calling an array which has an array itself
        p2Index++;
        // console.log("this is p2Index's value" + " " + p2Index)
        if (p2Index === sequenceArray[turn][1].length) {
          p2Points++;
          turn++;
          turn1++;
          p2Index = 0;
          gameState = false;
          // console.log("P1 wins!" + p2Points);
          $(".p2_win_pic").css("visibility", "visible");
          $(".p1_lose_pic").css("visibility", "visible");
          $(".sequencenumber").css("background-color", "grey");
          $(".p2score").text(p2Points);
          setTimeout(function () {
            sequenceDisplay[turn]();
            $(".p2_win_pic").css("visibility", "hidden");
            $(".p1_lose_pic").css("visibility", "hidden");
            $(".sequencenumber").text("Game" + " " + turn1);
            $(".sequencenumber").css("background-color", "yellow");
          },3000);
          setTimeout(function () {
            whoWon();
          },3200);
        }
      }
      else {
        p2Index = 0;
        $(".p2wrongsequence").css("visibility", "visible");
        setTimeout(function () {
          $(".p2wrongsequence").css("visibility", "hidden");
        },1000)
        console.log("this is p1Index's value when its wrong sequence" + " " + p2Index)
      }
    }
    //checking of p2 control
    else if (e.keyCode === 87 || e.keyCode === 83 || e.keyCode === 65 || e.keyCode === 68) {
      if (sequenceArray[turn][0][p1Index] === e.keyCode) {
        p1Index++;
        // console.log("this is p1Index's value" + " " + p1Index)
        if (p1Index === sequenceArray[turn][0].length) {
          p1Points++;
          turn++;
          turn1++;
          p1Index = 0;
          gameState = false;
          $(".p1_win_pic").css("visibility", "visible");
          $(".p2_lose_pic").css("visibility", "visible");
          // console.log("P1 wins!" + p1Points);
          $(".sequence1note").css("background-color", "grey");
          $(".p1score").text(p1Points);
          setTimeout(function () {
            sequenceDisplay[turn]();
            $(".p1_win_pic").css("visibility", "hidden");
            $(".p2_lose_pic").css("visibility", "hidden");
            $(".sequencenumber").text("Game" + " " + turn1);
            $(".sequencenumber").css("background-color", "yellow");
          },3000);
          setTimeout(function () {
            whoWon();
          },3200);
        }
      }else {
        p1Index = 0;
        $(".p1wrongsequence").css("visibility", "visible");
        setTimeout(function () {
          $(".p1wrongsequence").css("visibility", "hidden");
        },1000)
        // console.log("Wrong");
      }
    }
  }
  }
