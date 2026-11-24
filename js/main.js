// Funcionalidades JavaScript del sitio Alabasta Turismo

// Botón para volver al inicio
const topBtn = document.getElementById("topBtn");
if (topBtn) {
  window.addEventListener("scroll", () => {
    topBtn.classList.toggle("show", window.scrollY > 450);
  });
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Mensajes temporales
function toast(mensaje) {
  const elemento = document.getElementById("toast");
  if (!elemento) return;
  elemento.textContent = mensaje;
  elemento.style.display = "block";
  window.setTimeout(() => { elemento.style.display = "none"; }, 2600);
}

// Modo oscuro: se conserva la preferencia al navegar entre páginas
const botonModo = document.getElementById("btn-modo");
const modoGuardado = localStorage.getItem("modo-oscuro");
if (modoGuardado === "activo") document.body.classList.add("modo-oscuro");
function actualizarTextoModo() {
  if (!botonModo) return;
  const oscuro = document.body.classList.contains("modo-oscuro");
  botonModo.textContent = oscuro ? "☀ Modo claro" : "🌙 Modo oscuro";
  botonModo.setAttribute("aria-label", oscuro ? "Activar modo claro" : "Activar modo oscuro");
}
actualizarTextoModo();
if (botonModo) {
  botonModo.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
    localStorage.setItem("modo-oscuro", document.body.classList.contains("modo-oscuro") ? "activo" : "claro");
    actualizarTextoModo();
  });
}

// Newsletter
const newsletter = document.getElementById("newsletterForm");
if (newsletter) {
  newsletter.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (!newsletter.checkValidity()) {
      newsletter.reportValidity();
      toast("Revisá el correo antes de suscribirte.");
      return;
    }
    toast("¡Te suscribiste a las novedades de Alabasta!");
    newsletter.reset();
  });
}

// Validación del formulario de contacto
const contacto = document.getElementById("contactForm");
if (contacto) {
  contacto.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (!contacto.checkValidity()) {
      contacto.reportValidity();
      toast("Completá los campos obligatorios correctamente.");
      return;
    }
    toast("¡Consulta enviada correctamente!");
    contacto.reset();
  });
}
