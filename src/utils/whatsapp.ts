import { siteConfig } from '../data/siteData';

export interface WhatsAppActionOptions {
  message: string;
  onSuccessToast?: (text: string) => void;
  lang?: 'pt' | 'en' | 'es';
}

const copyFeedbackMessages = {
  pt: 'Mensagem copiada! Cole na conversa.',
  en: 'Message copied! Paste it in the chat.',
  es: '¡Mensaje copiado! Pégalo en el chat.'
};

function openExternalUrlSafely(url: string): void {
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

export async function openWhatsAppWithContext({
  message,
  onSuccessToast,
  lang = 'pt'
}: WhatsAppActionOptions): Promise<void> {
  const phone = siteConfig.whatsappPhone?.trim();

  if (phone) {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encoded}`;
    openExternalUrlSafely(url);
    return;
  }

  // Copy synchronously first via fallback or clipboard API so mobile browsers keep user-gesture context
  try {
    const textarea = document.createElement('textarea');
    textarea.value = message;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  } catch {
    // Ignore synchronous fallback error
  }

  // Also invoke modern clipboard API if available
  if (navigator?.clipboard?.writeText) {
    navigator.clipboard.writeText(message).catch(() => {
      // Already handled by fallback
    });
  }

  if (onSuccessToast) {
    onSuccessToast(copyFeedbackMessages[lang]);
  }

  // Open the official WhatsApp link synchronously within user gesture
  openExternalUrlSafely(siteConfig.whatsappUrl);
}
