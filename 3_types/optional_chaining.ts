
let foo:any = {
	bar: {
		baz() { }
	}
};
foo = {};
let x = foo?.bar?.baz();
