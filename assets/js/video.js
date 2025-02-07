// Obtendo os elementos do botão e do modal
const videoButton = document.getElementById('videoButton');
const videoModal = document.getElementById('videoModal');
const closeButton = document.getElementById('closeButton');
const videoPlayer = document.getElementById('videoPlayer');

// Função para abrir o vídeo
videoButton.onclick = function() {
  videoModal.style.display = 'flex'; // Exibe o modal
  videoPlayer.play(); // Inicia o vídeo automaticamente
}

// Função para fechar o vídeo e parar a reprodução
closeButton.onclick = function() {
  videoModal.style.display = 'none'; // Esconde o modal
  videoPlayer.pause(); // Pausa o vídeo
  videoPlayer.currentTime = 0; // Retorna ao início do vídeo
}

// Fechar o vídeo clicando fora do modal
window.onclick = function(event) {
  if (event.target === videoModal) {
    videoModal.style.display = 'none'; // Esconde o modal
    videoPlayer.pause(); // Pausa o vídeo
    videoPlayer.currentTime = 0; // Retorna ao início
  }
}


//Primeiro video galeria
// Obtendo os elementos do botão e do modal
const videoButton1 = document.getElementById('videoButton1');
const videoModal1 = document.getElementById('videoModal1');
const closeButton1 = document.getElementById('closeButton1');
const videoPlayer1 = document.getElementById('videoPlayer1');

// Função para abrir o vídeo
videoButton1.onclick = function() {
  videoModal1.style.display = 'flex'; // Exibe o modal
  videoPlayer1.play(); // Inicia o vídeo automaticamente
}

// Função para fechar o vídeo e parar a reprodução
closeButton1.onclick = function() {
  videoModal1.style.display = 'none'; // Esconde o modal
  videoPlayer1.pause(); // Pausa o vídeo
  videoPlayer1.currentTime = 0; // Retorna ao início do vídeo
}

// Fechar o vídeo clicando fora do modal
window.onclick = function(event) {
  if (event.target === videoModal1) {
    videoModal1.style.display = 'none'; // Esconde o modal
    videoPlayer1.pause(); // Pausa o vídeo
    videoPlayer1.currentTime = 0; // Retorna ao início
  }
}


