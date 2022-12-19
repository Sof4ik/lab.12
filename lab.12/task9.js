let i = 0;

function generateCards(someTitle, img, text) {
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
    if (i % 2 == 0) {
        h4.innerText = `[` + i + `]` + card.title;
    }
    else {
        h4.innerText = card.title;
    }
    div.appendChild(br);
    div.appendChild(span);
    span.innerHTML = card.imageUrl;
    div.appendChild(p);
    p.innerText = card.description;
    i++;
};

const cards = [
    { title: 'My card A', imageUrl: '<img src="C:\Users\Lenovo\Desktop\lab12\gadyuchij-luk.jpg" alt="alternative text was not provided">', description: 'flowerrrr' },
    { title: 'My card B', imageUrl: '<img src="C:\Users\Lenovo\Desktop\lab12\pervocv3.jpg" alt="alternative text was not provided">', description: 'CUTE FLOWER!!' },
    { title: 'My card C', imageUrl: '<img src="C:\Users\Lenovo\Desktop\lab12\Pervocvety_50-650x650.jpg" alt="alternative text was not provided">', description: 'FLOWER' },
    { title: 'My card D', imageUrl: '<img src="C:\Users\Lenovo\Desktop\lab12\Весняні_квіти.jfif" alt="alternative text was not provided">', description: 'I love flowerrr' },
   ];

generateCards(cards[0].title, cards[0].imageUrl, cards[0].description)
generateCards(cards[1].title, cards[1].imageUrl, cards[1].description)
generateCards(cards[2].title, cards[2].imageUrl, cards[2].description)
generateCards(cards[3].title, cards[3].imageUrl, cards[3].description)