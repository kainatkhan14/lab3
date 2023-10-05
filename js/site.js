// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  // Basic jQuery query: Hides the submit button until email and age are verified
  $('#submit').prop('disabled', true);

  $('#email, #age-verification').change(function() {
    if ($('#email').val() && $('#age-verification').is(':checked')) {
      $('#submit').prop('disabled', false);
    } else {
      $('#submit').prop('disabled', true);
    }
  });
});
