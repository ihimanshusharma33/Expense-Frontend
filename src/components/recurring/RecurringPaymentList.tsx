import { Calendar, AlertCircle } from 'lucide-react';
import { RecurringPayment } from '../../types';

interface Props {
  payments: RecurringPayment[];
  onEdit: (payment: RecurringPayment) => void;
  onToggle: (id: string, active: boolean) => void;
}

export default function RecurringPaymentList({ payments, onEdit, onToggle }: Props) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Recurring Payments</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {payments.map((payment) => (
          <div key={payment.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-gray-400" />
              <div>
                <h3 className="font-medium">{payment.title}</h3>
                <p className="text-sm text-gray-500">
                  ${payment.amount} • {payment.frequency}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {new Date(payment.nextDueDate) <= new Date() && (
                <AlertCircle className="h-5 w-5 text-red-500" />
              )}
              <button
                onClick={() => onEdit(payment)}
                className="text-sm text-indigo-600 hover:text-indigo-900"
              >
                Edit
              </button>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={payment.active}
                  onChange={(e) => onToggle(payment.id, e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}