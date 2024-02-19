document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const videoItems = document.querySelectorAll(".video-item");

  let currentIndex = 0;

  function showVideo(index) {
    videoItems.forEach((item, i) => {
      item.style.display = i === index ? "block" : "none";
    });
  }

  function nextVideo() {
    currentIndex = (currentIndex + 1) % videoItems.length;
    showVideo(currentIndex);
  }

  function prevVideo() {
    currentIndex = (currentIndex - 1 + videoItems.length) % videoItems.length;
    showVideo(currentIndex);
  }

  showVideo(currentIndex);

  document.querySelector(".carousel").addEventListener("click", function (event) {
    if (event.target.classList.contains("next")) {
      nextVideo();
    } else if (event.target.classList.contains("prev")) {
      prevVideo();
    }
  });
});

// CARROSSEL DEPOIMENTOS OK!

let dataTermino = new Date().getTime() + (20 * 24 * 60 * 60 * 1000); // 20 dias a partir do momento atual

const atualizarCronometro = setInterval(function() {
  const agora = new Date().getTime();
  let diferenca = dataTermino - agora;

  if (diferenca <= 0) {
    // Calcula a proxíma data sempre que o tempo esgotar
    dataTermino = agora + (20 * 24 * 60 * 60 * 1000); 
    diferenca = dataTermino - agora;
  }

  const horas = Math.floor(diferenca / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById("horas").innerText = formatarTempo(horas);
  document.getElementById("minutos").innerText = formatarTempo(minutos);
  document.getElementById("segundos").innerText = formatarTempo(segundos);

}, 1000);

function formatarTempo(tempo) {
  return tempo < 10 ? "0" + tempo : tempo;
}
// CRONOMETRO OK!! 

document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('#faq h3');

  faqItems.forEach(item => {
      item.addEventListener('click', function () {
          const answer = this.nextElementSibling;

          if (answer.style.display === 'block' || answer.style.display === '') {
              answer.style.display = 'none';
          } else {
              faqItems.forEach(item => {
                  item.nextElementSibling.style.display = 'none';
              });
              answer.style.display = 'block';
          }
      });
  });
});
//ACORDEÃO OK