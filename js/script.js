let playerOneNameInput = document.getElementById("playerOneNameInput");
let playerOneNameBtn = document.getElementById("playerOneNameBtn");
let playerOneNameError = document.getElementById("playerOneNameError");
let playerOneNumber = document.getElementById("playerOneNumber");
let playerOneNumHeading = document.getElementById("playerOneNumHeading");
let playerOneNumInput = document.getElementById("playerOneNumInput");
let playerOneNumBtn = document.getElementById("playerOneNumBtn");
let playerOneNumError = document.getElementById("playerOneNumError");
let playerTwoName = document.getElementById("playerTwoName");
let playerTwoNameInput = document.getElementById("playerTwoNameInput");
let playerTwoNameBtn = document.getElementById("playerTwoNameBtn");
let playerTwoNameError = document.getElementById("playerTwoNameError");
let playerTwoNumHeading = document.getElementById("playerTwoNumHeading");
let playerTwoNumber = document.getElementById("playerTwoNumber");
let playerTwoNumInput = document.getElementById("playerTwoNumInput");
let playerTwoNumBtn = document.getElementById("playerTwoNumBtn");
let playerTwoNumError = document.getElementById("playerTwoNumError");
let result = document.getElementById("result");
let resultText = document.getElementById("resultText");



// Player One Name Start
playerOneNameBtn.addEventListener("click", () => {
  let inputValue = playerOneNameInput.value;
  if (inputValue === "") {
    playerOneNameError.removeAttribute("hidden");
  } else {
    playerOneNameError.setAttribute("hidden", true);
    playerOneName.setAttribute("hidden", true);
    playerOneNumber.removeAttribute("hidden");
    playerOneNumHeading.innerHTML = playerOneNameInput.value;
  }
});
// Player One Name End

// Player One Number Start
playerOneNumBtn.addEventListener("click", () => {
  let inputValue = playerOneNumInput.value;
  if (inputValue === "") {
    playerOneNumError.removeAttribute("hidden");
  } else {
    playerOneNumError.setAttribute("hidden", true);
    playerOneNumber.setAttribute("hidden", true);
    playerTwoName.removeAttribute("hidden");
  }
});
// Player One Number End

// Player Two Name Start
playerTwoNameBtn.addEventListener("click", () => {
  let inputValue = playerTwoNameInput.value;
  if (inputValue === "") {
    playerTwoNameError.removeAttribute("hidden");
  } else {
    playerTwoNameError.setAttribute("hidden", true);
    playerTwoName.setAttribute("hidden", true);
    playerTwoNumber.removeAttribute("hidden");
    playerTwoNumHeading.innerHTML = playerTwoNameInput.value;
  }
});
// Player Two Name End

// Player Two Number Start
playerTwoNumBtn.addEventListener("click", () => {
  let inputValue = playerTwoNumInput.value;
  if (inputValue === playerOneNumInput.value) {
    playerTwoNumError.setAttribute("hidden", true);
    playerTwoNumber.setAttribute("hidden", true);
    result.removeAttribute("hidden");
    resultText.innerHTML = "Congratulations..! You Won The Match";
  } else {
    playerTwoNumError.removeAttribute("hidden");
    playerTwoNumError.innerHTML = "Better Luck Next Time";
  }
});
// Player Two Number End

// playerTwoNumBtn.addEventListener("click",()=>{
//   if(playerOneNumber.value === playerTwoNumber.value){
// resultText.innerHTML = "Congratulations" + "You Won The Match"
// playerOneNameInput.value.style.color ="green"
//   }
//   else{
//     resultText.innerHTML = "Better Luck Next Time"
//     playerTwoNameInput.value.style.color ="red"
//   }
// })
