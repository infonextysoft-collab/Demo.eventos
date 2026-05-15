const WHATSAPP_PHONE = "51999999999";

export function createGeneralWhatsAppLink() {
  const message =
    "Hola, quiero solicitar información para un evento.";

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function createServiceWhatsAppLink(service) {
  const message = `Hola, quiero cotizar el servicio: ${service.nombre}. ¿Podrían brindarme más información?`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function createPackageWhatsAppLink(packageItem) {
  const message = `Hola, quiero consultar sobre el ${packageItem.nombre}. ¿Podrían brindarme detalles y disponibilidad?`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function createGalleryWhatsAppLink(galleryItem) {
  const message = `Hola, vi en la galería el estilo: ${galleryItem.titulo}. Quiero algo similar para mi evento.`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function createBookingWhatsAppLink(formData) {
  const message = `
Hola, quiero cotizar un evento.

Tipo de evento: ${formData.eventType || "No especificado"}
Fecha: ${formData.eventDate || "No especificado"}
Zona o lugar: ${formData.location || "No especificado"}
Cantidad de personas: ${formData.guests || "No especificado"}
Servicio deseado: ${formData.service || "No especificado"}
Presupuesto aproximado: ${formData.budget || "No especificado"}
Comentario adicional: ${formData.message || "Sin comentario adicional"}
`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}