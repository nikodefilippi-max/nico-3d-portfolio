import { photographer } from "../data/photographer";

export default function Intro({ onContact }) {
  return (
    <header className="intro">
      <div>
        <p className="eyebrow">PORTFOLIO</p>
        <h1>{photographer.name}</h1>
        <p className="intro-title">{photographer.title}</p>
      </div>

      <div className="intro-actions">
        <button className="text-button" onClick={onContact}>
          Contacto
        </button>
      </div>
    </header>
  );
}