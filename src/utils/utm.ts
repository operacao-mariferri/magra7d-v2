import { TrackingParams } from '../types/index.ts';

export const DEFAULT_HEADLINE = "Perca até 4kg em 7 dias sem dietas malucas, sem academia e sem passar fome.";

export const AD_HEADLINES: { match: string; headline: string }[] = [
  { match: "AD06", headline: "Liberte-se do açúcar e comece seu reset de 7 dias com a Dra. Mari Ferri" },
  { match: "AD07", headline: "Emagreça cuidando da sua saúde e da sua qualidade de vida em 7 dias" },
  { match: "AD09", headline: "Emagreça junto com a sua família em 7 dias, sem dietas malucas" },
  { match: "AD02", headline: "Chegou a hora certa de começar o seu reset de 7 dias com a Dra. Mari Ferri" },
  { match: "AD03", headline: "Um protocolo de 7 dias que cabe na sua rotina real" },
  { match: "AD08", headline: "Veja os resultados de quem já fez o Magra 7D" },
];

/**
 * Retorna o título H1 dinâmico baseado no parâmetro utm_content.
 * Decodifica a URL e ignora maiúsculas/minúsculas.
 */
export function getHeadlineFromUtmContent(utmContent?: string | null): string {
  if (!utmContent) {
    return DEFAULT_HEADLINE;
  }

  const decoded = decodeURIComponent(utmContent).toUpperCase();

  for (const item of AD_HEADLINES) {
    if (decoded.includes(item.match)) {
      return item.headline;
    }
  }

  return DEFAULT_HEADLINE;
}

/**
 * Gera ou recupera um identificador único de visitante (Visitor ID).
 */
export function getOrCreateVisitorId(): string {
  const STORAGE_KEY = 'm7d_visitor_id';
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      let vid = window.localStorage.getItem(STORAGE_KEY);
      if (!vid) {
        vid = 'v_' + Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
        window.localStorage.setItem(STORAGE_KEY, vid);
      }
      return vid;
    }
  } catch (e) {
    // Fallback if localStorage is disabled
  }
  return 'v_' + Math.random().toString(36).substring(2, 9);
}

/**
 * Extrai todos os parâmetros UTM e fbclid/gclid da URL.
 * Preserva e adiciona o identificador do visitante ao utm_source.
 */
export function extractTrackingParams(searchString: string, visitorId?: string): TrackingParams {
  const params: TrackingParams = {};
  if (!searchString) return params;

  const urlParams = new URLSearchParams(searchString.startsWith('?') ? searchString : `?${searchString}`);
  
  // Lista de parâmetros prioritários de rastreamento
  const priorityKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'];

  urlParams.forEach((val, key) => {
    params[key] = val;
  });

  const vId = visitorId || getOrCreateVisitorId();
  params.visitor_id = vId;

  // Preserva a lógica que acrescenta o identificador do visitante ao utm_source
  let currentSource = params.utm_source;
  if (!currentSource) {
    params.utm_source = `organic_${vId}`;
  } else if (!currentSource.includes(vId)) {
    params.utm_source = `${currentSource}_${vId}`;
  }

  return params;
}

/**
 * Constrói a URL final de checkout repassando nome, email, telefone e todos os parâmetros de rastreamento.
 */
export function buildCheckoutUrl(
  baseUrl: string,
  lead: { name: string; email: string; whatsapp: string },
  tracking: TrackingParams
): string {
  try {
    const url = new URL(baseUrl);
    
    // Adiciona dados do lead
    if (lead.name) url.searchParams.set('name', lead.name);
    if (lead.email) url.searchParams.set('email', lead.email);
    if (lead.whatsapp) {
      const cleanPhone = lead.whatsapp.replace(/\D/g, '');
      url.searchParams.set('phone', cleanPhone);
      url.searchParams.set('telephone', cleanPhone);
    }

    // Repassa todos os parâmetros de rastreamento
    Object.entries(tracking).forEach(([key, val]) => {
      if (val !== undefined && val !== null && val !== '') {
        url.searchParams.set(key, val);
      }
    });

    return url.toString();
  } catch {
    // Se a baseUrl for relativa ou incompleta
    const cleanPhone = lead.whatsapp.replace(/\D/g, '');
    const query = new URLSearchParams({
      name: lead.name,
      email: lead.email,
      phone: cleanPhone,
      ...tracking,
    });
    return `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}${query.toString()}`;
  }
}
