
function identity<T>(arg: T): T {
    return arg;
}
const numbery = identity<number>(23);
const stringy = identity<string>('hello');
const booleany = identity<boolean>(true);