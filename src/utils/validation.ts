/**
 * Aplica máscara de telefone brasileiro (DDD + 8 ou 9 dígitos).
 * Ex: (11) 98765-4321 ou (11) 3456-7890
 */
export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  
  if (digits.length <= 2) {
    return digits ? `(${digits}` : '';
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

export function isValidName(name: string): boolean {
  return typeof name === 'string' && name.trim().length >= 2;
}

export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return regex.test(email.trim());
}

export function isValidPhone(phone: string): boolean {
  const digits = (phone || '').replace(/\D/g, '');
  return digits.length === 10 || digits.length === 11;
}
