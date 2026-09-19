import { For } from "solid-js";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import { gallery } from "../../data/gallery";

function Gallery() {
  return (
    <section class="section-padding">
      <div class="page-container">
        <SectionTitle
          label="Galería"
          title="Trabajos realizados"
          description="Decoraciones y detalles preparados para diferentes eventos. Si te gusta alguno, pídenos algo similar."
          center
        />

        <div class="card-grid">
          <For each={gallery}>
            {(item) => <GalleryCard item={item} />}
          </For>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
