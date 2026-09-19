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

const steps = [
  {
    titulo: "Nos cuentas tu idea",
    texto: "Indicas el tipo de evento, fecha, lugar, estilo y presupuesto aproximado.",
  },
  {
    titulo: "Preparamos una propuesta",
    texto: "Te orientamos con colores, temática, elementos decorativos y opciones disponibles.",
  },
  {
    titulo: "Coordinamos el montaje",
    texto: "Confirmamos detalles, horarios, ubicación y preparación del servicio elegido.",
  },
];

function Home() {
  const featuredServices = services.filter((service) => service.destacado).slice(0, 3);
  const featuredPackages = packages.slice(0, 3);
  const featuredGallery = gallery.slice(0, 3);

  return (
    <div class="home">
      <section class="home-hero">
        <div class="page-container home-hero__container">
          <div class="home-hero__content">
            <span class="home-hero__label">Decoración para eventos</span>

            <h1>Decoración y detalles para momentos inolvidables</h1>

            <p>
              Mesas temáticas, arreglos con globos, detalles personalizados y
              decoraciones para cumpleaños, baby showers, aniversarios, pedidas
              de mano y eventos especiales.
            </p>

            <div class="home-hero__actions">
              <WhatsAppButton>Cotizar por WhatsApp</WhatsAppButton>

              <A href="/servicios" class="btn btn-secondary">
                Ver servicios
              </A>
            </div>

            <ul class="home-hero__facts">
              <li>Precios desde S/ 80</li>
              <li>Montaje incluido</li>
              <li>Respuesta el mismo día</li>
            </ul>
          </div>

          <div class="home-hero__image">
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"
              alt="Mesa decorada con flores y velas para un evento"
            />
          </div>
        </div>
      </section>

      <section class="section-padding">
        <div class="page-container">
          <div class="home-section-header">
            <SectionTitle
              label="Servicios"
              title="Nuestros servicios"
              description="Elige el tipo de decoración o detalle que necesitas y solicita una cotización personalizada."
            />

            <A href="/servicios" class="home-section-link">
              Ver todos los servicios →
            </A>
          </div>

          <div class="card-grid">
            <For each={featuredServices}>
              {(service) => <ServiceCard service={service} />}
            </For>
          </div>
        </div>
      </section>

      <section class="section-padding section-alt">
        <div class="page-container">
          <SectionTitle
            label="Paquetes"
            title="Paquetes para cada tipo de evento"
            description="Opciones listas para celebraciones pequeñas, eventos especiales y decoraciones completas."
            center
          />

          <div class="card-grid home-packages__grid">
            <For each={featuredPackages}>
              {(item) => <PackageCard package={item} />}
            </For>
          </div>

          <div class="home-packages__more">
            <A href="/paquetes" class="home-section-link">
              Ver todos los paquetes →
            </A>
          </div>
        </div>
      </section>

      <section class="section-padding">
        <div class="page-container">
          <SectionTitle
            label="Proceso"
            title="Así trabajamos tu evento"
            description="Te acompañamos desde la idea inicial hasta el montaje final."
            center
          />

          <ol class="home-process">
            <For each={steps}>
              {(step, index) => (
                <li class="home-process__item">
                  <span class="home-process__number">{index() + 1}</span>
                  <h3>{step.titulo}</h3>
                  <p>{step.texto}</p>
                </li>
              )}
            </For>
          </ol>
        </div>
      </section>

      <section class="section-padding section-alt">
        <div class="page-container">
          <div class="home-section-header">
            <SectionTitle
              label="Galería"
              title="Trabajos realizados"
              description="Algunas decoraciones que pueden servir como referencia para tu celebración."
            />

            <A href="/galeria" class="home-section-link">
              Ver galería →
            </A>
          </div>

          <div class="card-grid">
            <For each={featuredGallery}>
              {(item) => <GalleryCard item={item} />}
            </For>
          </div>
        </div>
      </section>

      <section class="section-padding">
        <div class="page-container">
          <SectionTitle
            label="Opiniones"
            title="Lo que dicen nuestros clientes"
            center
          />

          <div class="card-grid">
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
              <h2>¿Tienes un evento próximo?</h2>
              <p>
                Cuéntanos tu idea y te enviamos una cotización personalizada sin
                compromiso.
              </p>
            </div>

            <A href="/reservar" class="btn home-cta__button">
              Solicitar cotización
            </A>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
