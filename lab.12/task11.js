function getRandomColor(type) {
    if (type == 'hex') {
        const letters = [
            'A', 'B',
            'C', 'D',
            'E', 'F'
        ];
        const hex = [];
        for (let i = 0; i < 9; i++) {
            let numLetter = Math.floor(Math.random() * 2)
            if (numLetter <= 0) {
                let randomLetter = Math.floor(Math.random() * letters.length)
                console.log(letters[randomLetter]);
                hex[i] = letters[randomLetter];
            }
            else if (numLetter >= 1) {
                let randomNumber = Math.floor(Math.random() * 10)
                console.log(randomNumber);
                hex[i] = randomNumber;
            }
        }
        console.log("#" + hex[0] + hex[1] + hex[2] + hex[3] + hex[4] + hex[5]);
    }
    else if (type == 'rgb') {
        let rgb = [];
        let min = 0;
        let max = 255;
        for(let i = 0; i < 6; i++) {
            function randomIntFromInterval(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }
            rgb[i] = randomIntFromInterval(min, max);
            console.log(rgb[i]);
        }
        console.log("rgb(" + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ")");
    }
    else {
        console.log(type, -1);
    }
}

getRandomColor('hexical');

let type = 'rgb';

getRandomColor(type);

type = 'hex';

getRandomColor(type);