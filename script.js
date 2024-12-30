// script.js

let currentIndex = 0; // Índice da imagem atual
const images = document.querySelectorAll('.coracao-imagem img'); // Seleciona todas as imagens
const totalImages = images.length;

function showNextImage() {
  // Aumenta o índice atual
  currentIndex = (currentIndex + 1) % totalImages;

  // Move o carrossel para a imagem correspondente
  const carrossel = document.getElementById('carrossel');
  carrossel.style.transform = `translateX(-${currentIndex * 100}%)`; // Muda a posição das imagens
}

// Passa automaticamente para a próxima imagem a cada 3 segundos
setInterval(showNextImage, 3000); // 3000ms = 3 segundos
