
            var userInput = new Array();
            var answers = new Array(10);
            answers[0] = "B";
            answers[1] = "C";
            answers[2] = "A";
            answers[3] = "C";
            
            
            function getScore(){
            var score=0;
            var numQuestions=4;
            
            for (var i=0;i<numQuestions;i++){
            if (userInput[i]==answers[i]){
            score += 1;
            }
            else{
            score += 0;
            }
            
            }
            return score;
            }
            function returnScore(){
            alert("Your score is "+getScore()+"/10");
            }
            var answers = ["A","C","B"], 
            tot = answers.length;
            
            function getCheckedValue( radioName ){
            var radios = document.getElementsByName( radioName ); // Get radio group by-name
            for(var y=0; y<radios.length; y++)
              if(radios[y].checked) return radios[y].value; // return the checked value
            }
            
            function getScore(){
            var score = 0;
            for (var i=0; i<tot; i++)
            if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
            return score;
            }
            
            function returnScore(){
            alert("Your score is "+ getScore() +"/"+ tot);
            }
            $(document).ready(function() {
              $("button#green").click(function() {
                $("body").addClass("green-background");
              });
            });