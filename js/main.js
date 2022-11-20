'use strict';

function getTimeFromMinutes(num) {
	if (num < 0 || typeof(num) !== 'number' || !Number.isInteger(num)) {
		return console.log('Ошибка, проверьте данные');
	}

	let w = '';
	const h = Math.floor(num / 60);
	const m = num % 60;
	switch (h) {
		case 0, 5, 6:
			w = 'часов';
			break;
		case 1:
			w = 'час';
			break;
		case 2:
		case 3:
		case 4:
			w = 'часа';
			break;
		default:
			w = 'часов';
		}

	return console.log(`Это ${h} ${w} и ${m} минут`);
	}

	getTimeFromMinutes(50);
  
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"


function findMaxNumber(a, b, c, d) {
	const arr = [a, b, c, d];
	arr.sort(compareNum);
	function compareNum(a, b) {
		return a-b;
	}

	if (typeof(a, b, c, d) !== 'number' ) {
		return console.log(0);
	}
	return console.log(arr[3]);
}

findMaxNumber(1, 5, '6', '10');

// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0



function fib(num) {
    if (num <= 0 || !Number.isInteger(num)) {
		return console.log('');
	}

	let fib = '',
		first = 0,
		second = 1;

	for (let i = 0; i < num; i++) {
		if (i + 1 === num) {
			fib += `${first}`;
		} else {
			fib += `${first} `;
		}

		let sum = first + second;
		first = second;
		second = sum;
	}

	return console.log(fib);
}

fib(7);


// fib(4) => '0 1 1 2'
// fib(7) => '0 1 1 2 3 5 8'
// fib('7') => ''
// fib(1) => '0'
// fib(0) => ''