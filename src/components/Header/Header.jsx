import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import { createGeneralWhatsAppLink } from "../../utils/whatsapp";

import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = createSignal(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header class="header">
      <div class="header__container">
        <A href="/" class="header__logo" onClick={closeMenu}>
          <div class="header__logo-icon">E</div>

          <div>
            <span class="header__brand">Elegance Events</span>
            <small class="header__tagline">Detalles para eventos</small>
          </div>
        </A>

        <button
          type="button"
          class="header__menu-btn"
          onClick={() => setMenuOpen(!menuOpen())}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class={`header__nav ${menuOpen() ? "header__nav--open" : ""}`}>
          <A href="/" end class="header__link" activeClass="header__link--active" onClick={closeMenu}>
            Inicio
          </A>

          <A href="/servicios" class="header__link" activeClass="header__link--active" onClick={closeMenu}>
            Servicios
          </A>

          <A href="/paquetes" class="header__link" activeClass="header__link--active" onClick={closeMenu}>
            Paquetes
          </A>

          <A href="/galeria" class="header__link" activeClass="header__link--active" onClick={closeMenu}>
            Galería
          </A>

          <A href="/reservar" class="header__link" activeClass="header__link--active" onClick={closeMenu}>
            Reservar
          </A>

          <a
            href={createGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            class="header__whatsapp"
            onClick={closeMenu}
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;