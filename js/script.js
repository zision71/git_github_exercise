const el = document.getElementById('register');
el.addEventListener('click', registered, false);

function registered(e) {
  e.preventDefault();
  alert('Your application has been registered');
}
