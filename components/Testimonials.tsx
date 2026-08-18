import React from 'react';
import { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Helena Montenegro',
    role: 'Diretora Criativa',
    business: 'Studio Montenegro Concept',
    city: 'São Paulo - SP',
    content:
      'A Lúmina transformou a percepção dos nossos tratamentos capilares. Nossas clientes notaram a qualidade imediata e nossa receita com revenda de produtos cresceu de forma consistente.',
    metric: '+38% em revenda',
    rating: 5,
  },
  {
    id: '2',
    name: 'Dr. Roberto Vasconcelos',
    role: 'Farmacêutico e Proprietário',
    business: 'Aura Farmácia de Manipulação',
    city: 'Curitiba - PR',
    content:
      'A pontualidade nas entregas e a documentação técnica impecável dos produtos facilitam nossa rotina. É um parceiro distribuidor com alto nível de compromisso.',
    metric: 'Zero falhas de estoque',
    rating: 5,
  },
  {
    id: '3',
    name: 'Camila Prado',
    role: 'Head Stylist',
    business: 'Prado Haute Coiffure',
    city: 'Rio de Janeiro - RJ',
    content:
      'Além dos produtos de padrão internacional, os treinamentos que a Lúmina forneceu para a nossa equipe foram determinantes para o sucesso das vendas em cabine.',
    metric: 'Equipe 100% capacitada',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#ffffff] border-t border-[#d6d6d6]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[14px] font-semibold text-[#b64400]">
            Depoimentos
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#1d1d1f] mt-2">
            A opinião de quem já é parceiro.
          </h2>
          <p className="mt-3 text-[17px] text-[#707070] font-normal">
            Resultados de quem integrou a distribuição Lúmina à operação diária.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#f5f5f7] rounded-[28px] p-8 flex flex-col justify-between border border-[#e8e8ed]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold text-[#1d1d1f]">
                    {'★'.repeat(t.rating)}
                  </span>
                  <span className="text-xs font-medium text-[#0066cc] bg-[#ffffff] px-2.5 py-1 rounded-full">
                    {t.metric}
                  </span>
                </div>

                <p className="text-[16px] text-[#1d1d1f] font-normal leading-relaxed mb-6">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#e8e8ed]">
                <div className="text-[15px] font-semibold text-[#1d1d1f]">{t.name}</div>
                <div className="text-[13px] text-[#707070]">
                  {t.role} · {t.business}
                </div>
                <div className="text-[11px] text-[#a1a1a6] mt-0.5">{t.city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
