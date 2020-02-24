function addNumbers (
	a1: number = 0,
	a2: number = 0
): number {
	return a1 + a2;
}

addNumbers( 1, 2 );
//addNumbers( 1, '2' );
//addNumbers( true, 2 );

const addStrings = (
	a1: string = '',
	a2: string = ''
): string => {
	return a1 + a2;
}

addStrings( '1', '2' );
//addStrings( 1, '2' );
//addStrings( '1', true );
