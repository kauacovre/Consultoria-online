function showTab(tabId) {
    document.getElementById('cadastro').classList.add('hidden');
    document.getElementById('retorno').classList.add('hidden');
    document.getElementById(tabId).classList.remove('hidden');
  }