var total = 0;

$('form').submit(function () {
 var spent = $('#inputSpent').val();
 var habit = $('#inputHabit').val();
 var times = $('#inputTimes').val();
 var freq = $('#inputFrequency').val();

 var freqMultiplier;
 if(freq === "daily") freqMultiplier = 365;
 else if(freq === "weekly") freqMultiplier = 52;
 else if(freq === "monthly") freqMultiplier = 12;
 else if(freq === "yearly") freqMultiplier = 1;

 var habitTotal = spent * times * freqMultiplier;
 total += habitTotal;

 var habitTotalText = habitTotal.toLocaleString(undefined, {
 		minimumFractionDigits: 2,
 		maximumFractionDigits: 2
 });

 var totalText = total.toLocaleString(undefined, {
 		minimumFractionDigits: 2,
 		maximumFractionDigits: 2
 });

 $('ul').append("<li> You spend $" + spent + " on " + habit + " " + times + " times " + freq + " costing you $" + habitTotalText + " a year!</li>");

 $('#outputSpent').text(totalText);


 $('#inputSpent').val('');
 $('#inputHabit').val('');
 $('#inputTimes').val('');
 $('#inputFrequency').val('daily');
 return false;
});