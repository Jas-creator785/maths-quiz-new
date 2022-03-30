function add_user(){
    window.location="quiz_game_page.html";
    player1_name=document.getElementById("player1_name_input").Value;
    player2_name=document.getElementById("player2_name_input").Value;
    localStorage.setItem("player1name",player1_name);
    localStorage.setItem("player2name",player2_name);
    }
     
