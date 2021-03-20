var local1=localStorage.getItem("player1_name");
var local2=localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML=local1;
document.getElementById("player2_name").innerHTML=local2;
var score1=0;
var score2=0;
document.getElementById("n").innerHTML=" - "+score1;
document.getElementById("m").innerHTML=" - "+score2;

document.getElementById("player_question").innerHTML="Question Turn  -  "+local1;
document.getElementById("player_answer").innerHTML="Answer Turn  -  "+local2;
function send(){
    var get_word=document.getElementById("word").value;
    var word=get_word.toLowerCase();
    console.log(word);
    var second= word.charAt(1);
    var removesecond=word.replace(second,"_")

    var length= word.length-1;
    var last=word.charAt(length);
    var removelast=removesecond.replace(last,"_")

    var divide=Math.floor(word.length/2);
    var mid=word.charAt(divide);
    var removemid=removelast.replace(mid,"_");
var question="<h4>Question</h4><br>"+removemid;
var input_box="<br><input type='text' id='hj'><br>";
var button="<br><button class='btn btn-info' onclick='check()'>Check</button><br>";
var addall=question+input_box+button;
document.getElementById("output").innerHTML=addall;


}
var question_turn="player1";
var answer_turn="player2";
function check(){
    var hi=document.getElementById("hj").value;
    var answer=hi.toLowerCase();
    if(answer==word){
        if(answer_turn=="player1"){
        score1=score1+1;
        document.getElementById("n").innerHTML=score1;
        }
       else{
        score2=score2+1;
        document.getElementById("m").innerHTML=score2;
        }
        if(question_turn=="player1"){
            question_turn="player2";
            document.getElementById("player_question").innerHTML="Question turn"+player2_name;
        }
        else{
            question_turn="player1"
            document.getElementById("player_question").innerHTML="Question turn"+player1_name;
        }
        if(answer_turn=="player1"){
            answer_turn="player2";
            document.getElementById("player_answer").innerHTML="Answer turn"+player2_name;
        }
        else{
            answer_turn="player1"
            document.getElementById("player_answer").innerHTML="Answer turn"+player1_name;
        }
       }
    }

 