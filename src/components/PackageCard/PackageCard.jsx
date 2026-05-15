import { createPackageWhatsAppLink } from "../../utils/whatsapp";

import "./PackageCard.css";

function PackageCard(props) {
  const item = props.package;

  return (
    <article class={`package-card ${item.destacado ? "package-card--featured" : ""}`}>
      {item.destacado && <span class="package-card__label">Más solicitado</span>}

      <h3>{item.nombre}</h3>

      <p class="package-card__ideal">{item.idealPara}</p>

      <div class="package-card__price">
        <span>Desde</span>
        <strong>S/ {item.precioDesde.toFixed(2)}</strong>
      </div>

      <ul class="package-card__list">
        {item.incluye.map((benefit) => (
          <li>{benefit}</li>
        ))}
      </ul>

      <a
        href={createPackageWhatsAppLink(item)}
        target="_blank"
        rel="noopener noreferrer"
        class="package-card__button"
      >
        Consultar paquete
      </a>
    </article>
  );
}

export default PackageCard;