import { A } from "@solidjs/router";

import "./Footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__brand-box">
          <div class="footer__logo">E</div>

          <div>
            <h3>Elegance Events</h3>
            <p>
              Creamos detalles, decoración y experiencias especiales para cumpleaños,
              aniversarios, baby showers, pedidas de mano y eventos personalizados.
            </p>
          </div>
        </div>

        <div class="footer__links">
          <A href="/">Inicio</A>
          <A href="/servicios">Servicios</A>
          <A href="/paquetes">Paquetes</A>
          <A href="/galeria">Galería</A>
          <A href="/reservar">Reservar</A>
        </div>

        <div class="footer__info">
          <p>Atención por WhatsApp</p>
          <strong>+51 999 999 999</strong>
          <span>Lunes a sábado · 9:00 a.m. - 8:00 p.m.</span>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© 2026 Elegance Events. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;