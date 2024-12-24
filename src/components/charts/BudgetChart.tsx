import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface BudgetChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
}

export function BudgetChart({ data }: BudgetChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            background: '#2C2D31',
            border: 'none',
            borderRadius: '8px',
            color: '#E4E6EA',
          }}
        />
        <Legend
          verticalAlign="bottom"
          height={36}
          content={({ payload }) => (
            <ul className="flex justify-center space-x-6">
              {payload?.map((entry: any) => (
                <li key={entry.value} className="flex items-center">
                  <span
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-sm text-dark-muted">{entry.value}</span>
                </li>
              ))}
            </ul>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}