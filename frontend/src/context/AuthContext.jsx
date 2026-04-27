import React, { createContext, useState, useEffect, useContext } from 'react';
import { authAPI } from '../services/api';
 
const AuthContext = createContext(null);
 
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  // Vérifier l'authentification au chargement
  useEffect(() => {
    checkAuthentication();
  }, []);
 
  const checkAuthentication = async () => {
    try {
      setLoading(true);
      
      // Vérifier si un token existe dans localStorage
      const token = localStorage.getItem('auth_token');
      const storedUser = localStorage.getItem('user');
      
      if (token && storedUser) {
        // Vérifier que le token est toujours valide
        const response = await authAPI.checkAuth();
        
        if (response.data.success) {
          setUser(JSON.parse(storedUser));
          setIsAuthenticated(true);
        } else {
          // Token invalide, nettoyer
          handleLogout();
        }
      }
    } catch (error) {
      console.error('Erreur vérification authentification:', error);
      handleLogout();
    } finally {
      setLoading(false);
    }
  };
 
  const handleLoginSuccess = (userData, token) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user', JSON.stringify(userData));
  };
 
  const handleLogout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
    }
  };
 
  const loginWithGoogle = () => {
    authAPI.loginWithGoogle();
  };
 
  const value = {
    user,
    loading,
    isAuthenticated,
    loginWithGoogle,
    logout: handleLogout,
    setUser: handleLoginSuccess,
  };
 
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
 
// Hook personnalisé pour utiliser le contexte
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider');
  }
  return context;
};
 
export default AuthContext;
 
