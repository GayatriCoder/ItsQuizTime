class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("cyan");

    //write code to show a heading for showing the result of Quiz
    fill("black");
    textSize(30);
    text("Result is: ",340,50);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();


    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined)
    {
      debugger;
      var display_Answer = 230;
      fill("red");
      textSize(20);
      text("NOTE: Contestants who answered correctly are highlighted in green", 130,230);
      for(var plr in allContestants)
      {
        debugger;
        var correctAns = "2";
        if(correctAns === allContestants[plr].ans)
        {
          fill("green");
        }
        else
        {
          fill("red");
        }
        display_Answer+= 30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].ans,250,display_Answer);
      }
    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
