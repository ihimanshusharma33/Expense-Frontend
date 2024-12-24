import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from './Card';

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function StatCard({ title, value, icon: Icon, trend }: StatCardProps) {
  return (
    <Card>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="h-12 w-12 rounded-lg bg-dark-accent/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-dark-accent" />
          </div>
          {trend && (
            <div className={`text-sm ${trend.isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
            </div>
          )}
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-medium text-dark-muted">{title}</h3>
          <p className="mt-2 text-2xl font-semibold text-dark-text">{value}</p>
        </div>
      </div>
    </Card>
  );
}