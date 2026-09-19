import { For } from "solid-js";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { services } from "../../data/services";

function Services() {
  return (
    <section class="section-padding">
      <div class="page-container">
        <SectionTitle
          label="Servicios"
          title="Todos nuestros servicios"
          description="Elige el servicio que mejor se adapte a tu celebración y solicita una cotización personalizada por WhatsApp."
        />

        <div class="card-grid">
          <For each={services}>
            {(service) => <ServiceCard service={service} />}
          </For>
        </div>
      </div>
    </section>
  );
}

export default Services;
