$(document).ready(function(){

// Number Bullet

$(window).load(function(){
  var liNumber = $('.number-bullet li').length;
  console.log(liNumber);
  for(var i = 1; i <= liNumber; i++){
    $('.number-bullet li:nth-child('+i+')').attr('list-number', i+' -');
  }
});  

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

// Select Menu

if($(window).width() > 980){
  $(function() {
      $( ".ui-selectmenu" ).selectmenu();
  });
}

// Form Validate

$('.number-field').numeric();

$('form').validate({
  rules: {
    nickname: {
      required: true,
      minlength: 5
    },
    email_address: {
      required: true,
      minlength: 5,
      email:true
    },
    password: {
      required: true,
      minlength: 8
    },
    confirm_password: {
      required: true,
      minlength : 8,
      equalTo : "#password"
    },
    mobile: {
      required: true,
      minlength: 5,
      number:true
    }
  },
  messages: {
    nickname: "Please Enter Your Nickname",
    email_address: "Please Enter Your Email Address",
    password: "Please Enter Your Password",
    confirm_password: "Please Confirm Your Password",
    mobile: "Please Enter Your Mobile Number"
  },
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  submitHandler: function (form) {
    $('.thank-you').addClass('active');        
  }

});



});