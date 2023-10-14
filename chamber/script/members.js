//const baseURL = "https://ereksonbrenda.github.io/wdd230/chamber/data/members.json";
const CARDS_ELEMENT = document.querySelector('#cards');
const linksURL = "data/members.json";

async function getMemberData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members); // note that we reference the members array of the JSON data object, not just the object
  }
  
  getMemberData();

  const displayMembers = (members) => {
    members.forEach((member) => {
      let card = document.createElement('section');
      let name = document.createElement('h3'); 
      let portrait = document.createElement('img');
      let address = document.createElement('div');
      let phoneNumber = document.createElement('div');
      let website = document.createElement('div');
      let membershipLevel = document.createElement('div');
      let membershipLength = document.createElement('div');
    
      portrait.setAttribute('src', `${member.imageurl}`);
      portrait.setAttribute('alt', `${member.name}`); 
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
      name.textContent = `${member.name}`; 
      address.textContent = `Address: ${member.address}`;
      phoneNumber.textContent = `Phone Number: ${member.phonenumber}`; 
      website.textContent = `Website: ${member.website}`;
      membershipLevel.textContent = `Membership Level: ${member.memberlevel}`;
      membershipLength.textContent = `Membership Length: ${member.memberlength}`;

      
      card.appendChild(portrait);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phoneNumber);
      card.appendChild(website);
      card.appendChild(membershipLevel);
      card.appendChild(membershipLength);
  
      CARDS_ELEMENT.appendChild(card);
     }); 
   }
