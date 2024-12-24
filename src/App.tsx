import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
            <Layout children={<h1>Hello Expense </h1>}>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;