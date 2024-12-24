import React from 'react';
import { Target, TrendingUp } from 'lucide-react';
import { SavingsGoal } from '../../types';
import { calculateProgress, estimateCompletionDate } from '../../utils/savingsCalculator';

interface Props {
  goal: SavingsGoal;
  onContribute: (amount: number) => void;
}

export default function SavingsGoalCard({ goal, onContribute }: Props) {
  const progress = calculateProgress(goal);
  const estimatedDate = estimateCompletionDate(goal);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Target className="h-5 w-5 text-indigo-500 mr-2" />
            <h3 className="font-semibold">{goal.title}</h3>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs ${
            goal.priority === 'high' ? 'bg-red-100 text-red-800' :
            goal.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            {goal.priority} priority
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Progress</span>
            <span className="font-medium">${goal.currentAmount} / ${goal.targetAmount}</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Target Date</span>
            <span>{new Date(goal.targetDate).toLocaleDateString()}</span>
          </div>

          {estimatedDate && (
            <div className="flex items-center text-sm text-gray-500">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>Estimated completion: {estimatedDate.toLocaleDateString()}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 bg-gray-50 border-t">
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Amount"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <button
            onClick={() => onContribute(100)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Contribute
          </button>
        </div>
      </div>
    </div>
  );
}