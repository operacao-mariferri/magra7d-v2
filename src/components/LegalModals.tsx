import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-[#20202b] border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4 text-sm text-slate-300">
            <h3 className="text-xl font-bold text-white mb-2">Política de Privacidade</h3>
            <p>
              A sua privacidade é fundamental para a Dra. Mari Ferri e a equipe do Magra 7D. Esta Política esclarece como coletamos, utilizamos e protegemos seus dados pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
            <h4 className="text-base font-semibold text-white">1. Dados Coletados</h4>
            <p>
              Coletamos informações como nome, e-mail e WhatsApp exclusivamente para identificar sua inscrição, liberar o acesso aos materiais do evento e enviar avisos essenciais sobre as aulas e orientações nutricionais.
            </p>
            <h4 className="text-base font-semibold text-white">2. Segurança das Informações</h4>
            <p>
              Adotamos práticas e tecnologias de segurança para evitar acessos não autorizados e jamais vendemos ou alugamos seus dados para terceiros.
            </p>
            <h4 className="text-base font-semibold text-white">3. Seus Direitos</h4>
            <p>
              Você pode a qualquer momento solicitar a atualização, retificação ou exclusão definitiva de seus dados de nossa base de contatos entrando em contato com nosso suporte.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-sm text-slate-300">
            <h3 className="text-xl font-bold text-white mb-2">Termos de Uso</h3>
            <p>
              Ao se inscrever no evento online Magra 7D, você concorda expressamente com as condições e termos aqui descritos.
            </p>
            <h4 className="text-base font-semibold text-white">1. Natureza Educacional</h4>
            <p>
              O conteúdo do Magra 7D tem caráter exclusivamente educativo e informativo sobre hábitos saudáveis e reeducação alimentar. Ele não substitui consultas médicas, diagnósticos ou tratamentos individualizados. Pessoas com condições de saúde preexistentes (como diabetes, cardiopatias ou gestantes) devem obrigatoriamente consultar seu médico assistente.
            </p>
            <h4 className="text-base font-semibold text-white">2. Direitos Autorais</h4>
            <p>
              Todos os materiais em vídeo, apostilas, cardápios e textos disponibilizados são de propriedade intelectual exclusiva da Dra. Mari Ferri, sendo vedado o compartilhamento não autorizado.
            </p>
            <h4 className="text-base font-semibold text-white">3. Garantia e Cancelamento</h4>
            <p>
              Oferecemos garantia de 7 dias a partir da data de compra. Caso deseje reembolso, basta solicitar formalmente dentro deste período pelos canais oficiais de suporte.
            </p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-700/80 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
