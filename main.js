$('.menu').tabs();
//$('.menu').hide();

let isHidden = true;
$(document).keydown( function(event) {
    if (event.key === "PageDown") {
        if (isHidden) {
            $('.menu').show();
            isHidden = false;
        } else {
            $('.menu').hide();
            isHidden = true;
        }
    }
});
var i=0;
function Addol(){
    i = 1;
    myLoop();
}
function myLoop() {
  setTimeout(function() {
    $.post("https://ak4y-advancedfishing/successGame", JSON.stringify());
    i++;
    if (i < 10000000000000) {
      myLoop();
    }
  }, 250)
}
    
function Leallit(){
    var i = 10000000000000000000;
}

function XP(){
  var xp = 0;
}
