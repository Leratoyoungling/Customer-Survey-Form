Submit = function(){
    alert("Survey Submitted!");
    alert("Thank You for your participation");
    
    var isValid = true;
     $('input,textarea,select').filter('[required]:visible').each(function() {
      if ( $(this).val() === '' )
         isValid = false;
    });
    if( isValid ) {
       $('.btn btn-secondary').prop('disabled', false);
    } else {
       $('.btn btn-secondary').prop('disabled', true);
    };
    $('.btn btn-secondary').click(function() {
        var isValid = true;
         $('input,textarea,select').filter('[required]:visible').each(function() {
          if ( $(this).val() === '' )
             isValid = false;
        });
        if( isValid ) {
           $("#survey-form")[0].submit(); 
       };

    });
}


