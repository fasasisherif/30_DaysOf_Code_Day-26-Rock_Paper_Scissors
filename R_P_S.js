var rock = document.getElementById("rock"), paper = document.getElementById("paper"), scissors = document.getElementById("scissors"), me = document.getElementsByClassName("me"), A_I = document.getElementsByClassName("A_I"), my_score = document.getElementById("my_score"), A_I_score = document.getElementById("A_I_score"), choose = document.getElementsByClassName("choose"), one = document.getElementsByClassName("one0");


rock.addEventListener("click", myfunc)
paper.addEventListener("click", myfunc2)
scissors.addEventListener("click", myfunc3)
choose[0].addEventListener("click", myfunc4)


var arr = ["rock", "paper", "scissors"];

var score = 0;
var score1 = 0;
function myfunc (){
me[0].innerHTML = arr[0]

A_I[0].innerHTML = arr[Math.floor(Math.random()*3)]	

if(A_I[0].innerHTML === "scissors"){
score += 10;		
my_score.innerHTML = score
   }else if(A_I[0].innerHTML === "rock"){
   		score += 0;		
   		}else{
   		score1 += 10;		
   		A_I_score.innerHTML = score1
   	}	    
	}
	


function myfunc2 (){
me[0].innerHTML = arr[1]

A_I[0].innerHTML = arr[Math.floor(Math.random()*3)]		

if(A_I[0].innerHTML === "rock"){
score += 10;		
my_score.innerHTML = score
   }else if(A_I[0].innerHTML === "paper"){
   		score += 0;		
   		}else{
   		score1 += 10;		
   		A_I_score.innerHTML = score1
   	}	    
	}



function myfunc3 (){
me[0].innerHTML = arr[2]

A_I[0].innerHTML = arr[Math.floor(Math.random()*3)]


A_I[0].innerHTML = arr[Math.floor(Math.random()*3)]	

if(A_I[0].innerHTML === "paper"){
score += 10;		
my_score.innerHTML = score
   }else if(A_I[0].innerHTML === "scissors"){
   		score += 0;		
   		}else{
   		score1 += 10;		
   		A_I_score.innerHTML = score1
   	}	    
	}
	

var open_count = 0;
function myfunc4(){
one[0].style.height ="45px"		
one[0].style.width ="auto"		
one[0].style.border =" 1px solid grey";
open_count++;

if(open_count%2 === 0){
one[0].style.height ="0px"		
one[0].style.width ="auto"		
one[0].style.border ="0px";
	 }
	}
	
	