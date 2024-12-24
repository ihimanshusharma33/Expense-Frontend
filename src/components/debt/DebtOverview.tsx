import React from 'react';
import { TrendingDown, DollarSign } from 'lucide-react';
import { Debt } from '../../types';
import { calculateTotalDebt, calculateMonthlyPayments } from '../../utils/debtCalculator';

interface Props {
  debts: Debt[];
}

export default function DebtOverview({ debts }: Props) {
  const totalDebt = calculateTotalDebt(debts);
  const monthlyPayments = calculateMonthlyPayments(debts);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Debt Overview</h2>
        <TrendingDown className="h-6 w-6 text-red-500" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Total Debt</p>
          <p className="text-2xl font-bold text-gray-900">${totalDebt.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Monthly Payments</p>
          <p className="text-2xl font-bold text-gray-900">${monthlyPayments.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-500 mb-3">Debt Breakdown</h3>
        {debts.map((debt) => (
          <div key={debt.id} className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">{debt.title}</span>
              <span className="text-sm text-gray-500">
                ${debt.remainingAmount} / ${debt.totalAmount}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{
                  width: `${(debt.remainingAmount / debt.totalAmount) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}