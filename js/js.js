$(document).ready(function(){

// Responsive Table

$('.table.responsive').each(function(){  

  for (var i = 1; i <= $(this).find('th').length ; i++) {
    var thVal = $(this).find('th:nth-child('+i+')').html();
    $(this).find('td:nth-child('+i+')').attr('th-data', thVal);
  };

});

// Message Popup

var MessagePopup = function(){
  $('.message').addClass('shown');
  setTimeout(function(){
    $('.message').removeClass('shown');
  },5000);
} 

// Form Validate

$('.number-field').numeric();

$("form").validate({
  rules: {
    mobile: {
      required: true,
      minlength: 11,
      number:true
    }
  },
  messages: {
    mobile: "Please enter your phone number"
  },
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  submitHandler: function (form) {
    $('.thank-you').addClass('active');        
  }

});



});