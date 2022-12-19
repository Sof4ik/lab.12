function getNextNumber(arg) {
    if (arg === 0) {
        return arg = 0;
    }
    else if (arg < 0) {
        return ++arg;
    }
    else if (arg > 0) {
        return ++arg;
    }
}

console.log(getNextNumber(9));

console.log(getNextNumber(-11));

let a = 20

console.log(getNextNumber(a));

let b = -20

let c = a + b;

console.log(getNextNumber(c));