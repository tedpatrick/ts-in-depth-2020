const bar = () => 42;
let yoo = 0;

let goo = yoo || bar(); // 42 - error (0 as falsy)

// ?? -> Nullish Coalescing
let koo = yoo ?? bar(); // 0