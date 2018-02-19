$(document).ready(function() {

  var totalScore = 0;
  

  var targetNumber = Math.floor(Math.random() * 120) + 12;
  $("#targetNumber").html(targetNumber);

  var ruby = Math.floor(Math.random() * 10) + 1;
  console.log(ruby);
  var diamond = Math.floor(Math.random() * 10) + 1;
  console.log(diamond);
  var emerald = Math.floor(Math.random() * 10) + 1;
  console.log(emerald);
  var bloodstone = Math.floor(Math.random() * 10) + 1;
  console.log(bloodstone);

  $("#ruby").click(function() {
    totalScore = totalScore + ruby;
    console.log("totalScore");
    $("#totalScore").html(totalScore + ruby);
  });

  $("#diamond").click(function() {
    totalScore = totalScore + diamond;
    console.log("totalScore");
    $("#totalScore").html(totalScore + diamond);
  });

  $("#emerald").click(function() {
    totalScore = totalScore + emerald;
    console.log("totalScore");
    $("#totalScore").html(totalScore + emerald);
  });

  $("#bloodstone").click(function() {
    totalScore = totalScore + bloodstone;
    console.log("totalScore");
    $("#totalScore").html(totalScore + bloodstone);
  });
});

$(document).ready(function() {

    var totalScore = 0;
    console.log(totalScore);
    $("#totalScore").html(totalScore);
  
    var ruby = Math.floor(Math.random() * 10) + 1;
    console.log(ruby);
    var diamond = Math.floor(Math.random() * 10) + 1;
    console.log(diamond);
    var emerald = Math.floor(Math.random() * 10) + 1;
    console.log(emerald);
    var bloodstone = Math.floor(Math.random() * 10) + 1;
    console.log(bloodstone);
  
    var wins = 0;
    $("#wins").html(wins)
    var losses = 0;
    $("#losses").html(losses)
    
    $("#ruby").click(function() {
      totalScore = totalScore + ruby;
      console.log("totalScore");
      $("#totalScore").html(totalScore + ruby);
    });
  
    $("#diamond").click(function() {
      totalScore = totalScore + diamond;
      console.log("totalScore");
      $("#totalScore").html(totalScore + diamond);
    });
  
    $("#emerald").click(function() {
      totalScore = totalScore + emerald;
      console.log("totalScore");
      $("#totalScore").html(totalScore + emerald);
    });
  
    $("#bloodstone").click(function() {
      totalScore = totalScore + bloodstone;
      console.log("totalScore");
      $("#totalScore").html(totalScore + bloodstone);
    });

    if (totalScore < targetNumber); {
		$("#totalScore").html(totalScore);
		return(totalScore);
	}
	if (totalScore > targetNumber); {
		$("#totalScore").html(totalScore);
		alert("you have exceeded the target number - Try again.");
		losses++;
		$("#losses").html(losses);
		start();
    }
	if (totalScore = targetNumber); {
		$("#totalScore").html(totalScore);
		wins++;
		$("#wins").html(wins);
        alert("Nailed it!");
    }})