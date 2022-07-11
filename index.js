colors=["#3be9df","3685bc","#d36280","#e44f55","#fa8056","#818bca","#7d659f","#51bab3","#4fb66c","#e3ad17","#252525"];

let heading=document.getElementsByTagName("H1")[0];
let app=document.getElementsByClassName("app")[0];
let img=document.getElementById("logo");
let quote=document.getElementsByClassName("quote")[0];
let author=document.getElementsByClassName("author")[0];
let btnBackground=document.getElementById("btnBackground");
let quoteInput=document.querySelector("[name=quoteInput]");
let authorInput=document.querySelector("[name=authorInput]");
let nature=document.getElementById("nature");
let festival=document.getElementById("festival");
let literature=document.getElementById("literature");

heading.style.textAlign="center";


btnBackground.addEventListener("click",function(e){
    let index=Math.floor(Math.random()*colors.length);
    let randomColor=colors[index];
    
    app.style.background=randomColor;
});

nature.addEventListener("click",function(e)
{
    img.src="https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?w=238&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7";
});

festival.addEventListener("click",function(e){
    img.src="https://th.bing.com/th/id/OIP.MxbiqZwrs_YFQAXhSOjzVQHaE8?w=246&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7";
});

literature.addEventListener("click",function(e){
    img.src="https://th.bing.com/th/id/OIP.zZgySa6lD3i480mgnKeixgHaFR?w=258&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7";
});

quoteInput.addEventListener("keyup",function(e){
    quote.innerHTML=e.currentTarget.value;
});

authorInput.addEventListener("keyup",function(e){
    
    author.innerHTML=e.currentTarget.value;
});

btnBackground.addEventListener("click",function(e){
    //creating node
    var node=document.createTextNode("This is your final quote, you can make changes");
    document.body.appendChild(node);
    setTimeout(() => {
        document.body.removeChild(node);
    }, 3000);
})




