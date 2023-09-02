$(function () {
  // The save function is used to save the user input in the description field
  // to localStorage when the save button is clicked.
  // It stores the time-block id and the description in localStorage.
  $('.saveBtn').on('click', function save() {
    var time = $(this).parent().attr('id');
    var description = $(this).siblings('.description').val();
    localStorage.setItem(time, description);
  });
  
  // The timeColors function is used to compare the current hour to the hour
  // of each time-block using the id attribute and dayjs().hour().
  // The time-blocks are then given the appropriate class based on the comparison.
  function timeColors() {
    var currentHour = dayjs().hour();
    $('.time-block').each(function () {
      var hour = parseInt($(this).attr('id').split('-')[1]);
      if (hour < currentHour) {
        $(this).addClass('past');
      } else if (hour === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  }
  
  timeColors();

  // The array of hours is used to loop through the time-blocks and get the
  // corresponding user input from localStorage.
  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  for (let i = 0; i < hours.length; i++) {
    $(`#hour-${hours[i]} .description`).val(localStorage.getItem(`hour-${hours[i]}`));
  }

  // The currentDay id is used to display the current date in the header.
  // The format method is used to format the date in the format specified by
  // the day and date format string.
  $('#currentDay').text(dayjs().format('[Today is] dddd, MMMM D, YYYY'));
});
