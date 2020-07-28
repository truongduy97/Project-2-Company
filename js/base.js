$(function() {
  $(".chart").easyPieChart({
    size: 150,
    barColor: "#6f6f6f",
    scaleColor: false,
    lineWidth: 5,
    trackColor: "",
    lineCap: "circle"
  });
});
new WOW().init();

window.addEventListener("scroll", function(e) {
  var scrollY = document.documentElement.scrollTop;

  var goUp = document.getElementsByClassName("go-up")[0];
  // var nav = document.getElementsByTagName("nav")[0];

  // console.log(scrollY);
  if (scrollY <= 100) {
    // nav.style.backgroundColor = "none";
    $("nav").removeClass("bg-nav-dark");
  } else {
    $("nav").addClass("bg-nav-dark");
  }

  if (scrollY >= 500) {
    goUp.style.display = "block";
  } else {
    goUp.style.display = "none";
  }
});

$(".search-overlay .search-close").click(function(e) {
  $(".search-overlay").hide();
});

$("nav .search-button").click(function(e) {
  $(".search-overlay").show();
});
