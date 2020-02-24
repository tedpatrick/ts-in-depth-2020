interface Person {
    isDead: boolean;
    name?: string;
    age?: number;
}
const ted: Person = {
	isDead: false,
	name: 'Ted'
}
console.log( ted.name );
console.log( ted.isDead );