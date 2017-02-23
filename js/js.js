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
    nickname: "لطفا نام کاربری خود را وارد نمایید",
    email_address: "لطفا ایمیل خود را وارد نمایید",
    password: "لطفا رمز عبور خود را وارد نمایید",
    confirm_password: "رمز عبور وارد شده با رمز عبور بالا مطابقت ندارد",
    mobile: "لطفا شماره موبایل خود را وارد کنید"
  },
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  submitHandler: function (form) {
    $('.thank-you').addClass('active');        
  }

});



});