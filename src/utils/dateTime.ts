/**
 * Date and Time utilities for Raju Garu Hotel orders & logs.
 */

export function formatISTTime(isoString: string): string {
  try {
    return new Date(isoString).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  } catch {
    return isoString;
  }
}

export function formatISTDate(isoString: string): string {
  try {
    return new Date(isoString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return isoString;
  }
}

export function getEstimatedDeliveryWindow(orderCreatedAt: string, prepMins: number = 20): string {
  try {
    const created = new Date(orderCreatedAt);
    const eta = new Date(created.getTime() + prepMins * 60000);
    return `${formatISTTime(created.toISOString())} - ${formatISTTime(eta.toISOString())}`;
  } catch {
    return '15-25 mins';
  }
}
