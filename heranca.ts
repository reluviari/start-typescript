class Animal {
	private name: string;
	constructor(theName: string) {
		this.name = theName;
	}
	move(meters: number = 0) {
		console.log(this.name + " moved " + meters + "m.");
	}
}

class Snake extends Animal {
	constructor(name: string) {
		super(name);
	}
	distance(meters: number = 5) {
		console.log("Slithering...");
		super.move(meters);
	}
}

class Horse extends Animal {
	constructor(name: string) {
		super(name);
	}
	move(meters: number = 45) {
		console.log("Galloping...");
		super.move(meters);
	}
}

let sam = new Snake("Sammy the Python");
sam.distance(3);

/**
 * Chama o move direto da class Pai
 */
var tom: Animal = new Horse("Tommy the Palomino");
tom.move();
