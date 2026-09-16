'use client';

import React, { useState } from 'react';
import { useCurrency } from '@/context/CurrencyContext';
import { Calculator, TrendingUp, CheckCircle2 } from 'lucide-react';

interface MortgageCalculatorProps {
  initialPrice?: number;
}

export default function MortgageCalculator({ initialPrice = 16800000 }: MortgageCalculatorProps) {
  const { format } = useCurrency();
  const [propertyPrice, setPropertyPrice] = useState<number>(initialPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanTermYears, setLoanTermYears] = useState<number>(25);
  const [interestRate, setInterestRate] = useState<number>(4.25);
  const [expectedYieldPercent, setExpectedYieldPercent] = useState<number>(5.5);

  // Calculations
  const downPaymentAmount = propertyPrice * (downPaymentPercent / 100);
  const loanPrincipal = propertyPrice - downPaymentAmount;

  const monthlyInterestRate = interestRate / 100 / 12;
  const totalMonths = loanTermYears * 12;

  let monthlyMortgage = 0;
  if (monthlyInterestRate > 0) {
    monthlyMortgage =
      (loanPrincipal *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths))) /
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
  } else {
    monthlyMortgage = loanPrincipal / totalMonths;
  }

  const annualRentalIncome = propertyPrice * (expectedYieldPercent / 100);
  const monthlyRentalIncome = annualRentalIncome / 12;
  const netMonthlyCashflow = monthlyRentalIncome - monthlyMortgage;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
      <div className="flex items-center gap-3.5 mb-8 pb-6 border-b border-slate-100">
        <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Mortgage & Investment Yield Calculator
          </h3>
          <p className="text-sm text-slate-500 mt-0.5">
            Estimate monthly repayments and projected rental income for Bangkok prime developments.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Property Price */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-700">Property Price</label>
              <span className="text-lg font-bold text-primary">{format(propertyPrice)}</span>
            </div>
            <input
              type="range"
              min={5000000}
              max={120000000}
              step={500000}
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full accent-primary cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>฿5M</span>
              <span>฿60M</span>
              <span>฿120M+</span>
            </div>
          </div>

          {/* Down Payment */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-700">Down Payment ({downPaymentPercent}%)</label>
              <span className="font-bold text-slate-900">{format(downPaymentAmount)}</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[10, 20, 30, 40].map((pct) => (
                <button
                  key={pct}
                  type="button"
                  onClick={() => setDownPaymentPercent(pct)}
                  className={`py-2 text-xs font-bold rounded-xl transition ${
                    downPaymentPercent === pct
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  {pct}%
                </button>
              ))}
            </div>
          </div>

          {/* Loan Term & Interest Rate */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-slate-700">Loan Term</label>
                <span className="font-bold text-slate-900">{loanTermYears} Years</span>
              </div>
              <input
                type="range"
                min={5}
                max={30}
                step={5}
                value={loanTermYears}
                onChange={(e) => setLoanTermYears(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-slate-700">Interest Rate</label>
                <span className="font-bold text-slate-900">{interestRate.toFixed(2)}%</span>
              </div>
              <input
                type="range"
                min={2.5}
                max={8.0}
                step={0.25}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
            </div>
          </div>

          {/* Expected Rental Yield */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-700">Projected Rental Yield</label>
              <span className="font-bold text-emerald-600">{expectedYieldPercent.toFixed(1)}% p.a.</span>
            </div>
            <input
              type="range"
              min={3.0}
              max={8.5}
              step={0.1}
              value={expectedYieldPercent}
              onChange={(e) => setExpectedYieldPercent(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Estimated Monthly Payment
              </span>
              <div className="text-3xl font-extrabold text-slate-900 mt-1">
                {format(monthlyMortgage)}
                <span className="text-xs font-medium text-slate-500"> / mo</span>
              </div>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-slate-200 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Loan Principal:</span>
                <strong className="text-slate-900">{format(loanPrincipal)}</strong>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Down Payment ({downPaymentPercent}%):</span>
                <strong className="text-slate-900">{format(downPaymentAmount)}</strong>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Est. Monthly Rent:</span>
                <strong className="text-emerald-600 font-bold">{format(monthlyRentalIncome)}</strong>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Net Monthly Cashflow:</span>
                <strong className={netMonthlyCashflow >= 0 ? 'text-primary font-bold' : 'text-amber-600 font-bold'}>
                  {netMonthlyCashflow >= 0 ? '+' : ''}{format(netMonthlyCashflow)}
                </strong>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 text-[11px] text-slate-400 leading-relaxed">
            * Estimates based on standard commercial lending rates. Actual conditions subject to bank assessment and foreign buyer qualifications.
          </div>
        </div>
      </div>
    </div>
  );
}
