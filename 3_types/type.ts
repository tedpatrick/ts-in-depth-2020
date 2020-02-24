type Tree<T> = {
    value: T;
    left: Tree<T>;
    right?: Tree<T>;
}