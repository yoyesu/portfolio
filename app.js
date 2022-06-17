let submitBtn = document.getElementById('submit');
let submittedMessage = document.querySelector('#submitted-message');

submitBtn.addEventListener('click', showSubmittedMessage());

function showSubmittedMessage(){
  submittedMessage.removeAttribute('class');
}