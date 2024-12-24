import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function ExpenseForm() {
  const { user } = useAuth();
  const [splitWith, setSplitWith] = useState<string[]>([]);
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle expense submission
  };

  const addSplitUser = () => {
    setSplitWith([...splitWith, '']);
  };

  const removeSplitUser = (index: number) => {
    setSplitWith(splitWith.filter((_, i) => i !== index));
  };
  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className="bg-dark-primary shadow-md rounded-lg p-6">
      <h2 className="text-lg font-bold text-dark-accent mb-4">Add Expense</h2>
      <div className="mb-4 ">
        <label htmlFor="expenseName" className="block text-sm font-medium text-dark-text">
          Expense Name
        </label>
        <input
          type="text"
          id="expenseName"
          className="mt-1 block w-full rounded-md border border-dark-border bg-dark-secondary text-dark-text px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium text-dark-text">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          className="mt-1 block w-full rounded-md border border-dark-border bg-dark-secondary text-dark-text px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-dark-text">
          Category
        </label>
        <select
          id="category"
          className="mt-1 block w-full rounded-md border border-dark-border bg-dark-secondary text-dark-text px-3 py-2"
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Utilities">Utilities</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-dark-text">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="mt-1 block w-full  bg-dark-secondary rounded-md border border-dark-border bg-dark-primary text-dark-text px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block  text-sm font-medium text-gray-700">Split with</label>
        <div className="space-y-2">
          {splitWith.map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => removeSplitUser(index)}
                className="p-2 text-red-500 hover:text-red-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addSplitUser}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Person
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Notes</label>
        <textarea
          className="mt-1 block w-full rounded-md bg-dark-secondary border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={3}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-dark-accent text-dark-text px-4 py-2 rounded-md hover:bg-dark-text hover:text-dark-primary"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}