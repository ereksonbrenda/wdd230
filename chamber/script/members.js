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
    
      portrait.setAttribute('src', `${member.imageLink}`);
      portrait.setAttribute('alt', `${member.name}`); 
      portrait.setAttribute('loading', 'lazy');
      //portrait.setAttribute('width', '150');
      portrait.setAttribute('height', '800');
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
   const gridbutton = document.querySelector(".grid");
   const listbutton = document.querySelector(".list");
   const display = document.querySelector("article");
   
   // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
   
   gridbutton.addEventListener("click", () => {
     // example using arrow function
     display.classList.add("grid");
     display.classList.remove("list");
   });
   
   listbutton.addEventListener("click", showList); // example using defined function
   
   function showList() {
     display.classList.add("list");
     display.classList.remove("grid");
   }
   