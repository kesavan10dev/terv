let a=["stone","paper","siser"];
let player=a[Math.floor(Math.random()*3)];
let computer=a[Math.floor(Math.random()*3)];
let b=(player === computer)? "Tie" : (player==="stone" && computer==="paper")? "computer wins" : (player==="paper" && computer==="siser")? "computer wins" : (player==="siser" && computer==="stone")? "computer wins" : "player wins";
b1=console.log("player:",player);
b2=console.log("computer:",computer);
b3=console.log(b);
// document.getElementById("player").innerText = "Player: " + player;
// document.getElementById("computer").innerText = "Computer: " + computer;
// document.getElementById("result").innerText = b;
const ad=document.getElementById("player");
ad.innerText="player:"+player;
const bd=document.getElementById("computer");
bd.innerText="computer:"+computer;
const cd=document.getElementById("result");
cd.innerText=b;
