var userChoices = document.getElementsByTagName('input[type:radio]');
      var questions = 
      [
        {
          question: "What is the capital of United Kingdom?",
          choices: ["Manchester", "Birmingham", "London", "Birmingham"],
          answer: 2
        },
        
        {
          question: "What is the capital of United States?",
          choices: ["California", "New York", "Miami", "Florida"],
          answer: 1
        }
        
        
      ];
      
      for ( var i = 0; i < questions.length; i++ ) {
        var question = questions[i].question;
        document.write ( question );
        var options = questions[i].choices;
        for ( var opt in options ) {
           for ( var radios in userChoices ) {
             userChoices[radios].value = options[opt];
             
           }
        }
        
      }
