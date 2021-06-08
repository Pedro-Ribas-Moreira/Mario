const coin = document.querySelector(".hidden-coin");

let score = 0;
document.querySelector(".question-brick").addEventListener("click", ()=>{
    coin.classList.add("jump");
    score++;
    var result = checkValue(score);
    document.querySelector(".bottomline-coin").innerHTML = "X " + result;
    coin.addEventListener("animationend", ()=>{
        coin.classList.remove("jump");
    })
   
})

function checkValue(n){
 let x;
 if(n >= 0 & n < 10 ){
     return  x = "0" + n; 
    }else{
       return x = n
    }
  
}