'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Currency } from '@/types';
import { formatPrice, formatCompactPrice, convertPrice } from '@/lib/currency';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  format: (amountTHB: number) => string;
  formatCompact: (amountTHB: number) => string;
  convert: (amountTHB: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'THB',
  setCurrency: () => {},
  format: (amount) => `฿${amount.toLocaleString()}`,
  formatCompact: (amount) => `฿${(amount / 1000000).toFixed(1)}M`,
  convert: (amount) => amount,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>('THB');

  useEffect(() => {
    const saved = localStorage.getItem('blp_currency') as Currency;
    if (saved && (saved === 'THB' || saved === 'USD' || saved === 'EUR')) {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem('blp_currency', c);
  };

  const format = (amountTHB: number) => formatPrice(amountTHB, currency);
  const formatCompact = (amountTHB: number) => formatCompactPrice(amountTHB, currency);
  const convert = (amountTHB: number) => convertPrice(amountTHB, currency);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, format, formatCompact, convert }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
