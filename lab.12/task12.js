function hex() {
    const hex = [];
    getRandomColor('hex');
    function getRandomColor(type) {
        if (type == 'hex') {
            const letters = [
                'A', 'B',
                'C', 'D',
                'E', 'F'
            ];
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
    }
    let hexx = document.getElementById('hex');
    hexx.style.color = "#" + hex[0] + hex[1] + hex[2] + hex[3] + hex[4] + hex[5];
}

function rgb() {
    let rgb = [];
    getRandomColor('rgb');
    function getRandomColor(type) {
        if (type == 'rgb') {
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
    }
    let rgbb = document.getElementById('rgb');
    rgbb.style.color = "rgb(" + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ")";
}