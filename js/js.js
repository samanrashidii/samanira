$(document).ready(function(){

// Responsive Table

$('.table.responsive').each(function(){  

  for (var i = 1; i <= $(this).find('th').length ; i++) {
    var thVal = $(this).find('th:nth-child('+i+')').html();
    $(this).find('td:nth-child('+i+')').attr('th-data', thVal);
  };

});



});