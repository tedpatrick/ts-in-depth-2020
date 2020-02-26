class Human {
	#name: string;
	private foo: string;

	constructor(name: string) {
		this.#name = name;
		this.foo = name;
	}
	greet() {
		console.log(`Hello, my name is ${this.#name}!`);
		console.log(`Hello, my name is ${this.foo}!`);
	}
}

let jeremy = new Human("Jeremy Bearimy");

jeremy.greet();

// access private field error
// jeremy.#name

class C {
    #foo = 10;

    cHelper() {
        return this.#foo;
    }
}

class D extends C {
    #foo = 20;

    dHelper() {
        return this.#foo;
    }
}

let instance = new D();
// 'this.#foo' refers to a different field within each class.
console.log(instance.cHelper()); // prints '10'
console.log(instance.dHelper()); // prints '20'