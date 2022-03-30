player1_name= localStorage.getItem("player1name");
player2_name= localStorage.getItem("player2name");
question_turn="player1";
answer_turn="player2";
player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn: "+player1_name;
document.getElementById("player_answer").innerHTML= "Answer turn: "+player2_name;

function send() {
    num_1=document.getElementById("number_1").value;
    num_2=document.getElementById("number_2").value;
//question_sum=num_1+"+"+num_2;
question_sum="<h4>"+ number_1+ "X"+ number_2+"</h4>";
question_tag="<h4 id='question'> Q. "+question_sum+"</h4> <br>";
answer_tag="answer: <input type='text' id='input_answer'><br>";
button_tag="<button onclick='check()' class='btn btn-warning'>Check</button>";
row = question_tag+answer_tag+button_tag;
document.getElementById("output").innerHTML=row;
document.getElementById("number_1").innerHTML=" ";
document.getElementById("number_2").innerHTML=" ";
question_number="<h4>"+ number_1+ "X"+ number_2+"</h4>";
 input_box="<br> Answer: <input type='text' id='input_check_box'>";
 check_button="<br> <br><button class='btn-btn-info'onclick='check()'>Check</button>";
}

 function check(){
     var answerget_number= document.getElementById("input_answer").value;
     var answer_lword=answerget_word.toLowerCase();
     if (word==answer_lword) {
         if (answer_turn=="player1") {
             player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;   
         }
         if (answer_turn=="player2") {
            player2_score=player2_score+1;
       document.getElementById("player2_score").innerHTML=player2_score;   
        }
     }

     if (answer_turn=="player1") {
         answer_turn="player2";
         document.getElementById("player_answer").innerHTML="Answer Turn :"+player2_name;
     }
     else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn :"+player1_name;
     }

     if (question_turn=="player1") {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn :"+player2_name;
    }
    else{
       question_turn="player1";
       document.getElementById("player_question").innerHTML="Question Turn :"+player1_name;
    }
    document.getElementById("output").innerHTML=" ";
    document.getElementById("word").innerHTML=" ";
 }
 