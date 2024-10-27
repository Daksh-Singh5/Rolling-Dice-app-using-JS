var dice;
var dices=["&#9856;","&#9857;","&#9858;","&#9859;","&#9860;","&#9861;"]
var stop=true
var time;

function switching(){
var Num=Math.floor(Math.random()*6)
dice.innerHTML=dices[Num];

}

function rolling(){
    if (stop==true){
        stop=false;
        time=setInterval(switching,100)
    }
    else{
        stop=true
        clearInterval(time)
    }
}

window.onload= function(){
dice=document.getElementById("dice");
rolling();
}




