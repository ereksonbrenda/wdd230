const visitsDisplay = document.querySelector(".visits");
let numVisits = window.localStorage.getItem("numVisits-ls") || 0;
if(numVisits == 0) {
    visitsDisplay.textContent = `This is your first time visiting. Welcome.`;
}else{
    visitsDisplay.textContent = numVisits;
}
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);