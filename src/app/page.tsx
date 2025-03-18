"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedBanner from "@/components/FeaturedBanner";
import StockTable from "@/components/StockTable";
import FundTable from "@/components/FundTable";
import TreasuryTable from "@/components/TreasuryTable";
import AdBanner from "@/components/AdBanner";
import { Separator } from "@/components/ui/separator";
import {
  stocksHighest,
  stocksLowest,
  fundsHighest,
  fundsLowest,
  bdrsHighest,
  bdrsLowest,
  treasuryBonds
} from "@/components/StockData";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        {/* Featured Banner */}
        <section>
          <FeaturedBanner />
        </section>

        {/* Stock Section */}
        <section className="max-w-screen-xl mx-auto px-4 md:px-6 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold mb-4">AÇÕES</h2>
              <StockTable
                title="Cotações ao Vivo"
                stocks={stocksHighest}
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              <AdBanner
                imageUrl="https://same-assets.com/miami-banner.jpg"
                altText="Promoção Miami"
                linkUrl="/"
                height="250px"
              />

              <div className="hidden md:block">
                <h2 className="text-xl font-bold mb-4">COMPARADOR DE ATIVOS</h2>
                <div className="bg-gray-100 p-6 text-center h-[200px] flex items-center justify-center border border-gray-200">
                  <p className="text-gray-500">Gráfico de comparação de ativos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="max-w-screen-xl mx-auto" />

        {/* FIIs Section */}
        <section className="max-w-screen-xl mx-auto px-4 md:px-6 py-6">
          <h2 className="text-xl font-bold mb-4">FIIs - FUNDOS DE INVESTIMENTO IMOBILIÁRIO</h2>
          <FundTable
            title="Fundos Imobiliários"
            fundsHighest={fundsHighest}
            fundsLowest={fundsLowest}
          />
        </section>

        <Separator className="max-w-screen-xl mx-auto" />

        {/* BDRs Section */}
        <section className="max-w-screen-xl mx-auto px-4 md:px-6 py-6">
          <h2 className="text-xl font-bold mb-4">BDR - Brazilian Depositary Receipts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <StockTable
                title="BDRs - Maiores Altas"
                stocks={bdrsHighest}
                type="condensed"
              />
            </div>
            <div>
              <StockTable
                title="BDRs - Maiores Baixas"
                stocks={bdrsLowest}
                type="condensed"
              />
            </div>
          </div>
        </section>

        <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-4">
          <AdBanner
            imageUrl="https://same-assets.com/professional-banner.jpg"
            altText="Alcance seus objetivos financeiros com profissionalismo"
            linkUrl="/"
          />
        </div>

        <Separator className="max-w-screen-xl mx-auto" />

        {/* Tesouro Direto Section */}
        <section className="max-w-screen-xl mx-auto px-4 md:px-6 py-6">
          <h2 className="text-xl font-bold mb-4">TESOURO DIRETO</h2>
          <TreasuryTable
            title="Títulos do Tesouro"
            bonds={treasuryBonds}
          />
        </section>

        <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-4">
          <AdBanner
            imageUrl="https://same-assets.com/professional-banner.jpg"
            altText="Alcance seus objetivos financeiros com profissionalismo"
            linkUrl="/"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
