export const mockExpenses = [
  {
    id: '1',
    title: 'Dinner',
    amount: 60,
    date: '2024-03-10',
    category: 'Food',
    paidBy: '1',
    splitWith: [
      { userId: '2', amount: 20, settled: true },
      { userId: '3', amount: 20, settled: false },
    ],
  },
  {
    id: '2',
    title: 'Movie tickets',
    amount: 45,
    date: '2024-03-09',
    category: 'Entertainment',
    paidBy: '1',
    splitWith: [
      { userId: '2', amount: 15, settled: false },
    ],
  },
];