const plusButton = document.querySelector('.incrementButton');
const minusButton = document.querySelector('.decrementButton');
let resultEl = document.querySelector('.result');
let result = 0;

add = () =>{
  const userInput = parseInt(document.querySelector('input.input').value, 10);
  result += userInput;
  resultEl.textContent = result;

  if(result >= 0){
    resultEl.style.color = 'black';
  }
}

subtract = () => {
  const userInput = parseInt(document.querySelector('input.input').value, 10);
  result -= userInput;
  resultEl.textContent = result;
  console.log(userInput)

  if(result < 0){
    resultEl.style.color = 'red';
  }
}

plusButton.addEventListener('click', add);
minusButton.addEventListener('click', subtract);
