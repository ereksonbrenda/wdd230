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

var today = new Date();
var dd = (today.getDate()).toString();
var mm = (today.getMonth()+1).toString(); 
var yy = (today.getFullYear()-2000).toString();
if(dd<10) 
{
    dd='0'+dd;
} 
if(mm<10) 
{
    mm='0'+mm;
} 
today = yy+mm+dd;


document.getElementById('timeStamp').value= today ; 