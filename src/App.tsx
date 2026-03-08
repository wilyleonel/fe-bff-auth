import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LoginForm } from './component/auth/LoginForm';
import { ProtectedRoute } from './component/auth/ProtectedRoute';
import LoginSuccess from './pages/LoginSuccess';
import { AuthDebugPage } from './pages/AuthDebugPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './context/ThemeContext';


// Páginas
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const WelcomePage = React.lazy(() => import('./pages/WelcomePage'));
const ProductsPage = React.lazy(() => import('./pages/ProductsPage'));
const CompanyPage = React.lazy(() => import('./pages/CompanyPage'));
const SelectionPage = React.lazy(() => import('./pages/SelectionPage'));
const DocsPage = React.lazy(() => import('./pages/DocsPage'));

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router>
            <Routes>
              {/* Públicas */}
              <Route path="/" element={
                <React.Suspense fallback={<div>Cargando...</div>}>
                  <SelectionPage />
                </React.Suspense>
              } />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/login-success" element={<LoginSuccess />} />
              <Route path="/auth-debug" element={<AuthDebugPage />} />
              <Route path="/docs" element={
                <React.Suspense fallback={<div>Cargando Docs...</div>}>
                  <DocsPage />
                </React.Suspense>
              } />
              {/* Protegidas */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <React.Suspense fallback={<div>Cargando...</div>}>
                      <DashboardPage />
                    </React.Suspense>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/welcome"
                element={
                  <ProtectedRoute>
                    <React.Suspense fallback={<div>Cargando...</div>}>
                      <WelcomePage />
                    </React.Suspense>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/products"
                element={
                  <ProtectedRoute>
                    <React.Suspense fallback={<div>Cargando...</div>}>
                      <ProductsPage />
                    </React.Suspense>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/company"
                element={
                  <ProtectedRoute>
                    <React.Suspense fallback={<div>Cargando...</div>}>
                      <CompanyPage />
                    </React.Suspense>
                  </ProtectedRoute>
                }
              />

              {/* 404 */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;