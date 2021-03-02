
//array of colours
var buttonColours=["red","blue","green","yellow"];
//empty arrray to store the colours
var gamePattern= [];

var userClickedPattern=[];
var started=false;

var level=0;



$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level"+level);
    nextSequence();
    started = true;
  }
});


$(".btn").click(function(){

var userChosenColour=$(this).attr("id");

userClickedPattern.push(userChosenColour);

animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);

})

//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {
      $("body").addClass("game-over");

      setTimeout(function(){
      $("body").removeClass("game-over");
    },200)

      $("#level-title").text("Game Over,Press any key to restart");

      startOver();
      console.log("wrong");

    }

}

function nextSequence() {

  userClickedPattern = [];
//select number between 0-3 randomly
level++;

//5. Inside nextSequence(), update the h1 with this change in the value of level.
$("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
//select a random colour based on the randon number generated.
var randomChosenColour= buttonColours[randomNumber];
//insert to empty array
gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
audio.play();



}

function animatePress(currentColour) {

$("#"+currentColour).addClass("pressed");

setTimeout(function(){
$("#"+currentColour).removeClass("pressed");
},100)

}

function startOver(){
level=0;
gamePattern=[];
started=false;
}
