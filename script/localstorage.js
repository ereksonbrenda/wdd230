const visitsDisplay = document.querySelector(".visits");
let numVisits = window.localStorage.getItem("numVisits-ls") || 0;
if(numVisits == 0) {
    visitsDisplay.textContent = `This is your first time visiting. Welcome.`;
}else{
    visitsDisplay.textContent = numVisits;
}
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "var(--dark)";
		main.style.color = "var(--light)";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "var(--light)";
		main.style.color = "var(--dark)";
		modeButton.textContent = "🕶️";
	}
});
