const DATA_URL = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const CARDS_ELEMENT = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(DATA_URL);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
  }
  
  getProphetData();

  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      let card = document.createElement('section');
      let fullName = document.createElement('h2'); 
      let portrait = document.createElement('img');
      let birthDate = document.createElement('div');
      let birthPlace = document.createElement('div');
  
      fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');

      birthDate.textContent = `Date of Birth: ${prophet.birthdate}`; // fill in the blank
      birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`; // fill in the blank
      
      card.appendChild(fullName);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);//fill in the blank
      card.appendChild(portrait);
  
      CARDS_ELEMENT.appendChild(card);
     }); // end of arrow function and forEach loop
   }
