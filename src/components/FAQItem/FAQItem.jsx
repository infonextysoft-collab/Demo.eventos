import { Show, createSignal } from "solid-js";

import "./FAQItem.css";

function FAQItem(props) {
  const [open, setOpen] = createSignal(false);
  const faq = props.faq;
  const answerId = `faq-answer-${faq.id}`;

  return (
    <div class={`faq-item ${open() ? "faq-item--open" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen(!open())}
        aria-expanded={open()}
        aria-controls={answerId}
      >
        <span>{faq.pregunta}</span>
        <span class="faq-item__icon" aria-hidden="true">{open() ? "−" : "+"}</span>
      </button>

      <Show when={open()}>
        <div class="faq-item__answer" id={answerId}>
          <p>{faq.respuesta}</p>
        </div>
      </Show>
    </div>
  );
}

export default FAQItem;
