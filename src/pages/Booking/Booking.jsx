import { createSignal } from "solid-js";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { createBookingWhatsAppLink } from "../../utils/whatsapp";

import "./Booking.css";

function Booking() {
  const [formData, setFormData] = createSignal({
    eventType: "",
    eventDate: "",
    location: "",
    guests: "",
    service: "",
    budget: "",
    message: "",
  });

  const updateField = (field, value) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const link = createBookingWhatsAppLink(formData());
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section class="booking-page section-padding">
      <div class="page-container">
        <SectionTitle
          label="Reservar"
          title="Solicita una cotización para tu evento"
          description="Completa los datos principales y enviaremos tu solicitud por WhatsApp para coordinar una propuesta personalizada."
          center
        />

        <div class="booking-page__layout">
          <form class="booking-form" onSubmit={handleSubmit}>
            <div class="booking-form__grid">
              <div class="booking-form__field">
                <label for="eventType">Tipo de evento</label>
                <select
                  id="eventType"
                  value={formData().eventType}
                  onChange={(e) => updateField("eventType", e.currentTarget.value)}
                >
                  <option value="">Seleccionar</option>
                  <option value="Cumpleaños">Cumpleaños</option>
                  <option value="Baby shower">Baby shower</option>
                  <option value="Aniversario">Aniversario</option>
                  <option value="Pedida de mano">Pedida de mano</option>
                  <option value="Bautizo">Bautizo</option>
                  <option value="Corporativo">Corporativo</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div class="booking-form__field">
                <label for="eventDate">Fecha del evento</label>
                <input
                  id="eventDate"
                  type="date"
                  value={formData().eventDate}
                  onInput={(e) => updateField("eventDate", e.currentTarget.value)}
                />
              </div>

              <div class="booking-form__field">
                <label for="location">Zona o lugar</label>
                <input
                  id="location"
                  type="text"
                  placeholder="Ejemplo: Trujillo, local, domicilio..."
                  value={formData().location}
                  onInput={(e) => updateField("location", e.currentTarget.value)}
                />
              </div>

              <div class="booking-form__field">
                <label for="guests">Cantidad aproximada de personas</label>
                <input
                  id="guests"
                  type="number"
                  min="1"
                  placeholder="Ejemplo: 30"
                  value={formData().guests}
                  onInput={(e) => updateField("guests", e.currentTarget.value)}
                />
              </div>

              <div class="booking-form__field">
                <label for="service">Servicio deseado</label>
                <select
                  id="service"
                  value={formData().service}
                  onChange={(e) => updateField("service", e.currentTarget.value)}
                >
                  <option value="">Seleccionar</option>
                  <option value="Mesa temática">Mesa temática</option>
                  <option value="Arreglo con globos">Arreglo con globos</option>
                  <option value="Decoración completa">Decoración completa</option>
                  <option value="Caja sorpresa">Caja sorpresa</option>
                  <option value="Paquete personalizado">Paquete personalizado</option>
                </select>
              </div>

              <div class="booking-form__field">
                <label for="budget">Presupuesto aproximado</label>
                <input
                  id="budget"
                  type="text"
                  placeholder="Ejemplo: S/ 300"
                  value={formData().budget}
                  onInput={(e) => updateField("budget", e.currentTarget.value)}
                />
              </div>
            </div>

            <div class="booking-form__field">
              <label for="message">Comentario adicional</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Cuéntanos colores, temática, referencias o detalles especiales..."
                value={formData().message}
                onInput={(e) => updateField("message", e.currentTarget.value)}
              ></textarea>
            </div>

            <button type="submit" class="booking-form__button">
              Enviar cotización por WhatsApp
            </button>
          </form>

          <aside class="booking-info">
            <span>Atención personalizada</span>
            <h2>Antes de cotizar, ten en cuenta:</h2>

            <ul>
              <li>La fecha del evento ayuda a verificar disponibilidad.</li>
              <li>El lugar permite calcular logística y montaje.</li>
              <li>El presupuesto ayuda a recomendar una opción adecuada.</li>
              <li>Puedes enviar referencias visuales por WhatsApp.</li>
            </ul>

            <div class="booking-info__box">
              <strong>Respuesta rápida</strong>
              <p>
                Te responderemos por WhatsApp para confirmar detalles,
                disponibilidad y propuesta.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Booking;