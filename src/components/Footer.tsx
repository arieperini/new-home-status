"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white text-xs">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-3">INVEST</h3>
            <ul className="space-y-2">
              <li><Link href="/sobre" className="hover:text-emerald-400">Sobre nós</Link></li>
              <li><Link href="/contato" className="hover:text-emerald-400">Contato</Link></li>
              <li><Link href="/termos" className="hover:text-emerald-400">Termos de Uso</Link></li>
              <li><Link href="/privacidade" className="hover:text-emerald-400">Política de Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Mercados</h3>
            <ul className="space-y-2">
              <li><Link href="/acoes" className="hover:text-emerald-400">Ações</Link></li>
              <li><Link href="/fiis" className="hover:text-emerald-400">FIIs</Link></li>
              <li><Link href="/bdrs" className="hover:text-emerald-400">BDRs</Link></li>
              <li><Link href="/tesouro-direto" className="hover:text-emerald-400">Tesouro Direto</Link></li>
              <li><Link href="/fundos" className="hover:text-emerald-400">Fundos de Investimento</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Ferramentas</h3>
            <ul className="space-y-2">
              <li><Link href="/comparador" className="hover:text-emerald-400">Comparador de Ativos</Link></li>
              <li><Link href="/carteiras" className="hover:text-emerald-400">Carteiras Recomendadas</Link></li>
              <li><Link href="/alertas" className="hover:text-emerald-400">Alertas de Preço</Link></li>
              <li><Link href="/calculadoras" className="hover:text-emerald-400">Calculadoras</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Conecte-se</h3>
            <ul className="space-y-2">
              <li><Link href="https://facebook.com" className="hover:text-emerald-400">Facebook</Link></li>
              <li><Link href="https://twitter.com" className="hover:text-emerald-400">Twitter</Link></li>
              <li><Link href="https://instagram.com" className="hover:text-emerald-400">Instagram</Link></li>
              <li><Link href="https://youtube.com" className="hover:text-emerald-400">YouTube</Link></li>
              <li><Link href="https://linkedin.com" className="hover:text-emerald-400">LinkedIn</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 bg-zinc-700" />

        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <p className="mb-3 md:mb-0">
            © {new Date().getFullYear()} INVEST. Todos os direitos reservados.
          </p>
          <p className="text-zinc-400">
            As informações neste site são de caráter informativo e educacional, não constituindo recomendação de investimento.
          </p>
        </div>
      </div>
    </footer>
  );
}
