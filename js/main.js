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






const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
	showAgeAndLangs: (persona) => {
		let age,
			lang = '';

		age = persona.age;
		const {skills} = persona;
		skills.languages.forEach(item => {
			lang += ` ${item.toUpperCase()}`;
		});
		return console.log(`Мне ${age} и я владею языками:${lang}`);
	}
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);
// personalPlanPeter.showAgeAndLangs(personalPlanPeter) => 'Мне 29 и я владею языками: RU ENG'



function showExperience(plan) {
	let {skills} = plan;
	return console.log(`${skills.exp}`);
}

showExperience(personalPlanPeter);
// showExperience(personalPlanPeter) => '1 month'



function showProgrammingLangs(plan) {
	let {skills} = plan;
	let result = '';
	
	Object.entries(skills.programmingLangs).forEach((item) => {
		const [key, value] = item;
		result += `Язык ${key} изучен на ${value}\n`;
	});

	return console.log(result);
}

showProgrammingLangs(personalPlanPeter);
// showProgrammingLangs(personalPlanPeter)  => "Язык js изучен на 20% Язык php изучен на 10%"




const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
		return console.log(`Семья пуста`);
	}

	return console.log(`Семья состоит из: ${arr.join(' ')}`);
}

showFamily(family);
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'





const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr) {
    return console.log(arr.join('\n').toLowerCase());
}

standardizeStrings(favoriteCities);
// standardizeStrings(favoriteCities)  выведет в консоль
// lisbon
// rome
// milan
// dublin




const someString = 'This is some strange string';

function reverse(str) {
	let result = '';
	
	if (typeof(str) !== 'string') {
		return console.log(`Ошибка!`);
	}

	for (let i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}
	
	return console.log(result);
}

reverse(someString);
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'



const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
	if (arr.length === 0) {
		return console.log('Нет доступных валют.');
	}

	let result = `Доступные валюты:\n`;
	
	arr.forEach(item => {
		if (item === missingCurr) {
			return;
		}

		result += `${item}\n`;
	});

	return console.log(result);
}

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY');
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Доступные валюты:
// UAH
// RUB




const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 60000
};

function isBudgetEnough(data) {
	let totalArea = 0,
		total = 0;

    data.shops.forEach(item => {
		totalArea += item.width * item.length;
	});

	total = totalArea * data.height * data.moneyPer1m3;
	
	if (total <= data.budget) {
		return 'Бюджета достаточно';
	}

	return 'Бюджета недостаточно';
}

isBudgetEnough(shoppingMallData);




const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {
    let result = [],
		stud = [...arr];

	stud.sort();

	for (let i = 0; i < stud.length; i++) {
		result.push(stud.splice(0, 3));
	}
	
	result.push(`Оставшиеся студенты: ${(!stud.length ? '-' : stud.join(', '))}`);

	return console.log(result);
}
sortStudentsByGroups(students);




const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function transferWaitors(data) {
    const copy = JSON.parse(JSON.stringify(data));

    copy.waitors[2] = {name: 'Mike', age: 32};
	
    return copy;
}

transferWaitors(restorantData);

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (fDish.price + sDish.price < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function isOpen(prop) {
    let answer = '';

	if (!prop) {
		answer = 'Закрыто';
	}
	answer = 'Открыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));





function factorial(res) {
    if (typeof(res) !== 'number' || !Number.isInteger(res)) {
		return 'Введите правильное число';
	} else if (res < 1) {
		return 1;
	} else if (res === 1) {
		return res;
	}

	return res * factorial(res - 1);
}

factorial(5);




function amountOfPages(summary){
	let result = 0,
		a = '';

	for (let i = 1; i <= summary; i++) {
		a += i;

		if (a.length == summary) {
			result = i;
			break;
		}
	}
	
	return console.log(result);
}

amountOfPages(11);

// 1234567891011121314151617
// amountOfPages(5) => 5
// amountOfPages(25) => 17
// amountOfPages(1095) => 401   
// amountOfPages(185) => 97




function isPangram(string) {
	const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'v', 'x', 'y', 'z'];
	string.toLowerCase();

	for (let i = 0; i < alphabet.length; i++) {
		if (string.indexOf(alphabet[i]) === -1) {
			return console.log(false);
		}
	}
	return console.log(true);
}

isPangram('Hello world');
// isPangram(«The quick brown fox jumps over the lazy dog») => true
// isPangram(«Hello world») => false





function deepCount(a){
	let result = a.length;

	for (let i = 0; i < a.length; i++) {
		if (Array.isArray(a[i])) {
			result += deepCount(a[i]);
		}
	}

	return console.log(result);
}

deepCount(["1", 5, "3", ["10"]]);
// deepCount([1, 5, 3]) => 3
// deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)
// deepCount([1, 2, [3, 4, [5]]]) => 7
// deepCount([]) => 0
// deepCount([[[[[[[[[]]]]]]]]]) => 8

const now = new Date();
console.log(now);






const films = [
	{
		name: 'Titanic',
		rating: 9
	},
	{
		name: 'Die hard 5',
		rating: 5
	},
	{
		name: 'Matrix',
		rating: 8
	},
	{
		name: 'Some bad film',
		rating: 4
	}
];

function setFilmsIds(arr) {
	
}

setFilmsIds(films);

// 3) возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.

// setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]



function showListOfFilms(arr) {
		return arr.reduce((acc, curr) => (typeof(acc) === 'object') ? `${acc.name}, ${curr.name}` : `${acc}, ${curr.name}`);
	}

console.log(showListOfFilms(films));


function showGoodFilms(arr) {
	return arr.filter(film => film.rating >= 8);
}

showGoodFilms(films);





// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
	
// }







// 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray); :)

// P.S. Вот тут вы столкнетесь с интересным моментом, который я хочу, чтобы вы запомнили. Внимательно проследите за тем, что происходит внутри коллбэка и что будет проверяться. Дополнительно расписал этот момент в комментариях в ответах.









