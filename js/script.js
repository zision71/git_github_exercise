
function registered(e) {
  e.preventDefault();
  alert('Your application has been registered');
}

function init() {
  const el = document.getElementById('register');
  el.addEventListener('click', registered, false);
}

document.addEventListener('DOMContentLoaded', init, false);