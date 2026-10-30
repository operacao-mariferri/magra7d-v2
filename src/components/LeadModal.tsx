import React, { useState } from 'react';
import { X, Lock, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig.ts';
import { TrackingParams } from '../types/index.ts';
import { formatPhone, isValidEmail, isValidName, isValidPhone } from '../utils/validation.ts';
import { buildCheckoutUrl } from '../utils/utm.ts';
import { trackInitiateCheckoutEvent, trackLeadEvent } from '../utils/tracking.ts';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  trackingParams: TrackingParams;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, trackingParams }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const [errors, setErrors] = useState<{ name?: string; email?: string; whatsapp?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirectSuccess, setRedirectSuccess] = useState(false);
  const [targetCheckoutUrl, setTargetCheckoutUrl] = useState('');

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setWhatsapp(formatted);
    if (errors.whatsapp) {
      setErrors((prev) => ({ ...prev, whatsapp: undefined }));
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: undefined }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação estrita
    const newErrors: { name?: string; email?: string; whatsapp?: string } = {};

    if (!isValidName(name)) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    }
    if (!isValidEmail(email)) {
      newErrors.email = 'Por favor, informe um e-mail válido.';
    }
    if (!isValidPhone(whatsapp)) {
      newErrors.whatsapp = 'Informe um WhatsApp com DDD (10 ou 11 dígitos).';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Dispara eventos de rastreamento
      trackLeadEvent({ name, email });
      trackInitiateCheckoutEvent();

      // 2. Guarda dados do lead
      const leadPayload = { name: name.trim(), email: email.trim(), whatsapp };
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('m7d_lead_data', JSON.stringify(leadPayload));
      }

      // 3. Constrói URL do checkout com todos os parâmetros UTM e fbclid
      const checkoutUrl = buildCheckoutUrl(siteConfig.checkoutUrl, leadPayload, trackingParams);
      setTargetCheckoutUrl(checkoutUrl);
      setRedirectSuccess(true);

      // 4. Redireciona para o checkout
      setTimeout(() => {
        window.location.href = checkoutUrl;
      }, 1200);
    } catch (err) {
      console.error('Erro no processamento da inscrição:', err);
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-md bg-[#20202b] border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden animate-in fade-in duration-200">
        
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Fechar formulário"
          disabled={isSubmitting}
        >
          <X className="w-5 h-5" />
        </button>

        {redirectSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold text-white">Dados confirmados!</h3>
            <p className="text-sm text-slate-300">
              Redirecionando você com segurança para o ambiente de pagamento oficial...
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
              <Loader2 className="w-4 h-4 animate-spin text-[#22c55e]" />
              <span>Conectando ao checkout...</span>
            </div>
            <div className="pt-3">
              <a
                href={targetCheckoutUrl}
                className="text-xs text-emerald-400 underline hover:text-emerald-300"
              >
                Clique aqui se não for redirecionado automaticamente
              </a>
            </div>
          </div>
        ) : (
          <>
            {/* Header do Modal */}
            <div className="text-center mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff9f1c]">
                Quase lá!
              </span>
              <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                Garanta Sua Vaga no <span className="text-gradient-pink-purple">Magra 7D</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5">
                Preencha seus dados para liberar o acesso ao protocolo e seguir para o pagamento.
              </p>
            </div>

            {/* Formulário: Nome, E-mail, WhatsApp */}
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="lead-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Nome Completo
                </label>
                <input
                  id="lead-name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={handleNameChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-700 focus:border-[#ff3d8b] focus:ring-[#ff3d8b]/30'
                  }`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1 font-medium">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="lead-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Seu Melhor E-mail
                </label>
                <input
                  id="lead-email"
                  type="email"
                  placeholder="exemplo@email.com"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-700 focus:border-[#ff3d8b] focus:ring-[#ff3d8b]/30'
                  }`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1 font-medium">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="lead-whatsapp" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  WhatsApp com DDD
                </label>
                <input
                  id="lead-whatsapp"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={whatsapp}
                  onChange={handlePhoneChange}
                  maxLength={15}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.whatsapp
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-700 focus:border-[#ff3d8b] focus:ring-[#ff3d8b]/30'
                  }`}
                  disabled={isSubmitting}
                />
                {errors.whatsapp && (
                  <p className="text-xs text-red-400 mt-1 font-medium">{errors.whatsapp}</p>
                )}
              </div>

              {/* Botão do modal: IR PARA O PAGAMENTO */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-sm sm:text-base font-extrabold tracking-wider uppercase text-white bg-[#22c55e] hover:bg-[#16a34a] rounded-full transition-all duration-200 glow-green active:scale-95 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>PROCESSANDO...</span>
                    </>
                  ) : (
                    <>
                      <span>IR PARA O PAGAMENTO</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Informação de segurança */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Seus dados estão protegidos. Não enviamos spam.</span>
              </div>
            </form>
          </>
        )}

      </div>
    </div>
  );
};
