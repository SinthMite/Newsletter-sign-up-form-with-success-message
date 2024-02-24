const errorMessage = document.getElementById('errorMessage');
const emailInput = document.getElementById('email');
const submit = document.getElementById('submit');
const form = document.getElementById('form');
const main = document.querySelector('main');
const popUp = document.getElementById('popUp');

function newPage() {
    main.style.display = "none";
    popUp.style.display = "";
}
function fail(){
    errorMessage.hidden = false;
    emailInput.style.borderColor = "hsl(4, 100%, 67%)"
}
form.addEventListener('submit', function(event){
    event.preventDefault();
    newPage()
})