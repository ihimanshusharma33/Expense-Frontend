// Existing types...

export interface RecurringPayment {
  id: string;
  title: string;
  amount: number;
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  nextDueDate: string;
  category: string;
  active: boolean;
}

export interface Debt {
  id: string;
  title: string;
  totalAmount: number;
  remainingAmount: number;
  interestRate: number;
  minimumPayment: number;
  dueDate: string;
  category: 'credit_card' | 'loan' | 'mortgage' | 'other';
}

export interface SavingsGoal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  category: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Budget {
  id: string;
  category: string;
  plannedAmount: number;
  actualAmount: number;
  period: string; // YYYY-MM
  recommendations?: string[];
}