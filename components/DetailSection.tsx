import Image from "next/image";

const CHECKLIST = [
  {
    n: "01",
    text: "Cámara sanitaria ventilada frente a humedad por capilaridad y gases del terreno.",
  },
  {
    n: "02",
    text: "Aislamiento térmico horizontal continuo (XPS 40 mm) bajo el pavimento.",
  },
  {
    n: "03",
    text: "Rampa de accesibilidad universal en el acceso desde el aparcamiento.",
  },
  {
    n: "04",
    text: "Climatización por bomba de calor Inverter de baja potencia.",
  },
];

export default function DetailSection() {
  return (
    <section className="detail" id="detalle">
      <figure className="detail-visual">
        <div className="frame">
          <div className="detail-visual-image">
            <Image
              src="/assets/detalles-constructivos.jpg"
              alt="Detalles constructivos: sistema Caviti 5, aislamiento XPS, ventilación, accesibilidad y climatización"
              fill
              sizes="(max-width: 880px) 90vw, 480px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <figcaption>
          Fig. 02 — Sección de detalles constructivos: cámara sanitaria
          Caviti 5, aislamiento XPS, rampa de acceso y climatización por
          bomba de calor.
        </figcaption>
      </figure>

      <div className="detail-text" id="memoria">
        <p className="kicker mono">Memoria técnica — resumen</p>
        <h2>Una envolvente pensada para el clima de Murcia</h2>
        <p>
          El suelo se resuelve con encofrado perdido Caviti 5 sobre 89,75 m²
          de superficie útil, con ventilación perimetral natural y
          extracción forzada hacia el fondo del local. Sobre la solera de
          hormigón se incorpora una capa de XPS de 40 mm que corta el
          puente térmico antes del pavimento cerámico.
        </p>
        <ul className="checklist">
          {CHECKLIST.map((item) => (
            <li key={item.n}>
              <span className="mk">{item.n}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
