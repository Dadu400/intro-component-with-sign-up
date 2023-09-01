const form = document.getElementById('form')
const fname = document.getElementById('firstname')
const lname = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const nameerr = document.querySelector("#nameerr")
const lnameerr = document.querySelector("#lnameerr")
const emailerr = document.querySelector("#emailerr")
const passerr = document.querySelector("#passerr")



form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
})

const nameRegex = /^[A-Za-z]+$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function clearErrors() {
    nameerr.innerHTML = '';
    lnameerr.innerHTML = '';
    emailerr.innerHTML = '';
    passerr.innerHTML = '';

    fname.classList.remove('error-icon');
    lname.classList.remove('error-icon');
    email.classList.remove('error-icon');
    password.classList.remove('error-icon');
}

function validateForm(e) {
    clearErrors();

    if(fname.value === '') {
        nameerr.innerHTML = 'First Name cannot be empty' ;
        fname.classList.add('error-icon');
        return;
    } else if (!nameRegex.test(fname.value)) {
        nameerr.innerHTML = 'First Name cannot contain number'
        fname.classList.add('error-icon');
        return;
    } 

    if(lname.value === '') {
        lnameerr.innerHTML = 'Last Name cannot be empty';
        lname.classList.add('error-icon');
        return;
    } else if (!nameRegex.test(lname.value)) {
        lnameerr.innerHTML = 'Last Name cannot contain number'
        lname.classList.add('error-icon')
        return;
    } 

    if(email.value === '') {
        emailerr.innerHTML = 'Email cannot be empty'
        email.classList.add('error-icon')
        return;
    } else if (!emailRegex.test(email.value)) {
        emailerr.innerHTML = 'Looks like this is not an email'
        email.classList.add('error-icon')
        return;
    } 


    if(password.value === '') {
        passerr.innerHTML = 'Password cannot be empty'
        password.classList.add('error-icon')
        return;
    } else if (!passwordRegex.test(password.value)) {
        passerr.innerHTML = 'Password should contain numbers'
        return;
    } 

    console.log("First Name:", fname.value)
    console.log("Last Name:", lname.value)
    console.log("Email:", email.value)
}

