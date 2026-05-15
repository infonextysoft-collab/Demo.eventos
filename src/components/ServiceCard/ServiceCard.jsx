import { A } from "@solidjs/router";
import { createServiceWhatsAppLink } from "../../utils/whatsapp";

import "./ServiceCard.css";

function ServiceCard(props) {
  const service = props.service;

  return (
    <article class="service-card">
      <A href={`/servicios/${service.id}`} class="service-card__image-box">
        <img
          src={service.imagen}
          alt={service.nombre}
          class="service-card__image"
          loading="lazy"
        />

        {service.destacado && <span class="service-card__badge">Destacado</span>}
      </A>

      <div class="service-card__content">
        <span class="service-card__category">{service.categoriaNombre}</span>

        <A href={`/servicios/${service.id}`} class="service-card__title">
          {service.nombre}
        </A>

        <p class="service-card__description">{service.descripcion}</p>

        <div class="service-card__meta">
          <span>Desde S/ {service.precioDesde.toFixed(2)}</span>
          <span>{service.tiempo}</span>
        </div>

        <div class="service-card__actions">
          <A href={`/servicios/${service.id}`} class="service-card__detail">
            Ver detalle
          </A>

          <a
            href={createServiceWhatsAppLink(service)}
            target="_blank"
            rel="noopener noreferrer"
            class="service-card__whatsapp"
          >
            Cotizar
          </a>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;