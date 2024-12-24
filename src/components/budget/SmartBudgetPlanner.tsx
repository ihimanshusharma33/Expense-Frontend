import React from 'react';
import { Brain, TrendingUp, AlertTriangle } from 'lucide-react';
import { Budget } from '../../types';
import { generateBudgetInsights } from '../../utils/aiInsights';

interface Props {
  budget: Budget;
  expenses: any[]; // Your expense type
  onUpdateBudget: (category: string, amount: number) => void;
}

export default function SmartBudgetPlanner({ budget, expenses, onUpdateBudget }: Props) {
  const insights = generateBudgetInsights(budget, expenses);
  const progress = (budget.actualAmount / budget.plannedAmount) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">{budget.category}</h3>
        <Brain className="h-6 w-6 text-indigo-600" />
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-500">Monthly Budget</span>
            <span className="text-sm font-medium">
              ${budget.actualAmount} / ${budget.plannedAmount}
            </span>
          </div>
          <div className="relative w-full h-2 bg-gray-200 rounded-full">
            <div
              className={`absolute left-0 h-full rounded-full transition-all duration-300 ${
                progress > 90 ? 'bg-red-500' : progress > 70 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        </div>

        {insights.map((insight, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50"
          >
            {insight.type === 'warning' ? (
              <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
            ) : (
              <TrendingUp className="h-5 w-5 text-green-500 flex-shrink-0" />
            )}
            <div>
              <p className="text-sm text-gray-700">{insight.message}</p>
              {insight.recommendation && (
                <p className="text-sm text-gray-500 mt-1">
                  Recommendation: {insight.recommendation}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}