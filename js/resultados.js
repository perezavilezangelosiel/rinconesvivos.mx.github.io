document.addEventListener('DOMContentLoaded', () => {
  const nombre = localStorage.getItem('nombreUsuario') || 'Usuario';
  const puntuacion = localStorage.getItem('puntuacion') || 0;

  const mensaje = document.getElementById('mensaje');
  mensaje.textContent = `${nombre}, obtuviste ${puntuacion} de 3 respuestas correctas.`;
});
