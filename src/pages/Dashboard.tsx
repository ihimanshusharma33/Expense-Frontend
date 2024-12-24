import React from 'react';
import { PieChart, DollarSign, Users, TrendingUp } from 'lucide-react';
import { StatCard } from '../components/common/StatCard';
import { Card, CardHeader, CardContent } from '../components/common/Card';
import ExpenseList from '../components/ExpenseList';
import { BudgetChart } from '../components/charts/BudgetChart';
import { ExpenseChart } from '../components/charts/ExpenseChart';
import { mockExpenses } from '../data/mockData';

const stats = [
  {
    title: 'Total Expenses',
    value: '$1,200',
    icon: DollarSign,
    trend: { value: 12, isPositive: false }
  },
  {
    title: 'Monthly Average',
    value: '$400',
    icon: TrendingUp,
    trend: { value: 8, isPositive: true }
  },
  {
    title: 'Active Splits',
    value: '5',
    icon: Users
  },
  {
    title: 'Budget Overview',
    value: '$800 left',
    icon: PieChart,
    trend: { value: 25, isPositive: true }
  }
];

const budgetData = [
  { name: 'Remaining', value: 800, color: '#00F2C3' },
  { name: 'Spent', value: 1200, color: '#FF8D72' }
];

const expenseData = [
  { date: '03/01', amount: 200 },
  { date: '03/05', amount: 350 },
  { date: '03/10', amount: 180 },
  { date: '03/15', amount: 440 },
  { date: '03/20', amount: 250 }
];

export default function Dashboard() {
  const handleEditExpense = (expense: any) => {
    console.log('Edit expense:', expense);
  };

  const handleDeleteExpense = (id: string) => {
    console.log('Delete expense:', id);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-dark-text">Monthly Budget Overview</h2>
          </CardHeader>
          <CardContent>
            <BudgetChart data={budgetData} />
            <div className="mt-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-dark-muted">Total Budget</p>
                <p className="text-xl font-semibold text-dark-text">$2,000</p>
              </div>
              <div>
                <p className="text-sm text-dark-muted">Remaining</p>
                <p className="text-xl font-semibold text-green-400">$800</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-dark-text">Expense Trend</h2>
          </CardHeader>
          <CardContent>
            <ExpenseChart data={expenseData} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-dark-text">Recent Transactions</h2>
        </CardHeader>
        <CardContent>
          <ExpenseList
            expenses={mockExpenses}
            onEdit={handleEditExpense}
            onDelete={handleDeleteExpense}
          />
        </CardContent>
      </Card>
    </div>
  );
}