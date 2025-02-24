
const loginButton = document.querySelector('.login');
const signupButton = document.querySelector('.signup');
const loginBox = document.querySelector('.login-box');
const signupBox = document.querySelector('.signup-box');
const slider = document.querySelector('.slider');

loginButton.addEventListener('click', () => {
    loginBox.style.display = 'flex';
    signupBox.style.display = 'none';
    slider.classList.remove('moveslider');
});

signupButton.addEventListener('click', () => {
    signupBox.style.display = 'flex';
    loginBox.style.display = 'none';
    slider.classList.add('moveslider');
});
