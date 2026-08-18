'use client';

import React, { useState } from 'react';

export const LocationSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="onde-estamos" className="py-24 bg-[#f5f5f7] border-t border-[#d6d6d6]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Location & Logistical Details */}
          <div className="lg:col-span-6">
            <span className="text-[14px] font-semibold text-[#b64400]">
              Onde Estamos & Cobertura
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#1d1d1f] mt-2 mb-6">
              Distribuição nacional com hub em São Paulo.
            </h2>
            <p className="text-[17px] text-[#707070] font-normal leading-relaxed mb-8">
              Atendemos salões de beleza, clínicas e farmácias boutique em todo o território nacional com frete seguro e controle de lote.
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-[20px] bg-[#ffffff] border border-[#e8e8ed]">
                <div className="text-[15px] font-semibold text-[#1d1d1f]">Centro de Distribuição Principal</div>
                <div className="text-[13px] text-[#707070] mt-1">
                  Av. Brigadeiro Faria Lima, 3477 — Itaim Bibi, São Paulo - SP
                </div>
              </div>

              <div className="p-5 rounded-[20px] bg-[#ffffff] border border-[#e8e8ed]">
                <div className="text-[15px] font-semibold text-[#1d1d1f]">Prazos de Envio</div>
                <div className="text-[13px] text-[#707070] mt-1">
                  Grande São Paulo: até 24h. Principais capitais: 48h úteis.
                </div>
              </div>

              <div className="p-5 rounded-[20px] bg-[#ffffff] border border-[#e8e8ed]">
                <div className="text-[15px] font-semibold text-[#1d1d1f]">Atendimento Comercial</div>
                <div className="text-[13px] text-[#707070] mt-1">
                  Segunda a Sexta, das 08h30 às 18h00
                </div>
              </div>
            </div>
          </div>

          {/* B2B Onboarding Form (Apple Style Paper Card) */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-[28px] bg-[#ffffff] border border-[#d6d6d6] shadow-sm">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight mb-2">
                Solicite Credenciamento B2B
              </h3>
              <p className="text-[14px] text-[#707070] mb-6">
                Cadastre seu estabelecimento para receber a tabela com preços de atacado.
              </p>

              {submitted ? (
                <div className="p-6 rounded-[20px] bg-[#f5f5f7] border border-[#d6d6d6] text-center">
                  <div className="text-[16px] font-semibold text-[#1d1d1f]">Solicitação enviada.</div>
                  <div className="text-[13px] text-[#707070] mt-1">
                    Um consultor entrará em contato em até 2 horas úteis.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[12px] font-medium text-[#707070] mb-1.5">
                      Nome do Responsável
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Mariana Costa"
                      className="w-full px-4 py-2.5 rounded-[12px] bg-[#f5f5f7] border border-[#e8e8ed] text-[15px] text-[#1d1d1f] placeholder-[#a1a1a6] focus:outline-none focus:border-[#1d1d1f] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-medium text-[#707070] mb-1.5">
                        Tipo de Negócio
                      </label>
                      <select
                        className="w-full px-4 py-2.5 rounded-[12px] bg-[#f5f5f7] border border-[#e8e8ed] text-[15px] text-[#1d1d1f] focus:outline-none focus:border-[#1d1d1f] transition-colors"
                      >
                        <option value="salao">Salão de Beleza / Spa</option>
                        <option value="farmacia">Farmácia Boutique</option>
                        <option value="clinica">Clínica Estética</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-[#707070] mb-1.5">
                        WhatsApp Comercial
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-2.5 rounded-[12px] bg-[#f5f5f7] border border-[#e8e8ed] text-[15px] text-[#1d1d1f] placeholder-[#a1a1a6] focus:outline-none focus:border-[#1d1d1f] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium text-[#707070] mb-1.5">
                      E-mail Corporativo
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contato@seuestabelecimento.com.br"
                      className="w-full px-4 py-2.5 rounded-[12px] bg-[#f5f5f7] border border-[#e8e8ed] text-[15px] text-[#1d1d1f] placeholder-[#a1a1a6] focus:outline-none focus:border-[#1d1d1f] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 text-[15px] font-normal text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-[980px] transition-all duration-150 shadow-sm active:scale-95"
                  >
                    Acessar Tabela de Atacado
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
