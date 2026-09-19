import { A } from "@solidjs/router";
import { createServiceWhatsAppLink, formatPrice } from "../../utils/whatsapp";

import "./ServiceCard.css";

function ServiceCard(props) {
  const service = props.service;

  return (
    <article class="service-card">
      <A href={`/servicios/${service.id}`} class="service-card__image-box" tabIndex={-1}>
        <img src={service.imagen} alt={service.nombre} loading="lazy" />
      </A>

      <div class="service-card__content">
        <h3>
          <A href={`/servicios/${service.id}`} class="service-card__title">
            {service.nombre}
          </A>
        </h3>

        <p class="service-card__description">{service.descripcion}</p>

        <div class="service-card__meta">
          <span>
            Desde <strong>{formatPrice(service.precioDesde)}</strong>
          </span>
          <span>{service.tiempo}</span>
        </div>

        <div class="service-card__actions">
          <A href={`/servicios/${service.id}`} class="btn btn-secondary btn-sm">
            Ver detalle
          </A>

          <a
            href={createServiceWhatsAppLink(service)}
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-whatsapp btn-sm"
          >
            Cotizar
          </a>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
