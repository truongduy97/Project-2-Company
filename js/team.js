var numHtml = 0;
var numCss = 0;
var numJavascript = 0;
var numPhoto = 0;

window.addEventListener("scroll", function(e) {
  var scrollY = document.documentElement.scrollTop;

  if ((scrollY >= 2350 && scrollY <= 3150) || scrollY >= 3800) {
    $("#skill .html").addClass("animation-html");
    $("#skill .css").addClass("animation-css");
    $("#skill .javascript").addClass("animation-javascript");
    $("#skill .photoshop").addClass("animation-photoshop");
    htmlSkill();
    cssSkill();
    jsSkill();
    photoSkill();
  } else {
    $("#skill .html").removeClass("animation-html");
    $("#skill .css").removeClass("animation-css");
    $("#skill .javascript").removeClass("animation-javascript");
    $("#skill .photoshop").removeClass("animation-photoshop");
  }
});

function htmlSkill() {
  let htmlNumber = setTimeout(function() {
    if (numHtml <= 98) {
      numHtml = numHtml + 1;
      $("#skill .html-number").text(parseInt(htmlNumber / 4) + "%");
      htmlSkill();
    }
  }, 200);
}
function cssSkill() {
  let htmlNumber = setTimeout(function() {
    if (numCss <= 75) {
      numCss = numCss + 1;
      $("#skill .css-number").text(parseInt(htmlNumber / 4) + "%");
      cssSkill();
    }
  }, 200);
}
function jsSkill() {
  let htmlNumber = setTimeout(function() {
    if (numJavascript <= 90) {
      numJavascript = numJavascript + 1;
      $("#skill .javascript-number").text(parseInt(htmlNumber / 4) + "%");
      jsSkill();
    }
  }, 200);
}
function photoSkill() {
  let htmlNumber = setTimeout(function() {
    if (numPhoto <= 70) {
      numPhoto = numPhoto + 1;
      $("#skill .photo-number").text(parseInt(htmlNumber / 4) + "%");
      photoSkill();
    }
  }, 200);
}
