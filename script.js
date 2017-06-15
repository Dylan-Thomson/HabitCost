var total = 0;

$('form').submit(function () {
// Get input
 var spent = $('#inputSpent').val();
 var habit = $('#inputHabit').val();
 var times = $('#inputTimes').val();
 var freq = $('#inputFrequency').val();

// Calculate spenditure
 var freqMultiplier;
 if(freq === "daily") freqMultiplier = 365;
 else if(freq === "weekly") freqMultiplier = 52;
 else if(freq === "monthly") freqMultiplier = 12;
 else if(freq === "yearly") freqMultiplier = 1;

 var habitTotal = spent * times * freqMultiplier;
 total += habitTotal;

 var habitTotalText = toDollarString(habitTotal);
 var totalText = toDollarString(total);
 var spentText = toDollarString(Number(spent));


// Build an <li> to append
 var li = "<li>You spend $" + spentText + " on " + habit + " - " + times;
 if(times < 2) {
 	li += " time ";
 }
 else {
 	li += " times ";
 }
 li += freq + " - costing you $" + habitTotalText + " each year</li>";

 $('ul').append(li);

 $('#outputSpent').text(totalText);

//Reset inputs
	resetInputs();
  return false;
});

$(".btn-danger").on("click", function() {
	resetInputs();
	total = 0;
	$('#outputSpent').text("0.00");
	$('ul').text("");
});

//convert number to string with two decimal places
function toDollarString(num) {
	return num.toLocaleString(undefined, {
 		minimumFractionDigits: 2,
 		maximumFractionDigits: 2
 });
}

function resetInputs() {
 $('#inputSpent').val('');
 $('#inputHabit').val('');
 $('#inputTimes').val('');
 $('#inputFrequency').val('daily');
}
