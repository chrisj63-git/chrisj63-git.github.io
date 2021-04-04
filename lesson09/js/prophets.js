const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    const cards = document.querySelector('.cards');

    prophets.forEach(prophet => {
      
let card = document.createElement('section');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let p = document.createElement('p');
let image = document.createElement('img');

h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
h3.innerHTML = `Date of Birth: ${prophet.birthdate}`;
p.innerHTML = `Place of Birth: ${prophet.birthplace}`;
image.setAttribute('src', prophet.imageurl);
image.setAttribute('alt', h2.textContent + ` - ${prophet.order}`);

card.append(h2);
cards.append(card);
card.append(h3);
card.append(p);
card.append(image);

    
    });
  });
