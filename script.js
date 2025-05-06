document.getElementById('fichaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('mensagemSucesso').style.display = 'block';
    this.reset();
  });