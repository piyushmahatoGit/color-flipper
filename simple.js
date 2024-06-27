const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "yellow", "blue", "tomato", "White" ];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const reset = document.getElementById("reset");

btn.addEventListener("click", function(){
    // get random number between 0 - 3
    
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

reset.addEventListener("click", function(){
    location.reload();
});