import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#17171f]/90 backdrop-blur-md border-b border-[#20202b]/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Brand Zone: 1-line wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3d8b]"
          aria-label="Magra 7D Dra. Mari Ferri Início"
        >
          <span className="text-white font-extrabold">Magra</span>
          <span className="text-gradient-pink-purple font-extrabold">7D</span>
          <span className="text-xs font-semibold text-slate-400 border border-slate-700/60 rounded px-1.5 py-0.5 ml-1 hidden sm:inline-block">
            Dra. Mari Ferri
          </span>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#como-funciona" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Como Funciona
          </a>
          <a href="#conteudo" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            O que Recebe
          </a>
          <a href="#garantia" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Garantia
          </a>
          <a href="#faq" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Dúvidas
          </a>
        </nav>

        {/* Primary Action Button */}
        <div className="flex items-center shrink-0">
          <button
            onClick={onOpenModal}
            className="px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#22c55e] hover:bg-[#16a34a] rounded-full transition-all duration-200 glow-green active:scale-95 whitespace-nowrap cursor-pointer"
          >
            QUERO PARTICIPAR
          </button>
        </div>
      </div>
    </header>
  );
};
