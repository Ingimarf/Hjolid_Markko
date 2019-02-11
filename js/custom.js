// Fetch data from data.json
var SDGGoals;
jQuery.getJSON("./data.json").then(data => {
  SDGGoals = data;
});
// Set click handlers and more when document is ready
$(document).ready(function () {
  $(".slices > a").click(function () {
    $(".leaderLine").addClass("show");
    $(".sdgTextBlocks").addClass("show");
    $(".sdgTextBlocks > div").addClass("change");
    $(".reset").addClass("resetActive");
    $(".mainContainer").addClass("spiderMode");

    setTimeout(function () {
      $(".sdgTextBlocks > div").removeClass("change");
    }, 800);
  });

  $(".slices > a.sliceActive").click(function () {
    alert();
  });

  $(".slices > a").click(function (event) {
    var first = $(event.target)
      .closest("a")
      .attr("class")
      .split(" ")[0];
    var Bodyfirst = $(event.target)
      .closest("body")
      .attr("class");
    $("body").removeClass(Bodyfirst);
    $("body").addClass(first);
  });

  $(".reset > a").on("click", function () {
    $(".slices > a").removeClass("hideCont");
    $(".leaderLine").removeClass("show");
    $(".sdgTextBlocks").removeClass("show");
    $(".slices > a").removeClass("sliceSmall");
    $(".sliceActive").removeClass("sliceActive");
    $(".sdg-Content > div").removeClass("hideCont");
    $(".slices2 .darkSlice").removeClass("dSliceTrans");
    $(".slices2 .darkSlice").removeClass("hideCont");
    $(".cirPlc").removeClass("showPermanant");
    $(".reset").removeClass("resetActive");
    $("body").removeClass();
    $(".mainContainer").removeClass("spiderMode");
    $(".circle > .cirPlc").removeClass("inrCircHide");
  });

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

  $(".footerLeft > a.share").click(function () {
    $(".footerLeft > .sharePage").toggleClass("active");

    if ($(".footerLeft > .sharePage").hasClass("active")) {
      $(this).attr("aria-expanded", "true");
    } else {
      $(this).attr("aria-expanded", "false");
    }
  });
});

//$(document).ready()
function setFocusToSdgBlocks() {
  $("#sdgTextBlocks").focus();
  console.log("triggered");
}

function bindSDGValue(el) {
  setFocusToSdgBlocks();
  var currentId = $(el).attr("id");
  for (var i = 0; i < SDGGoals.linking.length; i++) {
    if (currentId === "slice" + SDGGoals.linking[i].id) {
      var yy = SDGGoals.linking[i];
      for (var index = 1; index <= SDGGoals.linking.length; index++) {
        var xx = "text" + parseInt(index);
        document.getElementById("sdgText" + parseInt(index)).innerHTML = yy[xx];
        // document.getElementById("sdgText" + parseInt(index)).setAttribute("tabindex", "-1");
      }
      var isEmpty = document.getElementById("sdgText1").innerHTML === "";

      // if(isEmpty)
      // {

      //     document.getElementById("sdgText2").focus();
      // } else {
      //     document.getElementById("sdgText1").focus();
      // }
    }
  }
}