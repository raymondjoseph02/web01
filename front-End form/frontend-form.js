let userFirstName = document.querySelector('#firstName')
let userLastName = document.querySelector('#lastName')
const usermail = document.querySelector('#email')
const userQueryType = document.querySelectorAll("input[name='queryType']:checked")
const termsandcondition = document.querySelectorAll("input[name='termsandcondition']:checked")
let inputs = document.querySelectorAll('input')
const form = document.querySelector('form');
let submitBtn =document.getElementById('submitBtn');
let  firstNameError = document.querySelector("firstNameError")
let isValid = false;
let message = document.getElementById('message')
console.log(inputs);


 


function preventFormToReload(params) {
    event.preventDefault()
}



function validation() {
    errorMessage()
    emailErrorMessage()
    lastNameerrorMessage()
    messageerr()

}


let Regex =/^[a-zA-Z]+$/;
let emailRegex =/^\S+[\Sa-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;


function errorMessage(){
    userName = userFirstName.value;

    if (!Regex.test(userName)) {
        document.getElementById("firstNameError").textContent='please fill out your first name'
        userFirstName.style.border='1px solid red'
    }else(
        userFirstName.style.border='1px solid black',

        document.getElementById("firstNameError").textContent=''

    )

    
};
function lastNameerrorMessage() {
    if (!Regex.test(userLastName.value)) {
        userLastName.style.border='1px solid red'
        document.querySelector('.lastNameErroeMessage').textContent="please fill out your first name"

    }else(
        userLastName.style.border='1px solid black',

        document.querySelector('.lastNameErroeMessage').textContent=""
    )
}
function emailErrorMessage() {
    if (!emailRegex.test(usermail.value)||usermail.value=="") {
        usermail.style.border='1px solid red'
        document.getElementsByClassName("email-error-message")[0].innerHTML="please fill out your correct email"
    }else {
        usermail.style.border='1px solid black',
        document.getElementsByClassName("email-error-message")[0].innerHTML=""

    }
}
function clearEemailErrorMessage() {
    usermail.style.border='1px solid black',
    document.getElementsByClassName("email-error-message")[0].innerHTML=""
}

function messageerr() {
    if (message.value == "") {
        document.getElementById('messageError')
        messageError.textContent = 'please'
        message.style.border = '1px solid red'
    }else{
        messageError.textContent = ''
       message.style.border= '1px solid #0c7d69';

    }
}

document.addEventListener('DOMContentLoaded', () => {
      const formElements = document.querySelectorAll('input, select, textarea');
      formElements.forEach((element, index) => {
        element.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            const nextElement = formElements[index + 1];
            if (nextElement) {
              nextElement.focus();
            }
          }
        });
      });
    });