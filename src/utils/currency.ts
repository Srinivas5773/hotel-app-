/**
 * Indian Rupee (INR) formatting and calculation utilities.
 */

export function formatINR(amount: number): string {
  if (isNaN(amount)) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function parseINR(formattedStr: string): number {
  const numeric = formattedStr.replace(/[^0-9.-]+/g, '');
  return parseFloat(numeric) || 0;
}
