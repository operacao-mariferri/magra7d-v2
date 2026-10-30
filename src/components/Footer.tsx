import React from 'react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="py-12 bg-[#121218] border-t border-slate-800/80 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        
        {/* Brand identity */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-base font-extrabold text-white">Magra</span>
          <span className="text-base font-extrabold text-gradient-pink-purple">7D</span>
          <span className="text-xs text-slate-400">· Dra. Mari Ferri Nutrição</span>
        </div>

        {/* Legal Links */}
        <div className="flex items-center justify-center gap-6 font-medium text-slate-400">
          <button
            onClick={() => onOpenLegal('privacy')}
            className="hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            Política de Privacidade
          </button>
          <span>·</span>
          <button
            onClick={() => onOpenLegal('terms')}
            className="hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            Termos de Uso
          </button>
        </div>

        {/* Mandated Disclaimer */}
        <div className="max-w-2xl mx-auto text-slate-400 text-xs leading-relaxed border-t border-slate-800/60 pt-5">
          <p>
            "Os resultados variam de pessoa para pessoa e dependem de dedicação, hábitos e acompanhamento profissional."
          </p>
          <p className="mt-2 text-[11px] text-slate-400">
            Este produto não substitui o parecer médico profissional. Sempre consulte um médico para tratar de assuntos relativos à sua saúde.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-[11px] text-slate-400 pt-2">
          © 2026 Magra 7D - Dra. Mari Ferri. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
};
