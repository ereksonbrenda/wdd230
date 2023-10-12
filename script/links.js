const baseURL = "https://ereksonbrenda.github.io/wdd230/";
const linksURL = "https://ereksonbrenda.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
  }
  
  getLinks();

  const displayLinks = (weeks) =>{
    weeks.weeks[0].links.foreach(url =>(console.log(url)));
  }

 // async function getLinks() {
  //  const response = await fetch(linksURL);
   // const data = await response.json();
   // displayLinks(data);
  //}
