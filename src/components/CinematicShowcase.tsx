'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShowcaseStep } from '@/types';

const steps: ShowcaseStep[] = [
  {
    step: '01',
    tag: 'Curadoria',
    title: 'Formulações de Pureza Superior.',
    subtitle: 'Rigor Clínico e Cosmética Limpa',
    description:
      'Cada produto homologado passa por testes de estabilidade, dermatologia e aceitação por especialistas antes de ingressar no catálogo Lúmina.',
    metric: 'Ativos 100% Rastreáveis',
  },
  {
    step: '02',
    tag: 'Logística',
    title: 'Cadeia de Distribuição Segura.',
    subtitle: 'Armazenamento Climatizado',
    description:
      'Os ativos fotossensíveis e termossensíveis são movimentados em embalagens com barreira térmica que preservam a integridade de cada frasco até o seu salão.',
    metric: 'Zero Degradação Térmica',
  },
  {
    step: '03',
    tag: 'Rentabilidade',
    title: 'Margens Planejadas para o Salão.',
    subtitle: 'Cabine e Revenda Consultiva',
    description:
      'Condições comerciais desenhadas para potencializar o ticket médio do seu estabelecimento com serviços de alto valor percebido e produtos de forte saída.',
    metric: 'Margens de 35% a 52%',
  },
];

export const CinematicShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="experiencia" className="py-24 bg-[#f5f5f7] border-t border-[#d6d6d6]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[14px] font-semibold text-[#b64400] tracking-tight">
            A Experiência Lúmina
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#1d1d1f] mt-2">
            Da concepção científica à sua bancada.
          </h2>
          <p className="mt-4 text-[17px] text-[#707070] font-normal leading-relaxed">
            Uma estrutura de suprimentos pensada para quem exige pontualidade, procedência e sofisticação.
          </p>
        </div>

        {/* 2-Column Feature Display (Apple Style 28px Radius Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Step Selector List */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-6 rounded-[28px] transition-all duration-200 border ${
                  activeStep === idx
                    ? 'bg-[#ffffff] border-[#d6d6d6] shadow-sm'
                    : 'bg-transparent border-transparent hover:bg-[#e8e8ed]/60 text-[#707070]'
                }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-semibold text-[#b89368]">{item.step}</span>
                  <span className="text-[12px] font-medium text-[#707070] uppercase tracking-wider">{item.tag}</span>
                </div>
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#707070] mt-1.5 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Large Showcase Card (28px Radius, White Canvas) */}
          <div className="lg:col-span-7">
            <div className="bg-[#ffffff] rounded-[28px] p-8 sm:p-12 border border-[#d6d6d6] min-h-[420px] flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between border-b border-[#f5f5f7] pb-4 mb-6">
                  <span className="text-xs font-semibold text-[#707070] uppercase tracking-wider">
                    Etapa {steps[activeStep].step}
                  </span>
                  <span className="text-xs font-medium text-[#0066cc]">
                    {steps[activeStep].metric}
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] tracking-tight mb-3">
                  {steps[activeStep].subtitle}
                </h4>

                <p className="text-[17px] text-[#707070] font-normal leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#f5f5f7] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-2 rounded-full transition-all duration-200 ${
                        activeStep === i ? 'w-6 bg-[#1d1d1f]' : 'w-2 bg-[#d6d6d6]'
                      }`}
                      aria-label={`Ir para etapa ${i + 1}`}
                    />
                  ))}
                </div>

                <Link
                  href="#onde-estamos"
                  className="text-[14px] font-normal text-[#0066cc] hover:underline inline-flex items-center gap-1"
                >
                  <span>Saber mais</span>
                  <span>›</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
