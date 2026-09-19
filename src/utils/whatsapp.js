const WHATSAPP_PHONE = "51999999999";

export function createWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function createGeneralWhatsAppLink() {
  return createWhatsAppLink("Hola, quiero solicitar información para un evento.");
}

export function createServiceWhatsAppLink(service) {
  return createWhatsAppLink(
    `Hola, quiero cotizar el servicio: ${service.nombre}. ¿Podrían brindarme más información?`
  );
}

export function createPackageWhatsAppLink(packageItem) {
  return createWhatsAppLink(
    `Hola, quiero consultar sobre el ${packageItem.nombre}. ¿Podrían brindarme detalles y disponibilidad?`
  );
}

export function createGalleryWhatsAppLink(galleryItem) {
  return createWhatsAppLink(
    `Hola, vi en la galería el estilo: ${galleryItem.titulo}. Quiero algo similar para mi evento.`
  );
}

export function createBookingWhatsAppLink(formData) {
  return createWhatsAppLink(`
Hola, quiero cotizar un evento.

Tipo de evento: ${formData.eventType || "No especificado"}
Fecha: ${formData.eventDate || "No especificado"}
Zona o lugar: ${formData.location || "No especificado"}
Cantidad de personas: ${formData.guests || "No especificado"}
Servicio deseado: ${formData.service || "No especificado"}
Presupuesto aproximado: ${formData.budget || "No especificado"}
Comentario adicional: ${formData.message || "Sin comentario adicional"}
`);
}

export function formatPrice(amount) {
  return amount > 0 ? `S/ ${amount.toFixed(2)}` : "A consultar";
}
