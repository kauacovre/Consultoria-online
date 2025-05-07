document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    if (email && senha) {
      window.location.href = 'dashboard.html';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });