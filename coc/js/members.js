const requestURL = 'https://chrisj63-git.github.io/coc/jsonfiles/chamber-members.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['members'];
    const cards = document.querySelector('.cards');

    members.forEach(member => {
      
let card = document.createElement('section');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let h4 = document.createElement('h4');
let p = document.createElement('p');
let image = document.createElement('img');

h2.innerHTML = `Business Name: ${members.name}`;
h3.innerHTML = `Contact: ${members.contact}`;
h4.innerHTML = `Phone: ${members.phone}`;
p.innerHTML = `E-mail: ${prophet.email}`;
image.setAttribute('src', prophet.logo);
image.setAttribute('alt', h2.textContent + ` - ${members.order}`);

card.append(h2);
cards.append(card);
card.append(h3);
card.append(h4);
card.append(p);
card.append(image);

    
    });
  });
