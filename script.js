const errorMessage = document.getElementById('errorMessage');
const emailInput = document.getElementById('email');
const submit = document.getElementById('submit');
const form = document.getElementById('form');
const main = document.querySelector('main');
const popUp = document.getElementById('popUp');
const confirmation = document.getElementById('confirmation');
const dismiss = document.getElementById('dismiss');

function newPage() {
    main.style.display = "none";
    popUp.style.display = "";
}
function fail(){
    errorMessage.hidden = false;
    emailInput.style.borderColor = "hsl(4, 100%, 67%)"
}
function reset(){
    main.style.display = "";
    popUp.style.display = "none";
    emailInput.value = ""
}
form.addEventListener('submit', function(event){
    event.preventDefault();
    const emailPattern = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i;

    if (!emailPattern.test(emailInput.value)) {
        fail();
    } else {
        newPage();
        confirmation.textContent = `A confirmation email has been sent to ${emailInput.value}. Please open it and click the button inside to confirm your subscription.`;
        emailInput.style.fontWeight = "800";
    }
})

dismiss.addEventListener('click', reset);