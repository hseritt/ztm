

const array = [1, 2, 4, 8];

const mapArray = array.map((num) => {
	return String(num);
});

console.log('map: ', mapArray);

const arrayMixed = [1, 4, 7, 8, 11, 14];

const oddArray = arrayMixed.filter(num => {
	return num % 2 !== 0;
});

console.log(oddArray);

// reduce

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 0.5);

console.log('reduce: ', reduceArray);