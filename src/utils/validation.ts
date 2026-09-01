/**
 * Input sanitization and phone/location validation helpers.
 */

export function isValidIndianPhone(phone: string): boolean {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  return cleanPhone.length === 10 && /^[6-9]\d{9}$/.test(cleanPhone);
}

export function cleanPhoneNumber(phone: string): string {
  return phone.replace(/[^0-9]/g, '');
}

export function sanitizeText(text: string): string {
  return text.trim().replace(/\s+/g, ' ');
}
