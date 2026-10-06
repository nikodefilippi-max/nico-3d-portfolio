import { photographer } from "../data/photographer";

export default function ContactPanel({ onClose }) {
  const whatsappMessage = encodeURIComponent(
    "Hola Nico! Vi tu portfolio y me gustaría consultar por una sesión de fotos."
  );

  return (
    <div className="contact-panel" role="dialog" aria-modal="true" aria-label="Contacto">
      <button className="close-button" onClick={onClose} aria-label="Cerrar">
        ×
      </button>

      <p className="eyebrow">TRABAJEMOS JUNTOS</p>
      <h2>¿Tenés un proyecto?</h2>
      <p className="contact-copy">
        Fotografía para personas, marcas, surf, lifestyle y proyectos especiales.
      </p>

      <div className="services">
        {photographer.services.map((service) => (
          <span key={service}>{service}</span>
        ))}
      </div>

      <div className="contact-links">
        <a
          className="contact-primary"
          href={`https://wa.me/${photographer.whatsapp}?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>

        <a href={photographer.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>

        <a href={`mailto:${photographer.email}`}>
          Email
        </a>
      </div>
    </div>
  );
}