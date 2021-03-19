var showCalculation = document.getElementById('calculation');
var showResult = document.getElementById('result');
var inputContainer = document.getElementById('inputContainer');



inputContainer.addEventListener('click', calclator);

var output = [];
var result = [];

function calclator(e) {	


	if (e.target.classList.contains('number')) {

		output.push(e.target.innerHTML);
		result.push(e.target.innerHTML);

	}
	
	else if (e.target.classList.contains('operator')) {

		output.push(e.target.innerHTML);
		result.push(e.target.innerHTML);
	}


	else if (e.target.classList.contains('clr')){
		output = [];
		result = [];
		showCalculation.innerHTML=output;
		showResult.innerHTML=result;
	}


	else if (e.target.classList.contains('dlt')){
		output.pop();
		result.pop();
	}

	else if (e.target.classList.contains('result')){
		var finalResult = result.join('');
		var answer = eval(finalResult);	
		showResult.innerHTML = answer;

		output = [];
		result = [];

		output.push(answer);
		result.push(answer);
		return;
	}

	showCalculation.innerHTML=output.join('');

}