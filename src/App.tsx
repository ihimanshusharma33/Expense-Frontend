import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpenseForm from './components/ExpenseForm';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
function App() {
  return (
    <div className="dark">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <AuthProvider>
              <Layout>
                <Dashboard />
              </Layout>
            </AuthProvider>
          } />
          <Route path='/expenses' element={<AuthProvider>
            <Layout children={<ExpenseForm/>}>
            </Layout>
          </AuthProvider>
          } />
          <Route path='/splits' element={
            <AuthProvider>
              <Layout children={<h1>Hello Split
              </h1>}>
              </Layout>
            </AuthProvider>}
          />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;