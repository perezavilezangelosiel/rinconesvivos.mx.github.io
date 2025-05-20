document.addEventListener("DOMContentLoaded", () => {
  const carrusel = document.getElementById("carrusel");
  const btnPrev = document.getElementById("prevBtn");
  const btnNext = document.getElementById("nextBtn");

  btnPrev.addEventListener("click", () => {
    carrusel.scrollBy({ left: -300, behavior: "smooth" });
  });

  btnNext.addEventListener("click", () => {
    carrusel.scrollBy({ left: 300, behavior: "smooth" });
  });
});

// Mostrar imagen ampliada en modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalImagen");
  const modalImg = document.getElementById("imagenAmpliada");
  const cerrar = document.getElementById("cerrarModal");

  document.querySelectorAll("#carrusel img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  cerrar.onclick = () => {
    modal.style.display = "none";
  };

  // Cierra el modal al hacer clic fuera de la imagen
  modal.onclick = e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
});
