const requestURL = 'https://chrisj63-git.github.io/coc/jsonfiles/chamber-members.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const members = jsonObject['chamber-members'];
    const cards = document.querySelector('.cards');

    members.forEach(member => {
      
let card = document.createElement('section');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let h4 = document.createElement('h4');
let h5 = document.createElement('h5');
let p = document.createElement('p');
let image = document.createElement('img');

h2.innerHTML = `${member.name}`;
h3.innerHTML = `${member.contact}`;
h4.innerHTML = `${member.phone}`;
h5.innerHTML = `${member.email}`;
p.innerHTML = `${member.website}`;
image.setAttribute('src', member.logo);
image.setAttribute('alt', h2.textContent + ` - ${member.order}`);


card.append(h2);
cards.append(card);
card.append(h3);
card.append(h4);
card.append(h5);
card.append(p);
card.append(image);

    
    });
  });
