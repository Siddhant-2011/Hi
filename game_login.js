function addUser(){
    var player1_name=document.getElementById("player1_name_input").value;
    var player2_name=document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location="game_page.html";
}
var local1=localStorage.getItem("player1_name");
var local2=localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML=local1;
document.getElementById("player2_name").innerHTML=local2;
function send(){
    var get_word=document.getElementById("word").value;
    var word=get_word.toLowerCase();
    console.log(word);
}