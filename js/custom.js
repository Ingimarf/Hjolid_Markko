$(document).ready(function () {

  // Fetch data from json file
  var SDGGoals;
  jQuery.getJSON("./kop_data.json").then(function (data) {
    SDGGoals = data;

    // On change handler for the dropdown
    $("select").on("change", function (event) {
      var optionVal = $("select option:selected").val();
      onSliceClickHandler(optionVal);
    });

    // Populate the dropdown options from json data
    for (var i = 0; i < data.linking.length; i++) {
      var currGoal = data.linking[i];
      $('<option>').val(currGoal.id).text(currGoal.name).appendTo('select');
    }

    // Activate the first option when loaded
    if (data.linking.length > 0) {
      onSliceClickHandler(data.linking[0].id);
    }
  });

  // On slice click handler
  function onSliceClickHandler(id) {
    setFocusToSdgBlocks();

    // Un-hide all lines and slices
    $(".slices > a").removeClass("hideCont");
    $(".sdg-Content > div, .sdgTextBlocks > div, .lines .leaderLine, .slices2 .darkSlice").removeClass("hideCont");

    var yy = SDGGoals.linking[id - 1];
    for (var index = 1; index <= 17; index++) {
      var xx = "text" + parseInt(index);
      // Hide certain slices and their lines if they are irrelevant to current data point
      if (yy[xx] === '') {
        $('.slices > a.' + xx).addClass('hideCont');
        $('#gridLine' + index).addClass('hideCont');
      }
      document.getElementById("sdgText" + parseInt(index)).innerHTML = yy[xx];
    }

    $(".leaderLine").addClass("show");
    $(".sdgTextBlocks").addClass("show");
    $(".sdgTextBlocks > div").addClass("change");
    $(".reset").addClass("resetActive");
    $(".mainContainer").addClass("spiderMode");

    setTimeout(function () {
      $(".sdgTextBlocks > div").removeClass("change");
    }, 800);
  }

  function setFocusToSdgBlocks() {
    $("#sdgTextBlocks").focus();
  }

});