import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ExpenseChartProps {
  data: {
    date: string;
    amount: number;
  }[];
}

export function ExpenseChart({ data }: ExpenseChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#404348" />
        <XAxis
          dataKey="date"
          stroke="#9BA1A6"
          tick={{ fill: '#9BA1A6' }}
          tickLine={{ stroke: '#9BA1A6' }}
        />
        <YAxis
          stroke="#9BA1A6"
          tick={{ fill: '#9BA1A6' }}
          tickLine={{ stroke: '#9BA1A6' }}
        />
        <Tooltip
          contentStyle={{
            background: '#2C2D31',
            border: 'none',
            borderRadius: '8px',
            color: '#E4E6EA',
          }}
        />
        <Bar dataKey="amount" fill="#00F2C3" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}