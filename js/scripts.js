$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));

    if (height >= 36) {
      $('#bigRides').show();
    } else {
        $('#smallRides').show();
    }
});
