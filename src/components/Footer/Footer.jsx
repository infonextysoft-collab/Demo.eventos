import { A } from "@solidjs/router";

import "./Footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__brand-box">
          <h3>Elegance Events</h3>
          <p>
            Decoración y detalles para cumpleaños, aniversarios, baby showers,
            pedidas de mano y eventos especiales.
          </p>
        </div>

        <div>
          <h4>Navegación</h4>
          <nav class="footer__links">
            <A href="/">Inicio</A>
            <A href="/servicios">Servicios</A>
            <A href="/paquetes">Paquetes</A>
            <A href="/galeria">Galería</A>
            <A href="/reservar">Reservar</A>
          </nav>
        </div>

        <div class="footer__info">
          <h4>Contacto</h4>
          <p>WhatsApp: +51 999 999 999</p>
          <p>Lunes a sábado · 9:00 a.m. – 8:00 p.m.</p>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© 2026 Elegance Events. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
