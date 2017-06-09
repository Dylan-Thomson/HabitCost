$('form').submit(function () {
 var spent = $('#inputSpent').val();
 var times = $('#inputTimes').val();
 var freq = $('#inputFrequency').val();
 // var durationNum = $('#inputDurationNum').val();
 // var duration = $('#inputDuration').val();
	
 var freqMultiplier;
 if(freq === "daily") freqMultiplier = 365.25;
 else if(freq === "weekly") freqMultiplier = 56;
 else if(freq === "monthly") freqMultiplier = 12;
 else if(freq === "yearly") freqMultiplier = 1;

 var total = spent * times * freqMultiplier;

 	$('#outputSpent').text(total);
 	$('#output').removeClass("hidden");
 return false;
});