function foo(e: number): number {
    return e;
}
type fooReturn = ReturnType<typeof foo>;
console.log(fooReturn);