$('form').submit(function () {
 var spent = $('#inputSpent').val();
 var times = $('#inputTimes').val();
 var freq = $('#inputFrequency').val();
 // var durationNum = $('#inputDurationNum').val();
 // var duration = $('#inputDuration').val();
	
 var freqMultiplier;
 if(freq === "daily") freqMultiplier = 365;
 else if(freq === "weekly") freqMultiplier = 52;
 else if(freq === "monthly") freqMultiplier = 12;
 else if(freq === "yearly") freqMultiplier = 1;

 var total = spent * times * freqMultiplier;

 $('#outputSpent').text(total.toLocaleString(undefined, {
 		minimumFractionDigits: 2,
 		maximumFractionDigits: 2
 }));
 return false;
});