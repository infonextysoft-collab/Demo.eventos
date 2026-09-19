import { createGeneralWhatsAppLink, createWhatsAppLink } from "../../utils/whatsapp";

function WhatsAppButton(props) {
  const link = props.message
    ? createWhatsAppLink(props.message)
    : createGeneralWhatsAppLink();

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      class={`btn btn-whatsapp ${props.class || ""}`}
    >
      {props.children || "Cotizar por WhatsApp"}
    </a>
  );
}

export default WhatsAppButton;
