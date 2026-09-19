import { createGalleryWhatsAppLink } from "../../utils/whatsapp";

import "./GalleryCard.css";

function GalleryCard(props) {
  const item = props.item;

  return (
    <article class="gallery-card">
      <div class="gallery-card__image">
        <img src={item.imagen} alt={item.titulo} loading="lazy" />
      </div>

      <div class="gallery-card__body">
        <h3>{item.titulo}</h3>
        <p>{item.descripcion}</p>

        <a
          href={createGalleryWhatsAppLink(item)}
          target="_blank"
          rel="noopener noreferrer"
          class="gallery-card__link"
        >
          Quiero algo similar →
        </a>
      </div>
    </article>
  );
}

export default GalleryCard;
