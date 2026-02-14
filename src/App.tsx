import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LoginForm } from './component/auth/LoginForm';
import { ProtectedRoute } from './component/auth/ProtectedRoute';
import LoginSuccess from './pages/LoginSuccess';
import { AuthDebugPage } from './pages/AuthDebugPage';


// Páginas
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const HomePage = React.lazy(() => import('./pages/HomePage'));
const WelcomePage = React.lazy(() => import('./pages/WelcomePage'));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Públicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/login-success" element={<LoginSuccess />} />
          <Route path="/auth-debug" element={<AuthDebugPage />} />
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

          {/* 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;