const fontFamilies = [
    'Arial', 'Times New Roman',
    'Verdana', 'Brush Script MT',
    'Tahoma', 'Garamond',
   ];

function random1() {
    if (document.getElementsByClassName('random-font')) {
        let first = document.querySelector('#one');
        let randomId = Math.floor(Math.random() * fontFamilies.length)
        console.log(randomId);
        first.style.fontFamily = fontFamilies[randomId];
    }
    else {
        console.log('Wrong class!')
    }
}

function random2() {
    if (document.getElementsByClassName('random-font')) {
        let second = document.querySelector('#two');
        let randomId = Math.floor(Math.random() * fontFamilies.length)
        console.log(randomId);
        second.style.fontFamily = fontFamilies[randomId];
    }
    else {
        console.log('Wrong class!')
    }
}

function random3() {
    if (document.getElementsByClassName('random-font')) {
        let third = document.querySelector('#three');
        let randomId = Math.floor(Math.random() * fontFamilies.length)
        console.log(randomId);
        third.style.fontFamily = fontFamilies[randomId];
    }
    else {
        console.log('Wrong class!')
    }
}