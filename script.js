document.addEventListener('DOMContentLoaded', function() {
  // Escucha el evento 'DOMContentLoaded' que se dispara cuando la página se ha cargado completamente

  // Obtén la imagen del personaje con la clase 'HugoS'
  var characterImage = document.querySelector('.HugoS');

  // Añade el evento 'mouseover' a la imagen del personaje Hugo
  characterImage.addEventListener('mouseover', function() {
    // Llama a la función para mostrar el mensaje de Hugo
    showHugoMessage();
  });

  // Añade el evento 'mouseout' a la imagen del personaje Hugo
  characterImage.addEventListener('mouseout', function() {
    // Llama a la función para ocultar el mensaje de Hugo
    hideHugoMessage();
  });

  // Obtén el elemento con la clase 'background-image'
  var background = document.querySelector('.background-image');

  // Obtén el elemento del rayo con el id 'lightning'
  var lightning = document.getElementById('lightning');

  // Obtén el elemento de audio con el id 'thunder-audio'
  var audio = document.getElementById('thunder-audio');

  // Ajusta el volumen del audio del rayo
  audio.volume = 0.8; // Aumenta el volumen al 80%

  // Agrega un evento 'click' al elemento de fondo
  background.addEventListener('click', function(event) {
    // Maneja el evento de clic en el fondo

    // Obtén las coordenadas del clic relativas al rectángulo del fondo
    var rect = background.getBoundingClientRect();
    var clickX = event.clientX - rect.left;
    var clickY = event.clientY - rect.top;

    // Calcula las coordenadas del centro y la posición vertical donde el rayo debe aparecer
    var centerX = rect.width / 2;
    var centerY = rect.height / 2 + 15;

    // Verifica si el clic está dentro del rango del centro y la posición vertical
    if (clickX >= centerX - 50 && clickX <= centerX + 50 && clickY >= centerY) {
      // Si el clic está dentro del rango, muestra el rayo y reproduce el audio
      lightning.style.opacity = '1';
      audio.play();

      // Espera 1 segundo y luego oculta el rayo y detiene el audio
      setTimeout(function() {
        lightning.style.opacity = '0';
        audio.pause();
        audio.currentTime = 0;
      }, 2500);
    }
  });

  // Función para mostrar el mensaje de Hugo
  function showHugoMessage() {
    var messageContainer = document.getElementById('hugo-message-container');
    messageContainer.style.display = 'block';
  }

  // Función para ocultar el mensaje de Hugo
  function hideHugoMessage() {
    var messageContainer = document.getElementById('hugo-message-container');
    messageContainer.style.display = 'none';
  }
});
