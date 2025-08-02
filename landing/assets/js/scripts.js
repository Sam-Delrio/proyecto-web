//boton login
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("login-popup");
  const ingresoBtn = document.querySelector(".ingreso");
  const closeBtn = document.querySelector(".close-btn");

  if (ingresoBtn) {
    ingresoBtn.addEventListener("click", () => {
      popup.style.display = "block";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }
  
  // Cerrar si el usuario hace clic fuera del popup
  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});

