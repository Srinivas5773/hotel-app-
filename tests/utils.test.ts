import { describe, it, expect } from 'vitest';
import { formatINR, isValidIndianPhone, buildWhatsAppUrl } from '../src/utils';

describe('Utility Functions', () => {
  it('formats INR currency correctly', () => {
    expect(formatINR(250)).toContain('250');
    expect(formatINR(0)).toContain('0');
  });

  it('validates Indian 10-digit mobile numbers', () => {
    expect(isValidIndianPhone('9347671131')).toBe(true);
    expect(isValidIndianPhone('9848022338')).toBe(true);
    expect(isValidIndianPhone('12345')).toBe(false);
    expect(isValidIndianPhone('abcd123456')).toBe(false);
  });

  it('builds valid WhatsApp URL with direct intent to 9347671131', () => {
    const url = buildWhatsAppUrl('9347671131', 'Hello Raju Garu');
    expect(url).toContain('https://wa.me/919347671131');
    expect(url).toContain('Hello%20Raju%20Garu');
  });
});
