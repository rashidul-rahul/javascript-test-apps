'use strict';

const randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20

function checkNumber(num) {
	if (!num) {
		return "No a Number!"
	}else if (num > randomNumber) {
		score --;
		return "High guess";
	} else if (num < randomNumber) {
		score--;
		return "Low guess";
	}
	document.querySelector(".number").textContent = num;	
	return "Perfect";
}

document.querySelector(".check").addEventListener('click', function(){
	const message = checkNumber(document.querySelector(".guess").value)
	// console.log(document.querySelector(".score").textContent)
	document.querySelector(".score").textContent = score;
	document.querySelector(".message").textContent = message;
})
