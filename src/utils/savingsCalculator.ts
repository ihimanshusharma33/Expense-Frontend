export function calculateProgress(goal: any): number {
  return (goal.currentAmount / goal.targetAmount) * 100;
}

export function estimateCompletionDate(goal: any): Date | null {
  const remaining = goal.targetAmount - goal.currentAmount;
  const monthlyContribution = goal.monthlyContribution || 0;
  
  if (monthlyContribution <= 0) return null;

  const monthsToGoal = remaining / monthlyContribution;
  const estimatedDate = new Date();
  estimatedDate.setMonth(estimatedDate.getMonth() + monthsToGoal);
  
  return estimatedDate;
}