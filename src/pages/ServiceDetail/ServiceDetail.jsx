import { A, useParams } from "@solidjs/router";
import { For, Show } from "solid-js";

import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { services } from "../../data/services";
import { createServiceWhatsAppLink } from "../../utils/whatsapp";

import "./ServiceDetail.css";

function ServiceDetail() {
  const params = useParams();

  const service = () =>
    services.find((item) => String(item.id) === String(params.id));

  const relatedServices = () => {
    if (!service()) return [];

    return services
      .filter(
        (item) =>
          item.categoria === service().categoria && item.id !== service().id
      )
      .slice(0, 3);
  };

  return (
    <section class="service-detail-page section-padding">
      <div class="page-container">
        <Show
          when={service()}
          fallback={
            <div class="service-detail-page__not-found">
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
              <div class="service-detail">
                <div class="service-detail__image fade-up">
                  <img
                    src={selectedService().imagen}
                    alt={selectedService().nombre}
                  />

                  {selectedService().destacado && (
                    <span class="service-detail__badge">Destacado</span>
                  )}
                </div>

                <div class="service-detail__content fade-up">
                  <span class="service-detail__category">
                    {selectedService().categoriaNombre}
                  </span>

                  <h1>{selectedService().nombre}</h1>

                  <p class="service-detail__description">
                    {selectedService().descripcionCompleta}
                  </p>

                  <div class="service-detail__price">
                    <span>Precio desde</span>
                    <strong>S/ {selectedService().precioDesde.toFixed(2)}</strong>
                  </div>

                  <div class="service-detail__info">
                    <div>
                      <span>Tiempo estimado</span>
                      <strong>{selectedService().tiempo}</strong>
                    </div>

                    <div>
                      <span>Reserva sugerida</span>
                      <strong>{selectedService().reserva}</strong>
                    </div>

                    <div>
                      <span>Cotización</span>
                      <strong>WhatsApp</strong>
                    </div>
                  </div>

                  <div class="service-detail__block">
                    <h3>¿Qué incluye?</h3>

                    <ul>
                      <For each={selectedService().incluye}>
                        {(item) => <li>{item}</li>}
                      </For>
                    </ul>
                  </div>

                  <div class="service-detail__block">
                    <h3>Opciones de personalización</h3>

                    <div class="service-detail__chips">
                      <For each={selectedService().personalizacion}>
                        {(item) => <span>{item}</span>}
                      </For>
                    </div>
                  </div>

                  <div class="service-detail__actions">
                    <a
                      href={createServiceWhatsAppLink(selectedService())}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn btn-whatsapp"
                    >
                      Cotizar este servicio
                    </a>

                    <A href="/reservar" class="btn btn-secondary">
                      Ir a reservar
                    </A>
                  </div>
                </div>
              </div>

              <Show when={relatedServices().length > 0}>
                <div class="service-detail-related">
                  <h2>Servicios relacionados</h2>

                  <div class="service-detail-related__grid">
                    <For each={relatedServices()}>
                      {(item) => <ServiceCard service={item} />}
                    </For>
                  </div>
                </div>
              </Show>
            </>
          )}
        </Show>
      </div>
    </section>
  );
}

export default ServiceDetail;