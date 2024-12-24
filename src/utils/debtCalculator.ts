export function calculateTotalDebt(debts: any[]): number {
  return debts.reduce((total, debt) => total + debt.remainingAmount, 0);
}

export function calculateMonthlyPayments(debts: any[]): number {
  return debts.reduce((total, debt) => total + debt.minimumPayment, 0);
}

export function calculateAmortization(principal: number, rate: number, years: number): number {
  const monthlyRate = rate / 12 / 100;
  const months = years * 12;
  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  );
}