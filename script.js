
$(document).ready(function() {
  // Saves button click event
  $('.saveBtn').on('click', function(event) {
    var timeBlockId = $(this).parent().attr('id');
    var description = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockId, description);
  });

  // Applies past, present, or future classes to each time block
  var currentHour = dayjs().format('H');
  $('.time-block').each(function() {
    var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);

    if (timeBlockHour < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else if (timeBlockHour === currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });

  // Retrieves user input from local storage and set textarea values
  $('.time-block').each(function() {
    var timeBlockId = $(this).attr('id');
    var description = localStorage.getItem(timeBlockId);

    if (description) {
      $(this).find('.description').val(description);
    }
  });

  // Displays the current date in the header
  var currentDate = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(currentDate);
});