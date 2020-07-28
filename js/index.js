$(".content").isotope({
  itemSelector: "img"
});
$("#filter ul li").click(function(event) {
  var type = $(this).data("type");
  var ten_loai = $(this).text();
  $(".title").text(ten_loai);
  type = "." + type;
  $(".content").isotope({
    filter: type
  });
  $("#filter ul li").removeClass("is-checked");
  $(this).addClass("is-checked");
});

var numGraphic = 0;
var numWeb = 0;
var numBrand = 0;
var numPhoto = 0;

window.addEventListener("scroll", function() {
  var scrollY = document.documentElement.scrollTop;

  console.log(scrollY);
  if (scrollY >= 2400 && scrollY <= 2900) {
    graphic();
    web();
    brand();
    photo();
  }
});

function graphic() {
  let htmlNumber = setTimeout(function() {
    if (numGraphic <= 90) {
      numGraphic = numGraphic + 1;
      $("#chart-container .graphic").text(parseInt(htmlNumber / 4) + "%");
      graphic();
    }
  }, 200);
}
function web() {
  let htmlNumber = setTimeout(function() {
    if (numWeb <= 75) {
      numWeb = numWeb + 1;
      $("#chart-container .web").text(parseInt(htmlNumber / 4) + "%");
      web();
    }
  }, 200);
}
function brand() {
  let htmlNumber = setTimeout(function() {
    if (numBrand <= 90) {
      numBrand = numBrand + 1;
      $("#chart-container .brand").text(parseInt(htmlNumber / 4) + "%");
      brand();
    }
  }, 200);
}
function photo() {
  let htmlNumber = setTimeout(function() {
    if (numPhoto <= 62) {
      numPhoto = numPhoto + 1;
      $("#chart-container .photo").text(parseInt(htmlNumber / 4) + "%");
      photo();
    }
  }, 200);
}
