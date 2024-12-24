import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-dark-secondary rounded-xl shadow-lg border border-dark-border/10 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="p-5 border-b border-dark-border/10">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-5">{children}</div>;
}