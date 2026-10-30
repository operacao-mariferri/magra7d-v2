import { siteConfig } from '../config/siteConfig.ts';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
    clarity?: (...args: any[]) => void;
  }
}

/**
 * Inicializa o Meta Pixel de forma segura e não bloqueante.
 */
export function initMetaPixel(pixelId = siteConfig.tracking.metaPixelId): void {
  if (typeof window === 'undefined' || !pixelId || pixelId === 'PIXEL_ID') {
    return;
  }

  if (window.fbq) return;

  try {
    /* eslint-disable */
    (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s?.parentNode?.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    const win = window as any;
    if (typeof win.fbq === 'function') {
      win.fbq('init', pixelId);
      win.fbq('track', 'PageView');
    }
  } catch (err) {
    console.warn('Meta Pixel initialization warning:', err);
  }
}

/**
 * Inicializa o Microsoft Clarity de forma não bloqueante.
 */
export function initClarity(clarityId = siteConfig.tracking.clarityProjectId): void {
  if (typeof window === 'undefined' || !clarityId) return;
  if (window.clarity) return;

  try {
    /* eslint-disable */
    (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0];
      y?.parentNode?.insertBefore(t, y);
    })(window, document, 'clarity', 'script', clarityId);
  } catch (err) {
    console.warn('Microsoft Clarity initialization warning:', err);
  }
}

/**
 * Dispara evento Lead no Meta Pixel.
 */
export function trackLeadEvent(data?: { name?: string; email?: string }): void {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Magra 7D - Dra. Mari Ferri',
        currency: 'BRL',
        value: 67.0,
      });
    }
  } catch (err) {
    // silently catch adblockers
  }
}

/**
 * Dispara evento InitiateCheckout no Meta Pixel ao prosseguir para o checkout.
 */
export function trackInitiateCheckoutEvent(): void {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Magra 7D Inscrição',
        content_category: 'Evento Online',
        currency: 'BRL',
        value: 67.0,
        num_items: 1,
      });
    }
  } catch (err) {
    // silently catch adblockers
  }
}
