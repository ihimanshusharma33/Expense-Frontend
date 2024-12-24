interface Insight {
  type: 'warning' | 'success';
  message: string;
  recommendation?: string;
}

export function generateBudgetInsights(budget: any, expenses: any[]): Insight[] {
  const insights: Insight[] = [];
  const progress = (budget.actualAmount / budget.plannedAmount) * 100;

  // Overspending warning
  if (progress > 90) {
    insights.push({
      type: 'warning',
      message: 'You are close to exceeding your budget for this category.',
      recommendation: 'Consider reducing non-essential expenses in this category.',
    });
  }

  // Spending pattern analysis
  const averageTransaction = expenses.reduce((sum, exp) => sum + exp.amount, 0) / expenses.length;
  if (averageTransaction > budget.plannedAmount * 0.3) {
    insights.push({
      type: 'warning',
      message: 'Large individual transactions detected.',
      recommendation: 'Try to break down large expenses into smaller, manageable amounts.',
    });
  }

  // Positive reinforcement
  if (progress < 70) {
    insights.push({
      type: 'success',
      message: 'You\'re managing this category well!',
      recommendation: 'Consider saving the excess for future months or other goals.',
    });
  }

  return insights;
}