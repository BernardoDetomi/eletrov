import Image from "next/image";
import { ubuntu } from "@/lib/fonts";

type CaseItem = {
  src: string;
  city: string;
};

const items: CaseItem[] = [
  { src: "/cases/obra1.jpg", city: "São João del Rei" },
  { src: "/cases/obra2.jpg", city: "Tiradentes" },
  { src: "/cases/obra3.jpg", city: "Lavras" },
  { src: "/cases/obra4.jpg", city: "Resende Costa" },
  { src: "/cases/obra5.jpg", city: "Barroso" },
  { src: "/cases/obra6.jpg", city: "Prados" },
];

export default function Cases() {
  return (
    <section id="cases" className="relative" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="mx-auto" style={{ width: 1920, padding: "80px 160px" }}>
        <h2 className={`${ubuntu.variable}`} style={{ textAlign: "center", color: "#008CA3", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 56, marginBottom: 40 }}>
          Cases de sucesso
        </h2>

        <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {items.map((item, idx) => (
            <div key={idx} style={{ borderRadius: 12, overflow: "hidden", background: "#f5f5f5" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10" }}>
                <Image src={item.src} alt={item.city} fill sizes="(max-width: 1920px) 33vw, 600px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ background: "#008CA3", padding: "12px 16px" }}>
                <div className={`${ubuntu.variable}`} style={{ color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 20 }}>
                  {item.city}
                </div>
                <div className={`${ubuntu.variable}`} style={{ color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 16, opacity: 0.95 }}>
                  Projetos Comerciais e Industriais
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Ver mais */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <a href="#contato" className={`${ubuntu.variable}`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 48, padding: "0 28px", background: "#008CA3", color: "#FFFFFF", borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-ubuntu)", fontWeight: 700 }}>
            Ver mais
          </a>
        </div>
      </div>
    </section>
  );
}


