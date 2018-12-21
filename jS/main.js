
            $(document).ready(function (){
              $('#blanks form').submit(function(event){
              var marks=0;
                var blanks=["question0", "question1","question2","question3"]
                  blanks.forEach(function(blank) {
                      var userInput = $("input:radio[name=" + blank + "]:checked" ).val();
                              if(userInput=="B"){
                              marks = marks+5;
                              }
                          })
                    alert(marks)
              event.preventDefault();
            });
            });
            
           
      $(document).ready(function() {
              $("button#green").click(function() {
                $("body").addClass("green-background");
              });
            });