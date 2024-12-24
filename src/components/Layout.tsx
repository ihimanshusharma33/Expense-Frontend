import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, Plus, PieChart, Users, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const [MobileMenu, setMobileMenu] = React.useState(false);
  const [addExpense, setAddExpense] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('Dashboard');

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Expense added!");
    setAddExpense(false);
  };

  return (
    <div className="min-h-screen bg-dark-primary text-dark-text">
      <nav className="bg-dark-secondary border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <PieChart className="h-8 w-8 text-dark-accent" />
                <span className="ml-2 text-xl font-bold">FinanceTracker</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/" className={`inline-flex items-center px-1 pt-1 ${activeTab === 'Dashboard' ? 'text-dark-accent border-b-2 border-dark-accent' : 'text-dark-muted hover:text-dark-text'}`} onClick={() => setActiveTab('Dashboard')}>
                  <Home className="h-4 w-4 mr-1" />
                  Dashboard
                </Link>
                <button
                  className={`inline-flex items-center px-1 pt-1  hover:text-dark-text ${activeTab === 'Add Expense' ? 'text-dark-accent border-b-2 border-dark-accent' : ''}`}
                  onClick={() => { setAddExpense(!addExpense), setActiveTab('Add Expense') }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Expense
                </button>
                <Link to="/splits" className={`inline-flex items-center px-1 pt-1  hover:text-dark-text ${activeTab === 'split' ? 'text-dark-accent border-b-2 border-dark-accent' : ''}`}
                  onClick={() => setActiveTab('split')}>
                  <Users className="h-4 w-4 mr-1" />
                  Split History
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              {user && (
                <div className="flex items-center space-x-4">
                  <img
                    className="h-8 w-8 rounded-full ring-2 ring-dark-accent"
                    src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=1A1B1E&color=00F2C3`}
                    alt={user.name}
                  />
                  <span className="text-dark-text">{user.name}</span>
                  <button
                    onClick={logout}
                    className="inline-flex items-center px-3 py-2 border border-dark-border rounded-md text-dark-muted hover:text-dark-text"
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    Logout
                  </button>
                </div>
              )}
            </div>
            <div className="mt-3 sm:hidden ml-auto">
              <button
                className="sm:hidden inline-flex items-center px-3 py-2 border border-dark-border rounded-md text-dark-accent"
                onClick={() => setMobileMenu(!MobileMenu)}
              >
                <svg
                  className="h-6 w-6 text-dark-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {MobileMenu && (
          <div className="flex flex-col">
            <div className="mt-2 ml-4">
              <Link
                to="/dashboard"
                className="text-lg inline-flex items-center px-1 pt-1 text-dark-accent border-b-2 border-dark-accent"
              >
                <Home className="h-4 w-4 mr-1" />
                Dashboard
              </Link>
            </div>
            <div className="mt-2 ml-4">
              <button
                className="text-lg inline-flex items-center px-1 pt-1 text-dark-muted hover:text-dark-text"
                onClick={() => setAddExpense(!addExpense)}
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Expense
              </button>
            </div>
            <div className="mt-2 ml-4">
              <Link
                to="/splits"
                className="text-lg inline-flex items-center px-1 pt-1 text-dark-muted hover:text-dark-text"
              >
                <Users className="h-4 w-4 mr-1" />
                Split History
              </Link>
            </div>
          </div>
        )}
      </nav>
      {addExpense && (
        <div className={`h-fit fixed inset-0 z-10 top-12 bg-dark-secondary p-6 rounded-md shadow-md max-w-md mx-auto 
          mt-6 transform transition-transform duration-300 ease-in-out ${addExpense ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}>
          <button className='absolute top-2 right-2' onClick={() => setAddExpense(!addExpense)}>
            <svg
              xmlns="http://www.w3.org/
              2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-dark-accent"  >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-lg font-bold text-dark-accent mb-4">Add Expense</h2>
          <form onSubmit={handleAddExpense}>
            <div className="mb-4">
              <label htmlFor="expenseName" className="block text-sm font-medium text-dark-text">
                Expense Name
              </label>
              <input
                type="text"
                id="expenseName"
                className="mt-1 block w-full rounded-md border border-dark-border bg-dark-primary text-dark-text px-3 py-2"
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
                className="mt-1 block w-full rounded-md border border-dark-border bg-dark-primary text-dark-text px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-dark-text">
                Category
              </label>
              <select
                id="category"
                className="mt-1 block w-full rounded-md border border-dark-border bg-dark-primary text-dark-text px-3 py-2"
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
                className="mt-1 block w-full rounded-md border border-dark-border bg-dark-primary text-dark-text px-3 py-2"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-dark-accent text-dark-text px-4 py-2 rounded-md hover:bg-dark-text hover:text-dark-primary"
              >
                Add Expense
              </button>
            </div>
          </form>
        </div>
      )}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  );
}
