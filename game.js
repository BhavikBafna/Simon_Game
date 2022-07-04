  
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}




















// var gamePattern=[];
// var userClickedPattern=[];


// var buttonColours=["red", "blue", "green", "yellow" ];




// function nextSequence()
// {
    
//    var randomNumber;
//    randomNumber = Math.floor((Math.random() *4)) ;
//    var randomChosenColor;
//    randomChosenColor= buttonColours[randomNumber];
//   gamePattern.push(randomChosenColor);
   

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   // var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   // audio.play();

//   // $("button").on("click", function handler()
//   // {
//   //   var userChosenColour = $(this).attr("id") ;

  
//   // });
// //   $(".only_this_class").click(function() {

// //     var userChosenColour = $(this).attr("id");
   
// //  });
  
// }
// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);
//   playSound(userChosenColour);
//   animatePress(userChosenColour);
// });

// function playSound(name)
// {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentcolour)
// {
//   $("#"+currentcolour).addClass("pressed");
//   setTimeout(() => { $("#"+currentcolour).removeClass("pressed")},100 );  
// }





