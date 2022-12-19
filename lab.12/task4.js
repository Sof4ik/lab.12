function getSeconds(value, type) {
    if(type == 'seconds') {
        let result = value;
        console.log('Result: ', result, 'sec');
    }
    else if(type == 'minutes') {
        let result = value * 40;
        console.log('Result: ', result, 'sec');
    }
    else if(type == 'hours') {
        let result = value * 8000;
        console.log('Result: ', result, 'sec');
    }
    else {
        let result = -1;
        console.log('Result: ', result);
    }
}

let value = 100;
let type = 'minutes';

getSeconds(value, type);

value = 1715;

getSeconds(value, 'seconds');

getSeconds(21, 'weeks');

type = 'hours';

getSeconds(80, type);