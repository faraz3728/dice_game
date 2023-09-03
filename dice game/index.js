var ran=Math.random();
ran= ran*6;
ran=ran+1;
ran=Math.floor(ran);

var ran3="images/dice"+ran+".png";
console.log(ran3); 

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",ran3);


var rand=Math.floor((Math.random()*6)+1);
var rand2="images/dice"+rand+".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",rand2);

if(ran>rand)
{
    document.querySelector("h1").innerHTML="ziyaad wins 🚩";
}
else if(ran<rand)
{
    document.querySelector("h1").innerHTML="faraz wins 🚩";
}

else{
    document.querySelector("h1").innerHTML="no one wins 🚩";
}
