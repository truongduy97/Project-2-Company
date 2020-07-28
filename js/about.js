var numHappy = 0;
var numProject = 0;
var numAwards = 0;
var numCups = 0;
window.addEventListener("scroll", function(e) {
  var scrollY = document.documentElement.scrollTop;

  console.log(scrollY);
  if (scrollY >= 2200 && scrollY <= 2500) {
    happy();
    project();
    awards();
    cups();
  }
});

function happy() {
  let htmlNumber = setTimeout(function() {
    if (numHappy <= 220) {
      numHappy = numHappy + 1;
      $("#about-auto-number .number-happy").text(htmlNumber + 1950);
      happy();
    }
  }, 100);
}
function project() {
  let htmlNumber = setTimeout(function() {
    if (numProject <= 220) {
      numProject = numProject + 1;
      $("#about-auto-number .number-project").text(htmlNumber + 360);
      project();
    }
  }, 100);
}
function awards() {
  let htmlNumber = setTimeout(function() {
    if (numAwards <= 120) {
      numAwards = numAwards + 1;
      $("#about-auto-number .number-awards").text(htmlNumber);
      awards();
    }
  }, 100);
}
function cups() {
  let htmlNumber = setTimeout(function() {
    if (numCups <= 220) {
      numCups = numCups + 1;
      $("#about-auto-number .number-cups").text(htmlNumber + 2500);
      cups();
    }
  }, 100);
}
