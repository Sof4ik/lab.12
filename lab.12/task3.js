function getTriangleSquare(a, b, c) {
    console.log(a, b, c)
    let p = (a + b + c) / 2;
    console.log('Half perimeter: ', p);
    let s = Math.sqrt(p*(p - a)*(p - b)*(p - c));
    if (s > 0){
        console.log('Square of triangle: ', s);
    }
    else {
        console.log('Square is = ', s ,'because a + b < c')
    }                                                      
}

let a = 5;
let b = 6;
let c = 3;

getTriangleSquare(a, b, c)

a = 11;
b = 9;
c = 15;

getTriangleSquare(a, b, c)

a = 2;
b = 8;
c = 3;

getTriangleSquare(a, b, c)