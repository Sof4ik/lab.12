function generateListOfNumberWithStep(first, last, step) {
    if (first > last) {
        let error = document.createElement('p');
        error.innerText = 'Wrong interval!';
        console.log('First number is higher that second. Cant create a list.')
    }
    else if (step <= 0) {
        let error = document.createElement('span');
        error.innerText = 'Interval must be positive number!';
        console.log('Step cant equal 0 or negative number. Cant create a list.')
    }
    else {
        let list = document.getElementById('list');
        for (let i = first; i <= last; i += step) {
            let li = document.createElement('li');
            li.innerText = i;
            list.appendChild(li);
        }
        let br = document.createElement('br');
        list.appendChild(br);
    }
}

generateListOfNumberWithStep(15, 10, 5);

generateListOfNumberWithStep(2, 20, -4);

let first = 2;
let second = 15;
let step = 7;

generateListOfNumberWithStep(first, second, step);

first = 34;
second = 121;

generateListOfNumberWithStep(first, second, 10);