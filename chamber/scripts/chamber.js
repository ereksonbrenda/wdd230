var counterContainer;
var resetButton;
var visitCount;
var welcomeStatement ;

function resetCount(){
    visitCount = 1;
    localStorage.setItem("page_view", 1);
    counterContainer.innerHTML = welcomeStatement;
}
function updateCount(){
    counterContainer = document.querySelector("span.visit-count");
    resetButton = document.querySelector("#reset");
    visitCount = localStorage.getItem("page_view");
    console.log(visitCount);
    welcomeStatement = "Welcome! Let us know if you have any questions.";

if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
    } else {
        resetCount();
    }
    counterContainer.innerHTML = visitCount;

    // Adding onClick event listener
    resetButton.addEventListener("click", resetCount() );
};

window.onload = updateCount;