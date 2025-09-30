import { ubuntu } from "@/lib/fonts";

const leftCities = [
  "São João del Rei",
  "Tiradentes",
  "Resende Costa",
  "Lagoa Dourada",
  "Coronel Xavier Chaves",
  "Carrancas",
  "Conceição da Barra de Minas",
  "Madre de Deus de Minas",
  "São Vicente de Minas",
  "Nazareno",
  "Ritápolis",
  "Prados",
  "Dores de Campo",
  "Barroso",
  "Ibertioga",
];

const rightCities = [
  "Lavras",
  "São Tiago",
  "Entre Rios de Minas",
  "São Brás do Suaçuí",
  "Jeceaba",
  "Alfredo Vasconcelos",
  "Antônio Carlos",
  "Itutinga",
  "Itumirim",
  "Ijaci",
  "Capela Nova",
  "Casa Grande",
  "Carandaí",
  "Caranaíba",
  "Desterro do Melo",
];

export default function Localidades() {
  return (
    <section id="localidades" style={{ background: "#FFFFFF" }}>
      <div className="mx-auto" style={{ width: 1920, padding: "80px 160px" }}>
        {/* Grid 2 colunas: texto/listas à esquerda, mapa à direita */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
          {/* Coluna esquerda */}
          <div>
            <h3 className={`${ubuntu.variable}`} style={{ fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 48, marginBottom: 12 }}>
              <span style={{ color: "#000000" }}>Energia Solar </span>
              <span style={{ color: "#008CA3" }}>ao seu alcance!</span>
            </h3>
            <p className={`${ubuntu.variable}`} style={{ color: "#000000", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 20, lineHeight: 1.5, marginBottom: 24 }}>
              Atendemos a 30 cidades do campo das vertentes.<br />
              Se você também está por perto, conte conosco para reduzir<br />
              a sua conta de energia.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 28 }}>
              <ul className={`${ubuntu.variable}`} style={{ listStyle: "none", padding: 0, margin: 0, color: "#000000", fontFamily: "var(--font-ubuntu)", fontSize: 18, lineHeight: 1.8 }}>
                {leftCities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <ul className={`${ubuntu.variable}`} style={{ listStyle: "none", padding: 0, margin: 0, color: "#000000", fontFamily: "var(--font-ubuntu)", fontSize: 18, lineHeight: 1.8 }}>
                {rightCities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="#contato" className={`${ubuntu.variable}`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 220, height: 48, background: "#008CA3", borderRadius: 8, color: "#FFFFFF", textDecoration: "none", fontFamily: "var(--font-ubuntu)", fontWeight: 700 }}>
              Fazer orçamento
            </a>
            </div>
          </div>

          {/* Coluna direita: mapa */}
          <div>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 16", borderRadius: 12, overflow: "hidden", boxShadow: "0 6px 20px rgba(0,0,0,0.12)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476449.04199093557!2d-44.562224554772726!3d-21.102272241687132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x224622d3c6fff3c5%3A0x2c5d01a9603829b7!2sEletroV!5e0!3m2!1spt-BR!2sbr!4v1758816952934!5m2!1spt-BR!2sbr"
                width="785"
                height="785"
                style={{ border: 0, position: "absolute", inset: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


