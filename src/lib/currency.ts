import { Currency } from '@/types';

export const RATES = {
  THB: 1,
  USD: 1 / 35,
  EUR: 1 / 38,
};

export function convertPrice(amountTHB: number, currency: Currency): number {
  if (currency === 'THB') return amountTHB;
  return Math.round(amountTHB * RATES[currency]);
}

export function formatPrice(amountTHB: number, currency: Currency): string {
  const value = convertPrice(amountTHB, currency);
  
  if (currency === 'THB') {
    return `฿${value.toLocaleString()}`;
  } else if (currency === 'USD') {
    return `$${value.toLocaleString()}`;
  } else {
    return `€${value.toLocaleString()}`;
  }
}

export function formatCompactPrice(amountTHB: number, currency: Currency): string {
  const value = convertPrice(amountTHB, currency);
  
  if (currency === 'THB') {
    if (value >= 1_000_000) {
      return `฿${(value / 1_000_000).toFixed(1)}M`;
    }
    return `฿${(value / 1_000).toFixed(0)}K`;
  } else if (currency === 'USD') {
    if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(2)}M`;
    }
    return `$${(value / 1_000).toFixed(0)}K`;
  } else {
    if (value >= 1_000_000) {
      return `€${(value / 1_000_000).toFixed(2)}M`;
    }
    return `€${(value / 1_000).toFixed(0)}K`;
  }
}
