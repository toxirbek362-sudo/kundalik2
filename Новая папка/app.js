const content = document.querySelector('.content');

content.style.display = 'flex';
content.style.alignItems = 'center';
content.style.justifyContent = 'center';
content.style.gap = '50px';

const card = document.createElement('div');
card.style.width = '400px';
card.style.border = '1px solid #000';
card.style.padding = '20px';
card.style.borderRadius = '2px';
card.style.textAlign = 'center';

const img = document.createElement('img')
img.setAttribute('src', './twitter.svg')
img.setAttribute('alt', 'twitter icon')
img.setAttribute('width', '100px')
img.setAttribute('height', '100px')

const title = document.createElement('h2');
title.style.fontSize = '60px';
title.style.fontFamily = 'Times New Roman';
title.textContent = 'TWITTER'

const text = document.createElement('p');
text.style.fontSize = '40px';
text.style.fontFamily = 'Times New Roman';
text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing.'


const button = document.createElement('button')
button.style.fontSize = '30px'
button.style.width = '200px'
button.style.height = '60px'
button.style.borderRadius = '5px'
button.style.color = '#fff'
button.style.backgroundColor = '#000'
button.textContent = 'Learn More'

card.appendChild(img)
card.appendChild(title)
card.appendChild(text)
card.appendChild(button)


// ----------------------- CARD-2 ------------------ //

const card2 = document.createElement('div');
card2.style.width = '400px';
card2.style.border = '1px solid #000';
card2.style.padding = '20px';
card2.style.borderRadius = '2px';
card2.style.textAlign = 'center';

const img2 = document.createElement('img')
img2.setAttribute('src', './instagram.svg')
img2.setAttribute('alt', 'instagram icon')
img2.setAttribute('width', '100px')
img2.setAttribute('height', '100px')

const title2 = document.createElement('h2');
title2.style.fontSize = '60px';
title2.style.fontFamily = 'Times New Roman';
title2.textContent = 'INSTAGRAM'

const text2 = document.createElement('p');
text2.style.fontSize = '40px';
text2.style.fontFamily = 'Times New Roman';
text2.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing.'


const button2 = document.createElement('button')
button2.style.fontSize = '30px'
button2.style.width = '200px'
button2.style.height = '60px'
button2.style.borderRadius = '5px'
button2.style.color = '#fff'
button2.style.backgroundColor = '#000'
button2.textContent = 'Learn More'

card2.appendChild(img2)
card2.appendChild(title2)
card2.appendChild(text2)
card2.appendChild(button2)

// ----------------------- CARD-3 ------------------ //

const card3 = document.createElement('div');
card3.style.width = '400px';
card3.style.border = '1px solid #000';
card3.style.padding = '20px';
card3.style.borderRadius = '2px';
card3.style.textAlign = 'center';



const img3 = document.createElement('img')
img3.setAttribute('src', './youtube.svg')
img3.setAttribute('alt', 'youtube icon')
img3.setAttribute('width', '100px')
img3.setAttribute('height', '100px')

const title3 = document.createElement('h2');
title3.style.fontSize = '60px';
title3.style.fontFamily = 'Times New Roman';
title3.textContent = 'YOUTUBE'

const text3 = document.createElement('p');
text3.style.fontSize = '40px';
text3.style.fontFamily = 'Times New Roman';
text3.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing.'


const button3 = document.createElement('button')
button3.style.fontSize = '30px'
button3.style.width = '200px'
button3.style.height = '60px'
button3.style.borderRadius = '5px'
button3.style.color = '#fff'
button3.style.backgroundColor = '#000'
button3.textContent = 'Learn More'

card3.appendChild(img3)
card3.appendChild(title3)
card3.appendChild(text3)
card3.appendChild(button3)


content.appendChild(card)
content.appendChild(card2)
content.appendChild(card3)



