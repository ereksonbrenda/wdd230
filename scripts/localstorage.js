const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if(numvisits !== 0) {
    visitsDisplay.textContent = `This is your first time visiting. Welcome.`;
}
numvisits++;

localStorage.setItem("numVisits-ls", numVisits);