// Selecionando os elementos
const imageContainers = document.querySelectorAll('.image-container');
const expandedImages = document.querySelectorAll('.expanded-image');
const expandedBackground = document.getElementById('expandedBackground');

// Função para mostrar a imagem expandida e o fundo preto
imageContainers.forEach((container, index) => {
  container.addEventListener('click', function() {
    expandedImages[index].classList.toggle('show');
    expandedBackground.classList.toggle('show');
  });
});

// Fechar a imagem expandida e o fundo preto ao clicar fora
window.addEventListener('click', function(event) {
  if (![...imageContainers].some(container => container.contains(event.target))) {
    expandedImages.forEach(image => image.classList.remove('show'));
    expandedBackground.classList.remove('show');
  }
});