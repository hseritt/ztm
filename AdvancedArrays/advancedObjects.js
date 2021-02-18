
console.log([] === []);
console.log([1, 2] === [1, 2]);

const obj1 = { value: 10 };
const obj2 = obj1;

console.log(obj1 === obj2);

const obj3 = { value: 10 };
console.log(obj2 === obj3);

obj1.newValue = 15;
console.log(obj1)
console.log(obj1);

obj3.newValue = 15;
console.log(obj1.newValue === obj3.newValue);

console.log(this);

const newObj = {
	a: function() {
		console.log(this);
	}
}
newObj.a();

class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}.`);
	}
}

const player = new Player('Harlin', 'Ranger');
player.introduce();

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
	}
	play() {
		console.log(`WEEEE I'm a ${this.type}!!!`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shaun', 'Dark Mage');

wizard1.play();
wizard2.play();
