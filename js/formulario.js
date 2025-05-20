function iniciar() {
  const nombre = document.getElementById('nombre').value.trim();
  if (nombre === '') {
    alert('Por favor, escribe tu nombre.');
    return;
  }
  localStorage.setItem('nombreUsuario', nombre);
  document.getElementById('formulario-nombre').style.display = 'none';
  document.getElementById('informacion').style.display = 'block';
}

function mostrarCuestionario() {
  document.getElementById('informacion').style.display = 'none';
  document.getElementById('cuestionario').style.display = 'block';
}
