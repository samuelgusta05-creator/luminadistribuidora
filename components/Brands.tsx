import React from 'react';
import { Brand } from '@/types';

const brands: Brand[] = [
  { name: 'Élixir Botanique', origin: 'Paris', specialty: 'Fitocosmética de Luxo', badge: 'Exclusivo' },
  { name: 'Aura Derma Lab', origin: 'Zurich', specialty: 'Biotecnologia Celular', badge: 'Alta Potência' },
  { name: 'Vértice Bio', origin: 'Milano', specialty: 'Cuidado Capilar Nobre', badge: 'Best Seller' },
  { name: 'Pureté Organics', origin: 'São Paulo', specialty: 'Bioma Brasileiro', badge: 'Sustentável' },
  { name: 'Sérum Haute', origin: 'Barcelona', specialty: 'Protocolos de Cabine', badge: 'Profissional' },
];

export const Brands: React.FC = () => {
  return (
    <section className="py-16 bg-[#ffffff] border-t border-[#d6d6d6]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <p className="text-center text-[12px] uppercase tracking-[0.08em] text-[#707070] font-semibold mb-8">
          Marcas em nosso portfólio de distribuição
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-5 rounded-[20px] bg-[#f5f5f7] hover:bg-[#e8e8ed] transition-colors duration-150 text-center"
            >
              <span className="text-[16px] sm:text-[17px] font-semibold text-[#1d1d1f] tracking-tight">
                {brand.name}
              </span>
              <span className="text-[12px] text-[#707070] mt-1 font-normal">
                {brand.origin}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
