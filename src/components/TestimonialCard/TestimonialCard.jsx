import "./TestimonialCard.css";

function TestimonialCard(props) {
  const testimonial = props.testimonial;

  return (
    <figure class="testimonial-card">
      <div class="testimonial-card__stars" aria-label="5 de 5 estrellas">★★★★★</div>

      <blockquote>“{testimonial.comentario}”</blockquote>

      <figcaption class="testimonial-card__author">
        <strong>{testimonial.nombre}</strong>
        <span>{testimonial.evento}</span>
      </figcaption>
    </figure>
  );
}

export default TestimonialCard;
