// Exercise 1
const triangle = (size) => {
	let hashtag = "";
	for (let i = hashtag; i <= size; i++, console.log((hashtag += "#"))) {}
};

// Exercise 2
const fizzBuzz = (size) => {
	for (let i = 0; i <= size; i++) {
		if (isDivisible(i, 3) && isDivisible(i, 5)) {
			console.log("FizzBuzz");
		} else if (isDivisible(i, 3)) {
			console.log("Fizz");
		} else if (isDivisible(i, 5)) {
			console.log("Buzz");
		} else {
			console.log(i, " ");
		}
	}
};
const isDivisible = (dividend, divisor) => dividend % divisor === 0;

// Exercise 3
const chessTable = (size) => {
	let board = "";
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			if (isDivisible(i + j, 2)) {
				board += " ";
			} else {
				board += "#";
			}
		}
		board += "\n";
	}
	return board;
};