var questions = [
      {
           prompt: "What color are apples?\n(1) Red/Green\n (2) Purple\n(3) Orange",
           answer: "1"
     },
     {
          prompt: "What color are Bananas?\n(1) lime\n (2) Magenta\n(3) Yellow",
          answer: "3"
     },
     {
          prompt: "What color are strawberries?\n(1) Yellow\n (2) Red\n(3) Blue",
          answer: "2"
     }
     ];

var score = 0;
for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
         window.write("Correct!");
     } else {
          window.write("WRONG!");
     }
}
document.write("you got " + score + "/" + questions.length);

