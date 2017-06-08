$('form').submit(function () {
 var spent = $('#inputSpent').val();
 var times = $('#inputTimes').val();
 var freq = $('#inputFrequency').val();
 var durationNum = $('#inputDurationNum').val();
 var duration = $('#inputDuration').val();

 alert("You spend $" + spent + " " + times + " times " + freq + " for " + durationNum + " " + duration);
 return false;
});