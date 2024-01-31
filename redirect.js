 
document.addEventListener('DOMContentLoaded', function () {
    // Agrega un listener para cada enlace del menú
    document.querySelectorAll('a.nav-link').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Obtiene el objetivo del enlace (el valor del atributo href)
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Desplazamiento suave hacia el objetivo
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });


function redirectToLogin() {
    // Reemplaza 'tu_pagina_de_login.html' con la ruta real de tu página de inicio de sesión
    window.location.href = 'login.html';
}

// Agrega un evento de clic al enlace de login
document.getElementById('loginLink').addEventListener('click', redirectToLogin);