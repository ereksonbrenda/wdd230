const baseURL = "https://ereksonbrenda.github.io/wdd230/";
const linksURL = "data/links.json";
//const linksURL = "https://ereksonbrenda.github.io/wdd230/data/links.json";
const activityListDiv = document.querySelector(".activity-list");
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
  }
  
  getLinks();

  const displayLinks = (data) =>{
    console.log(data.weeks);
    for(let item in data.weeks){
      console.log(data.weeks[item].week);
      var weekContainer = document.createElement("div");

      var weekTitle = document.createElement("span");
          weekTitle.innerHTML = data.weeks[item].week + ": ";

      for(let link in data.weeks[item].links){
        console.log(data.weeks[item].links[link].title);
        var linkName = document.createElement("a");
            linkName.innerHTML = data.weeks[item].links[link].title;
            linkName.setAttribute("href", data.weeks[item].links[link].url);
            linkName.setAttribute("target", "_blank");
        weekTitle.appendChild(linkName);
        var separator = document.createTextNode(' | ');
        weekTitle.appendChild(separator);
      }

      weekContainer.appendChild(weekTitle);
      activityListDiv.appendChild(weekContainer);
    }

  }

 // async function getLinks() {
  //  const response = await fetch(linksURL);
   // const data = await response.json();
   // displayLinks(data);
  //}
