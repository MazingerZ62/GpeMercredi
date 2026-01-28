let boutonadd = document.getElementById("addbtn");
    boutonadd.addEventListener("click",function(){
        window.location.href = "./Mon site/page_addition.html"
    });

let boutonsous = document.getElementById("sousbtn");
    boutonsous.addEventListener("click",function(){
        window.location.href = "./Mon site/page_soustraction.html"
    });

let boutonmul = document.getElementById("mulbtn");
    boutonmul.addEventListener("click",function(){
        window.location.href = "./Mon site/page_multiplication.html"
    });

let boutondiv = document.getElementById("divbtn");
    boutondiv.addEventListener("click",function(){
        window.location.href = "./Mon site/page_division.html"
    });


let calculaddi = document.getElementById("calculadd");

let a = getRandomInt(5)
let b = getRandomInt(5)
let r = a + b 

console.log(r)
