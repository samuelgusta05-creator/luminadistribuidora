import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d6d6d6] pt-16 pb-12">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="#inicio" className="flex items-center gap-1.5">
              <span className="text-xl font-semibold tracking-[-0.03em] text-[#1d1d1f] uppercase">
                Lúmina
              </span>
            </Link>
            <p className="mt-3 text-[12px] text-[#707070] font-normal leading-relaxed">
              Distribuidora especializada em marcas de alta cosmética para salões, spas e farmácias boutique.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">
              Navegação
            </h4>
            <ul className="space-y-2 text-[12px] text-[#707070]">
              <li>
                <Link href="#inicio" className="hover:text-[#0066cc] transition-colors">Início</Link>
              </li>
              <li>
                <Link href="#experiencia" className="hover:text-[#0066cc] transition-colors">Experiência</Link>
              </li>
              <li>
                <Link href="#quem-somos" className="hover:text-[#0066cc] transition-colors">Quem Somos</Link>
              </li>
              <li>
                <Link href="#catalogo" className="hover:text-[#0066cc] transition-colors">Catálogo B2B</Link>
              </li>
            </ul>
          </div>

          {/* Business Channel */}
          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">
              Atendimento B2B
            </h4>
            <ul className="space-y-2 text-[12px] text-[#707070]">
              <li>contato@luminadistribuidora.com.br</li>
              <li>comercial@luminadistribuidora.com.br</li>
              <li>+55 (11) 3040-8800</li>
              <li>WhatsApp: +55 (11) 99988-7766</li>
            </ul>
          </div>

          {/* Legal / Compliance */}
          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">
              Conformidade
            </h4>
            <ul className="space-y-2 text-[12px] text-[#707070]">
              <li>Termos de Fornecimento B2B</li>
              <li>Política de Privacidade & LGPD</li>
              <li>Registro ANVISA & Rastreabilidade</li>
              <li>Portal do Lojista</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#d6d6d6] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#707070] gap-3">
          <p>© {new Date().getFullYear()} Lúmina Cosméticos e Distribuição Ltda. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00 · São Paulo - SP</p>
        </div>
      </div>
    </footer>
  );
};
