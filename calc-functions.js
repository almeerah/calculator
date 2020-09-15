function add (a, b) {
	return (+a + +b);
}

function subtract (a, b) {
	return(a-b);
}

function multiply () {
	var result = 1;
	let num = Array.from(arguments);
	for (var i = 0; i < num.length; i++) {
		result *= num[i];
	}
	return result;
}

function divide(a,b){
	return (a/b);
}

function clear() {
	document.getElementById("result-box").innerHTML = 0;//clears the text screen
	arr[0] = 0, arr[1] = 0;
	num="";
}

var arr = [];
var num = "";

const clearbtn = document.querySelector('#clearbtn');
clearbtn.addEventListener('click',function() {
			clear();
  });

document.getElementById("result-box").innerHTML = 0;
var operation = "";
document.querySelector("#calc-grid").addEventListener('click', function (event) {
			if (event.target.getAttribute('id')>= 0) {
				var addNum = event.target.getAttribute('id');
				num=num+addNum;
				document.getElementById("result-box").innerHTML = num;
			}
    });

const addbtn = document.querySelector('#addbtn');
addbtn.addEventListener('click',function() {
			if (arr[0]>=0) {
					arr[0]=operate(arr[0],num,operation);
			}
			else{
				arr[0] = num;//write value of num to somewhere
			}
			num = ""; //clear screen for next number
			operation="add";
			document.getElementById("result-box").innerHTML = 0;
  });

const subtractbtn = document.querySelector('#subtractbtn');
subtractbtn.addEventListener('click',function() {
		if (arr[0]>0) {
				arr[0]=operate(arr[0],num,operation);
		}
		else{
				arr[0] = num;//write value of num to somewhere
		}
		num = ""; //clear screen for next number
		operation="subtract";
		document.getElementById("result-box").innerHTML = 0;
});

const multiplybtn = document.querySelector('#multiplybtn');
multiplybtn.addEventListener('click',function() {
		if (arr[0]>0) {
				arr[0]=operate(arr[0],num,operation);
		}
		else{
				arr[0] = num;//write value of num to somewhere
		}
		num = ""; //clear screen for next number
		operation="multiply";
		document.getElementById("result-box").innerHTML = 0;
});

const dividebtn = document.querySelector('#dividebtn');
dividebtn.addEventListener('click',function() {
		if (arr[0]>0) {
				arr[0]=operate(arr[0],num,operation);
		}
		else{
				arr[0] = num;//write value of num to somewhere
		}
		num = ""; //clear screen for next number
		operation="divide";
		document.getElementById("result-box").innerHTML = 0;
});

const equalsbtn = document.querySelector('#equalsbtn');
equalsbtn.addEventListener('click',function() {
			arr[1] = num;//write value of num to somewhere
			num = ""; //clear screen for next number
			operate(arr[0], arr[1], operation);
});

function operate(a,b,operator){
	var result;
	switch (operator) {
		case "add":
		result = add(a,b);
			break;
		case "subtract":
			result = subtract(a,b);
			break;
		case "divide":
			result=divide(a,b);
			break;
		case "multiply":
			result=multiply(a,b);
			break;
		default:
	}
	document.getElementById("result-box").innerHTML = result;
	num=result;
	arr[0] = 0, arr[1] = 0;
	return result;
}
