function cargarSeccion(id, archivo, callback) {
  fetch(archivo)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback();
    })
    .catch(err => console.error("Error cargando:", archivo, err));
}

// Cargar todas las secciones
cargarSeccion("seccion-hero", "./html/hero.html");
cargarSeccion("galeria", "./html/galeria.html");
cargarSeccion("tarifas", "./html/tarifas.html", () => {
  const tarifaCards = document.querySelectorAll('#tarifas .tarifa-card');
  tarifaCards.forEach(card => scrollObserver.observe(card));
});
cargarSeccion("seccion-tecnologias", "./html/tecnologias.html");
cargarSeccion("sobre_nosotros", "./html/sobre_nosotros.html", () => {
  const textoLocal = document.querySelector('#sobre_nosotros .texto_local');
  if (textoLocal) {
    observer.observe(textoLocal);
  }
});
cargarSeccion("contacto", "./html/mapa.html");

// Efecto parallax para la imagen de alfajores
window.addEventListener('scroll', () => {
  const img = document.getElementById('alfajores-img');
  if (img) {
    const scrolled = window.pageYOffset;
    img.style.transform = `translateY(${scrolled * -0.1}px) translateY(-50%)`;
  }
});
// Animación de entrada para el texto de Sobre Nosotros
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.1 });

// Animación de scroll para las tarjetas de tarifas
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
