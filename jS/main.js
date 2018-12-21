
            $(document).ready(function (){
              $('#blanks form').submit(function(event){
              var marks=0;
                var blanks=["question0", "question1","question2","question3"]
                  blanks.forEach(function(blank) {
                      var userInput = $("input:radio[name=" + blank + "]:checked" ).val();
                              if(userInput=="B"){
                              score = score+10;
                              }
                          })
                    alert(score)
              event.preventDefault();
            });
            });
            
            var userInput = new Array();
            var answers = new Array(10);
            answers[0] = "B";
            answers[1] = "B";
            answers[2] = "B";
            answers[3] = "B";
            
            
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