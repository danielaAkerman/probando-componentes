function form(element) {
  const componentEl = document.createElement("section");
  componentEl.innerHTML = `
    <div class="contenedor-form">
          <h2 class="contacto">Contacto</h2>
          <form class="form">
            <div class="fieldset">
              <label for="nombre" class="label">NOMBRE</label>
              <input id="nombre" class="input-nombre" type="text" />
            </div>
            <div class="fieldset">
              <label for="email" class="label">EMAIL</label>
              <input id="email" class="input-email" type="email" />
            </div>
            <div class="fieldset">
              <label for="message" class="label">MENSAJE</label>
              <textarea id="message" class="input-mensaje"></textarea>
            </div>
            <button class="boton">Enviar</button>
          </form>
        </div>
    `;

  const form = componentEl.querySelector(".form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("el form se envió");
  });

  element.appendChild(componentEl);
}
