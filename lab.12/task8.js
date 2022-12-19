function generateCard(someTitle, img, text) {
    const card = {
        title: someTitle,
        imageUrl: img,
        description: text
    };
    const body = document.querySelector('body');
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    let br = document.createElement('br');
    let span = document.createElement('span');
    let p = document.createElement('p');
    body.appendChild(div);
    div.classList.add('card');
    div.appendChild(h4);
    h4.innerText = card.title;
    div.appendChild(br);
    div.appendChild(span);
    span.innerHTML = card.imageUrl;
    div.appendChild(p);
    p.innerText = card.description;
};

imgSrc = '<img src="C:\Users\Lenovo\Desktop\lab12\gadyuchij-luk.jpg" alt="alternative text was not provided">';

const card = {
    title: 'My Card',
    imageUrl: imgSrc,
    description: 'flowerrrrr'
};


generateCard(card.title, card.imageUrl, card.description)