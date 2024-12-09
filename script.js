// Escuchar el evento de teclado "keydown"
document.addEventListener('keydown', function(event) {
  // Seleccionar el elemento dinámico donde se mostrará la tecla
  const keyLabel = document.getElementById('keyValue');
  
  // Si la tecla presionada es "Espacio", mostrar "Espacio", de lo contrario mostrar el nombre de la tecla
  keyLabel.textContent = event.key === ' ' ? 'Espacio' : event.key;
});
