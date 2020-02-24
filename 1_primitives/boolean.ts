
// implicit
const alwaysFalse = false;
// explicit
const alwaysTrue : boolean = true;
const falsy: boolean = ( alwaysFalse && alwaysTrue );
const truthy: boolean = ( alwaysFalse || alwaysTrue );
console.log( falsy );
console.log( truthy );