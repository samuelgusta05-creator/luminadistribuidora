import React from 'react';
import Link from 'next/link';
import { ProductCategory } from '@/types';

const categories: ProductCategory[] = [
  {
    id: 'seruns',
    badge: 'Alta Margem',
    category: 'Facial',
    title: 'Séruns Concentrados',
    subtitle: 'Efeito Lifting & Regeneração Celular',
    description:
      'Soluções de alta absorção com ácido hialurônico fracionado, vitamina C estabilizada e peptídeos botânicos para protocolos de cabine e revenda.',
    actives: ['Niacinamida 10%', 'Retinol Encapsulado', 'Peptídeos'],
    volume: 'Frascos 30ml e 50ml',
    yieldPerBottle: '~60 aplicações',
    marginB2B: 'Margem até 48%',
    colorGradient: 'bg-[#dbe3d8]', // Botanical Sage
  },
  {
    id: 'cremes',
    badge: 'Mais Vendido',
    category: 'Restauração',
    title: 'Cremes & Emulsões Nobres',
    subtitle: 'Nutrição Pós-Procedimentos',
    description:
      'Texturas aveludadas para reposição de barreira lipídica, proteção contra estresse oxidativo e recuperação estética.',
    actives: ['Ceramidas III', 'Esqualano Vegetal', 'Murumuru'],
    volume: 'Potes 50g e 200g (Cabine)',
    yieldPerBottle: '~80 aplicações',
    marginB2B: 'Margem até 45%',
    colorGradient: 'bg-[#f4e6e6]', // Rose Quartz
  },
  {
    id: 'oleos',
    badge: 'Uso & Revenda',
    category: 'Capilar',
    title: 'Óleos Preciosos & Blends',
    subtitle: 'Finalização Sublime com Toque Seco',
    description:
      'Combinação de óleos nobres prensados a frio com proteção térmica para escovas refinadas e tratamentos capilares intensivos.',
    actives: ['Camélia Japonesa', 'Óleo de Argan Puro', 'Vitamina E'],
    volume: 'Frascos 60ml e 100ml',
    yieldPerBottle: '~120 aplicações',
    marginB2B: 'Margem até 52%',
    colorGradient: 'bg-[#f7edd9]', // Golden Amber
  },
];

export const ProductGrid: React.FC = () => {
  return (
    <section id="catalogo" className="py-24 bg-[#f5f5f7] border-t border-[#d6d6d6]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[14px] font-semibold text-[#b64400]">
              Portfólio de Produtos
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#1d1d1f] mt-2">
              Curadoria para Profissionais.
            </h2>
            <p className="mt-3 text-[17px] text-[#707070] font-normal max-w-lg">
              Linhas com alto rendimento para cabine estética e apelo de revenda ao consumidor final.
            </p>
          </div>

          <Link
            href="#onde-estamos"
            className="text-[15px] font-normal text-[#0066cc] hover:underline inline-flex items-center gap-1"
          >
            <span>Solicitar tabela completa de atacado</span>
            <span>→</span>
          </Link>
        </div>

        {/* 3-Column 28px Radius Cards Grid (Apple Style Flat) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-[#ffffff] rounded-[28px] p-8 flex flex-col justify-between border border-[#e8e8ed] hover:border-[#d6d6d6] transition-all duration-150"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold text-[#707070] uppercase tracking-wider">
                    {cat.category}
                  </span>
                  <span className="px-3 py-1 text-[12px] font-medium rounded-[980px] bg-[#f5f5f7] text-[#1d1d1f]">
                    {cat.badge}
                  </span>
                </div>

                {/* Product Color Finish Card Swatch */}
                <div className={`w-full h-36 rounded-[20px] ${cat.colorGradient} flex items-center justify-center mb-6`}>
                  <span className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-widest opacity-60">
                    Acabamento {cat.category}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-[13px] text-[#707070] mt-1 mb-4 italic">
                  {cat.subtitle}
                </p>

                <p className="text-[15px] text-[#707070] font-normal leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Specs Box */}
                <div className="p-4 rounded-[16px] bg-[#f5f5f7] mb-6 space-y-1.5 text-[13px]">
                  <div className="flex justify-between text-[#424245]">
                    <span className="text-[#707070]">Volumetria:</span>
                    <span className="font-medium text-[#1d1d1f]">{cat.volume}</span>
                  </div>
                  <div className="flex justify-between text-[#424245]">
                    <span className="text-[#707070]">Rendimento estimado:</span>
                    <span className="font-medium text-[#1d1d1f]">{cat.yieldPerBottle}</span>
                  </div>
                  <div className="flex justify-between text-[#1d1d1f] font-semibold">
                    <span>Condição B2B:</span>
                    <span className="text-[#0071e3]">{cat.marginB2B}</span>
                  </div>
                </div>

                {/* Active Chips */}
                <div className="mb-6">
                  <span className="text-[11px] uppercase tracking-wider text-[#707070] font-semibold block mb-2">
                    Ativos Principais
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.actives.map((active, i) => (
                      <span
                        key={i}
                        className="text-[12px] px-2.5 py-1 rounded-[8px] bg-[#f5f5f7] text-[#1d1d1f]"
                      >
                        {active}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="#onde-estamos"
                className="w-full py-2.5 text-center text-[14px] font-normal text-[#1d1d1f] hover:text-white bg-[#f5f5f7] hover:bg-[#1d1d1f] rounded-[980px] transition-all duration-150"
              >
                Consultar Condições Atacado
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
