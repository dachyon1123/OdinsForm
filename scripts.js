let submit = document.getElementById('submit-button');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');



submit.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(password.value)
  if (password.value !== confirmPassword.value) {
    password.classList.add('invalid')
    confirmPassword.classList.add('invalid')
  } else {
    password.classList.remove('invalid')
    confirmPassword.classList.remove('invalid')
  }
})