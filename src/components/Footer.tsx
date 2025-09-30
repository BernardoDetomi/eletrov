import Image from "next/image";
import { ubuntu } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer>
      {/* Faixa superior escura */}
      <div style={{ background: "#3f3f3f" }}>
        <div className="mx-auto" style={{ width: 1920, padding: "60px 160px", display: "grid", gridTemplateColumns: "320px 1fr 1fr", alignItems: "center", gap: 40 }}>
          <div>
            <Image src="/marca.png" alt="Marca" width={220} height={160} style={{ height: "auto" }} />
          </div>
          <div>
            <div className={`${ubuntu.variable}`} style={{ color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 700, marginBottom: 8 }}>CONTATOS</div>
            <div className={`${ubuntu.variable}`} style={{ color: "#FFFFFF", fontFamily: "var(--font-ubuntu)" }}>
              victor.eletrov@gmail.com<br/>(32) 99965-0094
            </div>
          </div>
          <div>
            <div className={`${ubuntu.variable}`} style={{ color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 700, marginBottom: 8 }}>CNPJ</div>
            <div className={`${ubuntu.variable}`} style={{ color: "#FFFFFF", fontFamily: "var(--font-ubuntu)" }}>62.280.411/0001-35</div>
            <div className={`${ubuntu.variable}`} style={{ color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 700, marginTop: 16, marginBottom: 8 }}>ENDEREÇO</div>
            <div className={`${ubuntu.variable}`} style={{ color: "#FFFFFF", fontFamily: "var(--font-ubuntu)" }}>
              Rua Coronel Gabriel M Ferreira, 95, Colônia do Marçal, São João del-Rei - Minas Gerais
            </div>
          </div>
        </div>
      </div>

      {/* Faixa inferior turquesa com crédito */}
      <div style={{ background: "#008CA3", textAlign: "center", padding: "22px 0" }}>
        <div className={`${ubuntu.variable}`} style={{ color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 700, marginBottom: 8 }}>DESENVOLVIDO POR</div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="https://github.com/bernardodetomi" target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer", transition: "opacity 0.2s" }}>
            <Image src="/bmd-logo.png" alt="BMD" width={138} height={100} />
          </a>
        </div>
        <div className={`${ubuntu.variable}`} style={{ color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontSize: 12, marginTop: 8 }}>© Copyright. All rights reserved</div>
      </div>
    </footer>
  );
}


