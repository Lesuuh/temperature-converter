const btn = document.querySelector(".btn");
const input = document.getElementById("celsuis");
var display = document.getElementById("fahrenheit")
// console.log(display);

btn.addEventListener("input", function(){
    const inputValue = input.value;
    let answer = inputValue * 9/5 + 32;
    display.innerText = answer;
    console.log(answer);
})

// function toFahrenheit(){
//     const inputValue = input.value;
//     let answer = inputValue * 9/5 + 32;
//     display.innerText = answer;
//     console.log(answer);
    
    
// }