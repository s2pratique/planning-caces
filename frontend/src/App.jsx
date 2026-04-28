import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Layout from './components/layout/Layout';
import ProtectedRoute from './utils/ProtectedRoute';
 
// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
 
function App() {
  const { isAuthenticated } = useAuth();
 
  return (
    <Routes>
      {/* Route publique - Login */}
      <Route 
        path="/login" 
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
        } 
      />
 
      {/* Routes protégées avec Layout */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <Layout>
              <Routes>
                {/* Redirection racine vers dashboard */}
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                
                {/* Dashboard - accessible à tous les utilisateurs authentifiés */}
                <Route path="/dashboard" element={<Dashboard />} />
 
                {/* Calendrier - accessible à tous */}
                <Route 
                  path="/calendrier" 
                  element={
                    <div className="text-center py-12">
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Calendrier
                      </h1>
                      <p className="text-gray-600 dark:text-gray-400">
                        Module en cours de développement
                      </p>
                    </div>
                  } 
                />
 
                {/* Sessions - accessible à tous */}
                <Route 
                  path="/sessions" 
                  element={
                    <div className="text-center py-12">
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Sessions
                      </h1>
                      <p className="text-gray-600 dark:text-gray-400">
                        Module en cours de développement
                      </p>
                    </div>
                  } 
                />
 
                {/* Formateurs - admin uniquement */}
                <Route 
                  path="/formateurs" 
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <div className="text-center py-12">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          Formateurs
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                          Module en cours de développement
                        </p>
                      </div>
                    </ProtectedRoute>
                  } 
                />
 
                {/* Formations - admin uniquement */}
                <Route 
                  path="/formations" 
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <div className="text-center py-12">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          Formations
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                          Module en cours de développement
                        </p>
                      </div>
                    </ProtectedRoute>
                  } 
                />
 
                {/* Lieux - admin uniquement */}
                <Route 
                  path="/lieux" 
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <div className="text-center py-12">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          Lieux
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                          Module en cours de développement
                        </p>
                      </div>
                    </ProtectedRoute>
                  } 
                />
 
                {/* Statistiques - admin uniquement */}
                <Route 
                  path="/statistiques" 
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <div className="text-center py-12">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          Statistiques
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                          Module en cours de développement
                        </p>
                      </div>
                    </ProtectedRoute>
                  } 
                />
 
                {/* Paramètres - admin uniquement */}
                <Route 
                  path="/parametres" 
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <div className="text-center py-12">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          Paramètres
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                          Module en cours de développement
                        </p>
                      </div>
                    </ProtectedRoute>
                  } 
                />
 
                {/* 404 - Page non trouvée */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
 
export default App;
 
