'use client';

import React from 'react';
import Link from 'next/link';
import { AnimatedCounter } from './AnimatedCounter';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#ffffff]"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10 w-full text-center">
        {/* Eyebrow Label / Warm Authority Badge */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-[13px] sm:text-[14px] font-semibold text-[#b64400] tracking-[-0.01em]">
            Novo Programa B2B 2026
          </span>
          <span className="text-[#707070] text-xs">·</span>
          <span className="text-[13px] sm:text-[14px] font-normal text-[#707070] tracking-[-0.01em]">
            Abastecendo os melhores salões do Brasil
          </span>
        </div>

        {/* Monumental Apple-Style Display Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-semibold tracking-[-0.035em] text-[#1d1d1f] leading-[1.04] max-w-5xl mx-auto">
          Beleza refinada, <br />
          entregue com excelência.
        </h1>

        {/* Subtitle Body 17px Workhorse */}
        <p className="mt-6 text-[17px] sm:text-[21px] text-[#707070] font-normal leading-[1.38] max-w-2xl mx-auto tracking-[-0.01em]">
          Conectamos formulações de alta performance a salões conceituados e farmácias boutique com curadoria criteriosa, margens sólidas e envio expresso.
        </p>

        {/* CTAs (Pill Primary & Ghost) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#catalogo"
            className="w-full sm:w-auto px-6 py-2.5 text-[15px] sm:text-[17px] font-normal text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-[980px] transition-all duration-150 shadow-sm active:scale-95"
          >
            Ver Catálogo Atacado
          </Link>
          <Link
            href="#experiencia"
            className="w-full sm:w-auto px-6 py-2.5 text-[15px] sm:text-[17px] font-normal text-[#1d1d1f] hover:text-[#0066cc] bg-transparent border border-[#d6d6d6] hover:border-[#1d1d1f] rounded-[980px] transition-all duration-150 active:scale-95"
          >
            Conhecer a Experiência
          </Link>
        </div>

        {/* Hero Product Visual Display */}
        <div className="mt-16 relative flex items-center justify-center">
          <div className="w-full max-w-[860px] bg-[#f5f5f7] rounded-[28px] p-8 sm:p-12 border border-[#e8e8ed] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Soft Ambient Finish Glow */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#dbe3d8]/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#f4e6e6]/40 rounded-full blur-3xl pointer-events-none" />

            {/* Stylized Minimal Bottle Object */}
            <div className="relative my-4 flex items-center justify-center animate-float-apple">
              <div className="w-28 sm:w-32 h-56 sm:h-64 rounded-t-[28px] rounded-b-[20px] bg-[#1d1d1f] shadow-2xl flex flex-col items-center justify-between p-4 text-center text-white relative">
                {/* Cap */}
                <div className="w-10 h-6 bg-[#b89368] rounded-[4px] shadow-sm" />
                
                {/* Minimal typography inside product */}
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#f5f5f7]">
                    LÚMINA
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-[#a1a1a6] mt-1">
                    ÉLIXIR HAUTE · 50ML
                  </div>
                </div>

                <div className="w-12 h-1 bg-white/20 rounded-full" />
              </div>
            </div>

            {/* Product Tagline */}
            <div className="mt-6 text-center">
              <div className="text-[17px] font-semibold text-[#1d1d1f]">
                Linha Profissional & Atacado
              </div>
              <div className="text-[14px] text-[#707070] mt-0.5">
                Desenvolvido para cabine estética e revenda consultiva
              </div>
            </div>
          </div>
        </div>

        {/* Metric Bar */}
        <div className="mt-16 pt-10 border-t border-[#d6d6d6] grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div>
            <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1d1d1f]">
              <AnimatedCounter to={250} prefix="+" />
            </div>
            <div className="text-[12px] text-[#707070] mt-1 font-normal">
              Pontos Credenciados
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1d1d1f]">
              <AnimatedCounter to={100} suffix="%" />
            </div>
            <div className="text-[12px] text-[#707070] mt-1 font-normal">
              Conformidade Regulatória
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1d1d1f]">
              24h/48h
            </div>
            <div className="text-[12px] text-[#707070] mt-1 font-normal">
              Envio Expresso & Rastreável
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1d1d1f]">
              Atacado
            </div>
            <div className="text-[12px] text-[#707070] mt-1 font-normal">
              Margens até 52%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
