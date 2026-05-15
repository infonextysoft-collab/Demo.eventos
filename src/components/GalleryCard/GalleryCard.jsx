import { createGalleryWhatsAppLink } from "../../utils/whatsapp";

import "./GalleryCard.css";

function GalleryCard(props) {
  const item = props.item;

  return (
    <article class="gallery-card">
      <img src={item.imagen} alt={item.titulo} loading="lazy" />

      <div class="gallery-card__overlay">
        <span>{item.categoriaNombre}</span>
        <h3>{item.titulo}</h3>

        <a
          href={createGalleryWhatsAppLink(item)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Quiero algo similar
        </a>
      </div>
    </article>
  );
}

export default GalleryCard;