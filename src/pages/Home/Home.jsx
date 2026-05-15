import { A } from "@solidjs/router";
import { For } from "solid-js";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import PackageCard from "../../components/PackageCard/PackageCard";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";

import { services } from "../../data/services";
import { packages } from "../../data/packages";
import { gallery } from "../../data/gallery";
import { testimonials } from "../../data/testimonials";

import "./Home.css";

function Home() {
  const featuredServices = services.filter((service) => service.destacado).slice(0, 3);
  const featuredPackages = packages.slice(0, 3);
  const featuredGallery = gallery.slice(0, 3);

  return (
    <div class="home">
      <section class="home-hero">
        <div class="home-hero__container">
          <div class="home-hero__content fade-up">
            <span class="home-hero__label">Detalles para eventos</span>

            <h1>Decoración y detalles para momentos inolvidables</h1>

            <p>
              Creamos mesas temáticas, arreglos con globos, detalles personalizados
              y decoraciones para cumpleaños, baby showers, aniversarios, pedidas
              de mano y eventos especiales.
            </p>

            <div class="home-hero__actions">
              <A href="/servicios" class="btn btn-secondary">
                Ver servicios
              </A>

              <WhatsAppButton>
                Cotizar por WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          <div class="home-hero__image fade-up">
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"
              alt="Decoración elegante para eventos"
            />

            <div class="home-hero__card">
              <strong>Desde S/ 80.00</strong>
              <span>Detalles personalizados</span>
            </div>
          </div>
        </div>
      </section>

      <section class="home-services section-padding">
        <div class="page-container">
          <div class="home-section-header">
            <SectionTitle
              label="Servicios"
              title="Soluciones para cada ocasión"
              description="Elige el tipo de decoración o detalle que necesitas y solicita una cotización personalizada."
            />

            <A href="/servicios" class="home-section-link">
              Ver todos
            </A>
          </div>

          <div class="home-grid home-grid--three">
            <For each={featuredServices}>
              {(service) => <ServiceCard service={service} />}
            </For>
          </div>
        </div>
      </section>

      <section class="home-packages section-padding">
        <div class="page-container">
          <SectionTitle
            label="Paquetes"
            title="Paquetes pensados para diferentes eventos"
            description="Opciones listas para celebraciones pequeñas, eventos especiales y decoraciones completas."
            center
          />

          <div class="home-grid home-grid--three">
            <For each={featuredPackages}>
              {(item) => <PackageCard package={item} />}
            </For>
          </div>
        </div>
      </section>

      <section class="home-process section-padding">
        <div class="page-container">
          <SectionTitle
            label="Proceso"
            title="Así trabajamos tu evento"
            description="Te acompañamos desde la idea inicial hasta el montaje final del detalle o decoración."
            center
          />

          <div class="home-process__grid">
            <div class="home-process__item">
              <span>01</span>
              <h3>Nos cuentas tu idea</h3>
              <p>Indicas el tipo de evento, fecha, lugar, estilo y presupuesto aproximado.</p>
            </div>

            <div class="home-process__item">
              <span>02</span>
              <h3>Preparamos una propuesta</h3>
              <p>Te orientamos con colores, temática, elementos decorativos y opciones disponibles.</p>
            </div>

            <div class="home-process__item">
              <span>03</span>
              <h3>Coordinamos el montaje</h3>
              <p>Confirmamos detalles, horarios, ubicación y preparación del servicio elegido.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="home-gallery section-padding">
        <div class="page-container">
          <div class="home-section-header">
            <SectionTitle
              label="Galería"
              title="Inspiración para tu próximo evento"
              description="Explora estilos, colores y decoraciones que pueden servir como referencia para tu celebración."
            />

            <A href="/galeria" class="home-section-link">
              Ver galería
            </A>
          </div>

          <div class="home-grid home-grid--three">
            <For each={featuredGallery}>
              {(item) => <GalleryCard item={item} />}
            </For>
          </div>
        </div>
      </section>

      <section class="home-testimonials section-padding">
        <div class="page-container">
          <SectionTitle
            label="Opiniones"
            title="Clientes que confiaron en nosotros"
            description="La atención personalizada y el cuidado de cada detalle hacen la diferencia."
            center
          />

          <div class="home-grid home-grid--three">
            <For each={testimonials}>
              {(testimonial) => <TestimonialCard testimonial={testimonial} />}
            </For>
          </div>
        </div>
      </section>

      <section class="home-cta">
        <div class="page-container">
          <div class="home-cta__box">
            <div>
              <span>Cotización personalizada</span>
              <h2>¿Tienes un evento próximo?</h2>
              <p>
                Escríbenos por WhatsApp y cuéntanos tu idea. Te ayudamos a convertirla
                en una decoración especial.
              </p>
            </div>

            <A href="/reservar" class="btn btn-primary">
              Solicitar cotización
            </A>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;