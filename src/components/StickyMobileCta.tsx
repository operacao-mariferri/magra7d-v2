import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface StickyMobileCtaProps {
  onOpenModal: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onOpenModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe apenas após o usuário rolar além da dobra do hero (~450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#17171f]/95 backdrop-blur-md border-t border-slate-800 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] transition-all duration-300 animate-in slide-in-from-bottom"
      style={{ maxHeight: '14vh' }}
    >
      <button
        onClick={onOpenModal}
        className="w-full h-12 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-sm tracking-wider uppercase flex items-center justify-center gap-2 glow-green active:scale-95 transition-all shadow-lg cursor-pointer"
        aria-label="Quero Participar do Magra 7D"
      >
        <span>QUERO PARTICIPAR</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
