import { For, createSignal } from "solid-js";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { services } from "../../data/services";
import { createBookingWhatsAppLink } from "../../utils/whatsapp";

import "./Booking.css";

const eventTypes = [
  "Cumpleaños",
  "Baby shower",
  "Aniversario",
  "Pedida de mano",
  "Bautizo",
  "Corporativo",
  "Otro",
];

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

  const today = new Date().toISOString().split("T")[0];

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
    <section class="section-padding">
      <div class="page-container">
        <SectionTitle
          label="Reservar"
          title="Solicita una cotización"
          description="Completa los datos principales y enviaremos tu solicitud por WhatsApp para coordinar una propuesta."
          center
        />

        <div class="booking-page__layout">
          <form class="booking-form" onSubmit={handleSubmit}>
            <div class="booking-form__grid">
              <div class="booking-form__field">
                <label for="eventType">
                  Tipo de evento <span aria-hidden="true">*</span>
                </label>
                <select
                  id="eventType"
                  required
                  value={formData().eventType}
                  onChange={(e) => updateField("eventType", e.currentTarget.value)}
                >
                  <option value="">Seleccionar</option>
                  <For each={eventTypes}>
                    {(type) => <option value={type}>{type}</option>}
                  </For>
                </select>
              </div>

              <div class="booking-form__field">
                <label for="eventDate">
                  Fecha del evento <span aria-hidden="true">*</span>
                </label>
                <input
                  id="eventDate"
                  type="date"
                  required
                  min={today}
                  value={formData().eventDate}
                  onInput={(e) => updateField("eventDate", e.currentTarget.value)}
                />
              </div>

              <div class="booking-form__field">
                <label for="location">Zona o lugar</label>
                <input
                  id="location"
                  type="text"
                  placeholder="Ej.: Trujillo, local, domicilio"
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
                  placeholder="Ej.: 30"
                  value={formData().guests}
                  onInput={(e) => updateField("guests", e.currentTarget.value)}
                />
              </div>

              <div class="booking-form__field">
                <label for="service">Servicio de interés</label>
                <select
                  id="service"
                  value={formData().service}
                  onChange={(e) => updateField("service", e.currentTarget.value)}
                >
                  <option value="">Seleccionar</option>
                  <For each={services}>
                    {(item) => <option value={item.nombre}>{item.nombre}</option>}
                  </For>
                  <option value="Aún no lo sé">Aún no lo sé</option>
                </select>
              </div>

              <div class="booking-form__field">
                <label for="budget">Presupuesto aproximado</label>
                <input
                  id="budget"
                  type="text"
                  placeholder="Ej.: S/ 300"
                  value={formData().budget}
                  onInput={(e) => updateField("budget", e.currentTarget.value)}
                />
              </div>
            </div>

            <div class="booking-form__field">
              <label for="message">Comentario adicional</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Colores, temática, referencias o detalles especiales"
                value={formData().message}
                onInput={(e) => updateField("message", e.currentTarget.value)}
              ></textarea>
            </div>

            <button type="submit" class="btn btn-whatsapp btn-block">
              Enviar solicitud por WhatsApp
            </button>

            <p class="booking-form__hint">* Campos obligatorios</p>
          </form>

          <aside class="booking-info">
            <h2>Antes de cotizar</h2>

            <ul class="check-list">
              <li>La fecha del evento ayuda a verificar disponibilidad.</li>
              <li>El lugar permite calcular logística y montaje.</li>
              <li>El presupuesto ayuda a recomendar una opción adecuada.</li>
              <li>Puedes enviar referencias visuales por WhatsApp.</li>
            </ul>

            <div class="booking-info__box">
              <strong>Horario de atención</strong>
              <p>Lunes a sábado, de 9:00 a.m. a 8:00 p.m.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Booking;
