import { For, createMemo, createSignal } from "solid-js";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import { gallery } from "../../data/gallery";

import "./Gallery.css";

function Gallery() {
  const [category, setCategory] = createSignal("todos");

  const categories = [
    { id: "todos", nombre: "Todos" },
    { id: "cumpleanos", nombre: "Cumpleaños" },
    { id: "baby-shower", nombre: "Baby shower" },
    { id: "aniversarios", nombre: "Aniversarios" },
    { id: "pedida", nombre: "Pedidas de mano" },
    { id: "globos", nombre: "Globos" },
    { id: "corporativo", nombre: "Corporativo" },
    { id: "detalles", nombre: "Detalles" },
  ];

  const filteredGallery = createMemo(() => {
    if (category() === "todos") return gallery;

    return gallery.filter((item) => item.categoria === category());
  });

  return (
    <section class="gallery-page section-padding">
      <div class="page-container">
        <SectionTitle
          label="Galería"
          title="Trabajos e ideas para inspirarte"
          description="Explora decoraciones, estilos, colores y detalles realizados para diferentes tipos de eventos."
          center
        />

        <div class="gallery-page__filters">
          <For each={categories}>
            {(item) => (
              <button
                type="button"
                class={
                  category() === item.id
                    ? "gallery-page__filter gallery-page__filter--active"
                    : "gallery-page__filter"
                }
                onClick={() => setCategory(item.id)}
              >
                {item.nombre}
              </button>
            )}
          </For>
        </div>

        <div class="gallery-page__grid">
          <For each={filteredGallery()}>
            {(item) => <GalleryCard item={item} />}
          </For>
        </div>
      </div>
    </section>
  );
}

export default Gallery;