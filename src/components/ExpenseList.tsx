import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { Expense } from '../types';

interface ExpenseListProps {
  expenses: Expense[];
  onEdit: (expense: Expense) => void;
  onDelete: (expenseId: string) => void;
}

export default function ExpenseList({ expenses, onEdit, onDelete }: ExpenseListProps) {
  return (
    <div className="divide-y divide-dark-border/10">
      {expenses.map((expense) => (
        <div key={expense.id} className="py-4 first:pt-0 last:pb-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-dark-accent/10 flex items-center justify-center">
                <span className="text-dark-accent font-medium">${expense.amount}</span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-dark-text">{expense.title}</h3>
                <p className="text-sm text-dark-muted">
                  {new Date(expense.date).toLocaleDateString()} • {expense.category}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onEdit(expense)}
                className="p-2 text-dark-muted hover:text-dark-accent rounded-lg transition-colors"
              >
                <Edit2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => onDelete(expense.id)}
                className="p-2 text-dark-muted hover:text-red-400 rounded-lg transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
          {expense.splitWith.length > 0 && (
            <div className="mt-2 flex items-center space-x-2">
              {expense.splitWith.map((split) => (
                <div
                  key={split.userId}
                  className={`px-2 py-1 rounded-full text-xs ${
                    split.settled
                      ? 'bg-green-400/10 text-green-400'
                      : 'bg-yellow-400/10 text-yellow-400'
                  }`}
                >
                  ${split.amount} • {split.settled ? 'Settled' : 'Pending'}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}