// variable declaration
const loginSection = document.querySelector('.login-section');
const loginButton = document.querySelector('#login');
const logoutButton = document.querySelector('#login');
const formField = document.querySelector('form');
const userSection = document.querySelector('.user-section');
const errorsField = document.querySelector('#errors');
const userField = document.querySelector('.users');
const statusField = document.querySelectorAll('.status');


let loggedIn = false;
let present = false;
let errors = [];
let users = [
    {name:'Paul Onyekwelu', email: 'paul@gmail.com', password: '12345'},
    {name:'Tolu Kayode', email: 'tolu@gmail.com', password: '12345'},
    {name:'Amaka Linda', email: 'amaka@gmail.com', password: '12345'},
    {name:'Amina Abdul', email: 'Amina@gmail.com', password: '12345'},
]


// eventlisteners
window.addEventListener('load', e => {
    updateSection(loggedIn);
})


loginButton.addEventListener('click', e => {
    e.preventDefault();
    const email = formField.email.value;
    const password = formField.password.value;
    // logIn(email, password, users);
    if(email && password){
        loggedIn = true;
        updateSection(loggedIn);
    }
})

statusField.forEach( status => {
    status.addEventListener('click', e => {
        e.preventDefault();
        if(!present){
            present = true;
            status.textContent = 'Present';
            status.style.backgroundColor = 'green';
        }else{
            present = false;
            status.textContent = 'Absent';
            status.style.backgroundColor = 'red';
        }
    })
})


logoutButton.addEventListener('click', e => {
    e.preventDefault();
    loggedIn = false;
    updateSection(loggedIn);
})


function updateSection(signedIn) {
    if(signedIn === true){
        loginSection.style.display = 'none';
        userSection.style.display = 'block';
    }else{
        loginSection.style.display = 'block';
        userSection.style.display = 'none';
    }
}



// function declaration
// function logIn (email, password,userArray) {
//     errors = [];
//     for(let user of userArray){
//         if(user['email'] === email && user['password'] === password){
//             loggedIn = true;
//             updateSection(loggedIn);
//             return;
//         }
//     }
//     email = '';
//     password = '';
//     errors.push('Invalid details...');
//     showErrors(errors, errorsField);
// }


// function displayUsers (arr) {
//     for(let user of arr){
//         const elem = document.createElement('div');
//         let name = document.createElement('p');
//         let signin = document.createElement('input');

//     }
// }

// function showErrors (errorsArr, field){
//     for(let error of errorsArr){
//         let elem = document.createElement('p');
//         elem.innerHTML = error;
//         elem.style.color = 'red';
//         field.appendChild(elem);
//     }
// }
