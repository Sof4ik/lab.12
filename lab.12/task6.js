function setInnerText(specialId, newValue) {
    let special = document.getElementById(specialId);
    if(special){
        special.innerText = newValue;
        console.log('Your new InnerText: ', newValue);
        console.log('true')
    }
    else {
        console.log('false')
    }
}

let idName = 'text';

setInnerText(idName, 'give text');

idName = 'span';
let text = 'text';

setInnerText(idName, text);

text = 'give give give give';

setInnerText('paragraph', text);