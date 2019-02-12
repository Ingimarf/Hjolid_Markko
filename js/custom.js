// Fetch data from data.json
var SDGGoals;
jQuery.getJSON("./data.json").then(function (data) {
  SDGGoals = data;
  // Click on first slice when data has loaded
  onSliceClickHandler(1);
});

// On slice click handler
function onSliceClickHandler(id) {
  setFocusToSdgBlocks();

  var yy = SDGGoals.linking[id - 1];
  for (var index = 1; index <= SDGGoals.linking.length; index++) {
    var xx = "text" + parseInt(index);
    document.getElementById("sdgText" + parseInt(index)).innerHTML = yy[xx];
  }

  $(".slices > a").removeClass("hideCont");
  $(".sdg-Content > div, .sdgTextBlocks > div, .lines .leaderLine, .slices2 .darkSlice").removeClass("hideCont");
  $($(this).data("target")).addClass("hideCont");

  $(".leaderLine").addClass("show");
  $(".sdgTextBlocks").addClass("show");
  $(".sdgTextBlocks > div").addClass("change");
  $(".reset").addClass("resetActive");
  $(".mainContainer").addClass("spiderMode");

  setTimeout(function () {
    $(".sdgTextBlocks > div").removeClass("change");
  }, 800);
}

// Set click handlers and more when document is ready
$(document).ready(function () {

  //Circle-1
  $("#slice1").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle1").addClass("showPermanant");
    $("#circle1").removeClass("inrCircHide");
    $("#circle1")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice1").mouseover(function () {
    $("#circle1").addClass("show");
  });

  $("#slice1").mouseout(function () {
    $("#circle1").removeClass("show");
  });

  //Circle-2

  $("#slice2").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle2").toggleClass("showPermanant");
    $("#circle2").removeClass("inrCircHide");
    $("#circle2")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice2").mouseover(function () {
    $("#circle2").addClass("show");
  });

  $("#slice2").mouseout(function () {
    $("#circle2").removeClass("show");
  });

  //Circle-3

  $("#slice3").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle3").toggleClass("showPermanant");
    $("#circle3").removeClass("inrCircHide");
    $("#circle3")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice3").mouseover(function () {
    $("#circle3").addClass("show");
  });

  $("#slice3").mouseout(function () {
    $("#circle3").removeClass("show");
  });

  $("#slice4").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle4").toggleClass("showPermanant");
    $("#circle4").removeClass("inrCircHide");
    $("#circle4")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice4").mouseover(function () {
    $("#circle4").addClass("show");
  });

  $("#slice4").mouseout(function () {
    $("#circle4").removeClass("show");
  });

  $("#slice5").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle5").toggleClass("showPermanant");
    $("#circle5").removeClass("inrCircHide");
    $("#circle5")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice5").mouseover(function () {
    $("#circle5").addClass("show");
  });

  $("#slice5").mouseout(function () {
    $("#circle5").removeClass("show");
  });

  $("#slice6").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle6").toggleClass("showPermanant");
    $("#circle6").removeClass("inrCircHide");
    $("#circle6")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice6").mouseover(function () {
    $("#circle6").addClass("show");
  });

  $("#slice6").mouseout(function () {
    $("#circle6").removeClass("show");
  });

  $("#slice7").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle7").toggleClass("showPermanant");
    $("#circle7").removeClass("inrCircHide");
    $("#circle7")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice7").mouseover(function () {
    $("#circle7").addClass("show");
  });

  $("#slice7").mouseout(function () {
    $("#circle7").removeClass("show");
  });

  $("#slice8").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle8").toggleClass("showPermanant");
    $("#circle8").removeClass("inrCircHide");
    $("#circle8")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice8").mouseover(function () {
    $("#circle8").addClass("show");
  });

  $("#slice8").mouseout(function () {
    $("#circle8").removeClass("show");
  });

  $("#slice9").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle9").toggleClass("showPermanant");
    $("#circle9").removeClass("inrCircHide");
    $("#circle9")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice9").mouseover(function () {
    $("#circle9").addClass("show");
  });

  $("#slice9").mouseout(function () {
    $("#circle9").removeClass("show");
  });

  $("#slice10").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle10").toggleClass("showPermanant");
    $("#circle10").removeClass("inrCircHide");
    $("#circle10")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice10").mouseover(function () {
    $("#circle10").addClass("show");
  });

  $("#slice10").mouseout(function () {
    $("#circle10").removeClass("show");
  });

  $("#slice11").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle11").toggleClass("showPermanant");
    $("#circle11").removeClass("inrCircHide");
    $("#circle11")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice11").mouseover(function () {
    $("#circle11").addClass("show");
  });

  $("#slice11").mouseout(function () {
    $("#circle11").removeClass("show");
  });

  $("#slice12").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle12").toggleClass("showPermanant");
    $("#circle12").removeClass("inrCircHide");
    $("#circle12")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice12").mouseover(function () {
    $("#circle12").addClass("show");
  });

  $("#slice12").mouseout(function () {
    $("#circle12").removeClass("show");
  });

  $("#slice13").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle13").toggleClass("showPermanant");
    $("#circle13").removeClass("inrCircHide");
    $("#circle13")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice13").mouseover(function () {
    $("#circle13").addClass("show");
  });

  $("#slice13").mouseout(function () {
    $("#circle13").removeClass("show");
  });

  $("#slice14").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle14").toggleClass("showPermanant");
    $("#circle14").removeClass("inrCircHide");
    $("#circle14")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice14").mouseover(function () {
    $("#circle14").addClass("show");
  });

  $("#slice14").mouseout(function () {
    $("#circle14").removeClass("show");
  });

  $("#slice15").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle15").toggleClass("showPermanant");
    $("#circle15").removeClass("inrCircHide");
    $("#circle15")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice15").mouseover(function () {
    $("#circle15").addClass("show");
  });

  $("#slice15").mouseout(function () {
    $("#circle15").removeClass("show");
  });

  $("#slice16").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle16").toggleClass("showPermanant");
    $("#circle16").removeClass("inrCircHide");
    $("#circle16")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice16").mouseover(function () {
    $("#circle16").addClass("show");
  });

  $("#slice16").mouseout(function () {
    $("#circle16").removeClass("show");
  });

  $("#slice17").click(function () {
    $(".cirPlc").removeClass("showPermanant");
    $("#circle17").toggleClass("showPermanant");
    $("#circle17").removeClass("inrCircHide");
    $("#circle17")
      .siblings()
      .addClass("inrCircHide");
  });
  $("#slice17").mouseover(function () {
    $("#circle17").addClass("show");
  });

  $("#slice17").mouseout(function () {
    $("#circle17").removeClass("show");
  });
});

function setFocusToSdgBlocks() {
  $("#sdgTextBlocks").focus();
}