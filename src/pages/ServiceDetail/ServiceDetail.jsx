import { A, useParams } from "@solidjs/router";
import { For, Show } from "solid-js";

import { services } from "../../data/services";
import { createServiceWhatsAppLink, formatPrice } from "../../utils/whatsapp";

import "./ServiceDetail.css";

function ServiceDetail() {
  const params = useParams();

  const service = () =>
    services.find((item) => String(item.id) === String(params.id));

  return (
    <section class="section-padding">
      <div class="page-container">
        <Show
          when={service()}
          fallback={
            <div class="service-detail-not-found">
              <h1>Servicio no encontrado</h1>
              <p>El servicio que buscas no está disponible actualmente.</p>

              <A href="/servicios" class="btn btn-primary">
                Volver a servicios
              </A>
            </div>
          }
        >
          {(selectedService) => (
            <>
              <A href="/servicios" class="service-detail__back">
                ← Volver a servicios
              </A>

              <div class="service-detail">
                <div class="service-detail__image">
                  <img src={selectedService().imagen} alt={selectedService().nombre} />
                </div>

                <div class="service-detail__content">
                  <h1>{selectedService().nombre}</h1>

                  <p class="service-detail__description">
                    {selectedService().descripcionCompleta}
                  </p>

                  <dl class="service-detail__info">
                    <div>
                      <dt>Precio desde</dt>
                      <dd class="service-detail__price">
                        {formatPrice(selectedService().precioDesde)}
                      </dd>
                    </div>

                    <div>
                      <dt>Tiempo estimado</dt>
                      <dd>{selectedService().tiempo}</dd>
                    </div>

                    <div>
                      <dt>Reserva sugerida</dt>
                      <dd>{selectedService().reserva}</dd>
                    </div>
                  </dl>

                  <div class="service-detail__block">
                    <h2>¿Qué incluye?</h2>

                    <ul class="check-list">
                      <For each={selectedService().incluye}>
                        {(item) => <li>{item}</li>}
                      </For>
                    </ul>
                  </div>

                  <div class="service-detail__block">
                    <h2>Opciones de personalización</h2>

                    <ul class="service-detail__tags">
                      <For each={selectedService().personalizacion}>
                        {(item) => <li>{item}</li>}
                      </For>
                    </ul>
                  </div>

                  <div class="service-detail__actions">
                    <a
                      href={createServiceWhatsAppLink(selectedService())}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn btn-whatsapp"
                    >
                      Cotizar por WhatsApp
                    </a>

                    <A href="/reservar" class="btn btn-secondary">
                      Solicitar cotización
                    </A>
                  </div>
                </div>
              </div>
            </>
          )}
        </Show>
      </div>
    </section>
  );
}

export default ServiceDetail;
