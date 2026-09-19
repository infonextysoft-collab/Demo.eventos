import { For, Show } from "solid-js";
import { createPackageWhatsAppLink, formatPrice } from "../../utils/whatsapp";

import "./PackageCard.css";

function PackageCard(props) {
  const item = props.package;

  return (
    <article class={`package-card ${item.destacado ? "package-card--featured" : ""}`}>
      <Show when={item.destacado}>
        <span class="package-card__label">Más solicitado</span>
      </Show>

      <h3>{item.nombre}</h3>

      <p class="package-card__ideal">{item.idealPara}</p>

      <div class="package-card__price">
        <Show when={item.precioDesde > 0}>
          <span>Desde</span>
        </Show>
        <strong>{formatPrice(item.precioDesde)}</strong>
      </div>

      <ul class="check-list package-card__list">
        <For each={item.incluye}>{(benefit) => <li>{benefit}</li>}</For>
      </ul>

      <a
        href={createPackageWhatsAppLink(item)}
        target="_blank"
        rel="noopener noreferrer"
        class={`btn btn-block ${item.destacado ? "btn-primary" : "btn-secondary"}`}
      >
        Consultar paquete
      </a>
    </article>
  );
}

export default PackageCard;
