$(document).ready(function() {
  $('#contact-form').submit(function(e) {
      var name = $('#inputName')
      var email = $('#inputEmail')
      var message = $('#inputMessage')
    
      if(name.val() == "" || email.val() == "" || message.val() == "") {
        $('.submit-fail').fadeToggle(400);
        return false;
      }
      else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/b.jazzy.w@gmail.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        $('.submit-success').fadeToggle(400);
      }
    });
  
  $('.submit-fail, .submit-success').click(function() {
    $(this).hide();
  })

  // $('.about-logo').hover().css()

  $( ".about-logo" ).hover(function() {
    $( '.about-hover' ).toggle();
    $('.bio-slide').css('display', "block")
    var hidden = $('.bio-slide');
        if (hidden.hasClass('visible')){
            hidden.animate({"left":"1000%"}, "slow").removeClass('visible');
        } else {
            hidden.animate({"left":"0px"}, "slow").addClass('visible');
        }
    

  });


});
