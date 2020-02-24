type DiceOutput = 1 | 2 | 3 | 4 | 5 | 6;
function rollDice(): DiceOutput {
	const role = Math.ceil( Math.random() * 6 ) ;
	switch (role) {
		case 1:
			return 1
		case 2:
			return 2
		case 3:
			return 3
		case 4:
			return 4
		case 5:
			return 5
		case 6:
			return 6
		default:
			return 1
	}
}
console.log( rollDice() );
console.log( rollDice() );
console.log( rollDice() );
console.log( rollDice() );
console.log( rollDice() );
console.log( rollDice() );
console.log( rollDice() );
console.log( rollDice() );
