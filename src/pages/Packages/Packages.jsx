import { For } from "solid-js";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PackageCard from "../../components/PackageCard/PackageCard";
import FAQItem from "../../components/FAQItem/FAQItem";

import { packages } from "../../data/packages";
import { faqs } from "../../data/faqs";

import "./Packages.css";

function Packages() {
  return (
    <>
      <section class="section-padding">
        <div class="page-container">
          <SectionTitle
            label="Paquetes"
            title="Paquetes para distintos tipos de eventos"
            description="Elige una opción base o solicita una propuesta personalizada según tu idea, espacio, fecha y presupuesto."
            center
          />

          <div class="packages-page__grid">
            <For each={packages}>
              {(item) => <PackageCard package={item} />}
            </For>
          </div>

          <p class="packages-page__note">
            Los precios son referenciales y pueden variar según el tamaño del evento,
            la ubicación y el nivel de personalización.
          </p>
        </div>
      </section>

      <section class="section-padding section-alt">
        <div class="page-container packages-page__faq">
          <SectionTitle
            label="Preguntas frecuentes"
            title="Antes de solicitar una cotización"
            center
          />

          <div class="packages-page__faq-list">
            <For each={faqs}>
              {(faq) => <FAQItem faq={faq} />}
            </For>
          </div>
        </div>
      </section>
    </>
  );
}

export default Packages;
