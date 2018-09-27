Submit = function(){
    alert("Survey Submitted!");
    alert("Thank You for your participation");
    
    var isValid = true;
     $('input,textarea,select').filter('[required]:visible').each(function() {
      if ( $(this).val() === '' )
         isValid = false;
    });
    if( isValid ) {
       $('#submitBtn').prop('disabled', false);
    } else {
       $('#submitBtn').prop('disabled', true);
    };
    $('#submitBtn').click(function() {
        var isValid = true;
         $('input,textarea,select').filter('[required]:visible').each(function() {
          if ( $(this).val() === '' )
             isValid = false;
        });
        if( isValid ) {
           $("#myForm")[0].submit(); 
       };

    });
}


