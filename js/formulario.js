function manejarEnvio(evento) {

  evento.preventDefault();

  const boton =
    document.getElementById(
      "boton-enviar"
    );

  boton.textContent =
    "✓ Consulta enviada";

  boton.style.background =
    "#2ecc71";

  boton.style.color =
    "#ffffff";

  boton.disabled = true;

  setTimeout(() => {

    boton.textContent =
      "Enviar consulta";

    boton.style.background = "";

    boton.style.color = "";

    boton.disabled = false;

    evento.target.reset();

  }, 3000);

}