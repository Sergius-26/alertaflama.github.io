document.addEventListener("DOMContentLoaded", () => {
  const opiniones = [
  {
    foto: "imagenesTF/fotoComentario.jpg",
    estrellas: "★★★★★",
    comentario: "Excelente servicio, las notificaciones llegaron justo a tiempo."
  },
  {
    foto: "imagenesTF/fotocomentario2.jpg",
    estrellas: "★★★★☆",
    comentario: "Muy útil para estar al tanto de los incendios en mi zona."
  },
  {
    foto: "imagenesTF/fotoComentario3.jpg",
    estrellas: "★★★☆☆",
    comentario: "El sistema funciona, pero me gustaría más personalización."
  }
  
];

let indice = 0;

function mostrarOpinion(index) {
  const foto = document.getElementById("clienteFoto");
  const estrellas = document.getElementById("clienteEstrellas");
  const comentario = document.getElementById("clienteComentario");

  foto.style.backgroundImage = `url(${opiniones[index].foto})`;
  estrellas.textContent = opiniones[index].estrellas;
  comentario.textContent = opiniones[index].comentario;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  indice = (indice - 1 + opiniones.length) % opiniones.length;
  mostrarOpinion(indice);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  indice = (indice + 1) % opiniones.length;
  mostrarOpinion(indice);
});

// Inicializa con la primera opinión
mostrarOpinion(indice);

  // Registro
  const formulario = document.getElementById("formularioRegistro");
  const mensaje = document.getElementById("mensajeExito");

  if (formulario) {
    formulario.addEventListener("submit", function(e) {
      e.preventDefault(); // Evita que se envíe el formulario
      mensaje.style.display = "block"; // Muestra mensaje
      this.reset(); // Limpia el formulario

      // Oculta el mensaje luego de 5 segundos
      setTimeout(() => {
        mensaje.style.display = "none";
      }, 5000);
    });
  }


});

const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-horizontal");

// Al hacer clic en el botón de hamburguesa
btn.addEventListener("click", () => {
  // Alterna (agrega o quita) la clase "active" en el menú
  // Esto hace que se muestre o se oculte
  menu.classList.toggle("active");

  // (opcional) También puedes alternar una clase en el botón si quieres cambiar su apariencia
  // btn.classList.toggle("open");
});

/*document.querySelector('.login-btn').onclick = () => {
  window.location.href = 'login.html';
};*/

function solicitarServicio(nombreServicio) {
  alert(`Has solicitado el servicio de: ${nombreServicio}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const secciones = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".menu-horizontal li a");

  window.addEventListener("scroll", () => {
    let current = "";

    secciones.forEach(seccion => {
      const top = window.scrollY;
      const offset = seccion.offsetTop - 100;
      const height = seccion.offsetHeight;
      const id = seccion.getAttribute("id");

      if (top >= offset && top < offset + height) {
        current = id;
      }
    });

    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
