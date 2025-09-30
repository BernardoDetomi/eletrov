import HomeHero from "@/components/sections/HomeHero";
import SobreNos from "@/components/sections/SobreNos";
import ResultadoEconomia from "@/components/sections/ResultadoEconomia";
import Financiamento from "@/components/sections/Financiamento";
import Engenheiro from "@/components/sections/Engenheiro";
import LazySection from "@/components/sections/LazySection";
import Diretrizes from "@/components/sections/Diretrizes";
import Cases from "@/components/sections/Cases";
import Localidades from "@/components/sections/Localidades";
import Orcamento from "@/components/sections/Orcamento";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <LazySection>
        <HomeHero />
      </LazySection>
      <LazySection>
        <SobreNos />
      </LazySection>
      <LazySection>
        <ResultadoEconomia />
      </LazySection>
      <LazySection>
        <Financiamento />
      </LazySection>
      <LazySection>
        <Engenheiro />
      </LazySection>
      <LazySection>
        <Diretrizes />
      </LazySection>
      <LazySection>
        <Cases />
      </LazySection>
      <LazySection>
        <Localidades />
      </LazySection>
      <LazySection>
        <Orcamento />
      </LazySection>
      <LazySection>
        <Footer />
      </LazySection>
      </main>
  );
}