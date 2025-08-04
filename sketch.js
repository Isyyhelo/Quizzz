function verificarResposta() {
  const resposta = document.getElementById('resposta').value.trim();
  const mensagem = document.getElementById('mensagem');

  if (resposta === '') {
    mensagem.textContent = 'Por favor, insira uma resposta.';
    return;
  }
  const respostaCorreta = 'Goku';
  if (resposta.toLowerCase() === respostaCorreta.toLowerCase()) {
    mensagem.textContent = 'Você acertou! Redirecionando para a página do Goku...';

    // Aguarde 5 segundos (5000 milissegundos) antes de redirecionar
    setTimeout(function () {
      window.location.href = 'index2.html';
    }, 5000);
  } else {
    mensagem.textContent = 'Você errou! Tente novamente.';
  }

  document.getElementById('resposta').value = '';
}
