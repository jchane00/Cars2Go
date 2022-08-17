const loginFormHandler = async (event) => {
  event.preventDefault();

  const employeeLogin = document.querySelector('#employee-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (employeeLogin && password) {
    const response = await fetch('/api/add', {
      method: 'POST',
      body: JSON.stringify({ employeeLogin, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);