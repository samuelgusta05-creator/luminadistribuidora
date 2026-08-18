'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Onde Estamos', href: '#onde-estamos' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fafafc]/80 backdrop-blur-xl border-b border-[#d6d6d6]/60 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#inicio" className="group flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-semibold tracking-[-0.03em] text-[#1d1d1f] uppercase group-hover:opacity-75 transition-opacity">
            Lúmina
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#b89368]" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-[-0.01em] text-[#1d1d1f] hover:text-[#0066cc] transition-colors duration-150 font-normal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Header Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#onde-estamos"
            className="px-4 py-1.5 text-[13px] font-normal text-white bg-[#1d1d1f] hover:bg-[#333336] rounded-[980px] transition-all duration-200 shadow-sm active:scale-95"
          >
            Credenciamento B2B
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#1d1d1f] p-2 focus:outline-none"
          aria-label="Abrir Menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between items-end">
            <span
              className={`h-[1.5px] bg-[#1d1d1f] transition-all duration-200 ${
                mobileMenuOpen ? 'w-5 rotate-45 translate-y-1.5' : 'w-5'
              }`}
            />
            <span
              className={`h-[1.5px] bg-[#1d1d1f] transition-all duration-200 ${
                mobileMenuOpen ? 'opacity-0' : 'w-4'
              }`}
            />
            <span
              className={`h-[1.5px] bg-[#1d1d1f] transition-all duration-200 ${
                mobileMenuOpen ? 'w-5 -rotate-45 -translate-y-1.5' : 'w-5'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-[#fafafc]/95 border-b border-[#d6d6d6] backdrop-blur-2xl ${
          mobileMenuOpen ? 'max-h-80 opacity-100 py-6 px-6' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <nav className="flex flex-col items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[15px] text-[#1d1d1f] hover:text-[#0066cc] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#onde-estamos"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-2.5 text-[14px] font-normal text-white bg-[#1d1d1f] rounded-[980px] transition-all"
          >
            Credenciamento B2B
          </Link>
        </nav>
      </div>
    </header>
  );
};
