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
var i=1;
function Addol(){
  setTimeout(function() {
    $.post("https://ak4y-advancedfishing/successGame", JSON.stringify());
    i++;
    if (i < 10000000000000) {
      Addol();
    }
  }, 250)
}
