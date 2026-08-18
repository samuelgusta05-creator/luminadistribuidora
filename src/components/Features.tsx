import React from 'react';
import { Pillar } from '@/types';

const pillars: Pillar[] = [
  {
    id: '1',
    number: '01',
    icon: '✦',
    title: 'Curadoria Criteriosa.',
    description:
      'Selecionamos formulações de alta performance com eficácia comprovada, estabilidade de ativos e apelo estético para clientes exigentes.',
    highlight: 'Fórmulas limpas e certificadas',
    details: ['100% de conformidade ANVISA', 'Testes clínicos comprovados', 'Embalagens sustentáveis'],
  },
  {
    id: '2',
    number: '02',
    icon: '⚡',
    title: 'Logística Confiável.',
    description:
      'Processamento ágil de pedidos e controle de lote com rastreabilidade total, garantindo reposição regular sem risco de desabastecimento.',
    highlight: 'Entregas expressas em 24h a 48h',
    details: ['Cadeia com proteção térmica', 'Rastreamento em tempo real', 'Hub central em São Paulo'],
  },
  {
    id: '3',
    number: '03',
    icon: '🤝',
    title: 'Parceria Comercial Sólida.',
    description:
      'Condições comerciais atrativas para atacado, treinamentos técnicos de aplicação para equipes e suporte de consultor dedicado.',
    highlight: 'Margens saudáveis & suporte técnico',
    details: ['Consultor B2B exclusivo', 'Protocolos técnicos de apoio', 'Treinamento para profissionais'],
  },
];

export const Features: React.FC = () => {
  return (
    <section id="quem-somos" className="py-24 bg-[#ffffff] border-t border-[#d6d6d6]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[14px] font-semibold text-[#b64400]">
            Nossos Pilares
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#1d1d1f] mt-2">
            Estruturado para valorizar o seu negócio.
          </h2>
          <p className="mt-4 text-[17px] text-[#707070] font-normal leading-relaxed">
            Oferecemos uma base de fornecimento estável para que seu salão ou farmácia seja referência em excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#f5f5f7] rounded-[28px] p-8 flex flex-col justify-between border border-[#e8e8ed] hover:border-[#d6d6d6] transition-colors duration-150"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#ffffff] flex items-center justify-center text-[#1d1d1f] font-semibold text-sm shadow-xs">
                    {pillar.icon}
                  </span>
                  <span className="text-xs font-semibold text-[#707070]">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight mb-3">
                  {pillar.title}
                </h3>

                <p className="text-[15px] text-[#707070] font-normal leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {pillar.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[13px] text-[#424245]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1d1d1f]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#e8e8ed] text-[13px] font-medium text-[#1d1d1f]">
                ✓ {pillar.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
