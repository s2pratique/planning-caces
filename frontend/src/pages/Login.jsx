import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LogIn, Calendar } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import LoadingSpinner from '../components/ui/LoadingSpinner';
 
const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { loginWithGoogle, isAuthenticated, loading, setUser } = useAuth();
 
  useEffect(() => {
    // Si déjà authentifié, rediriger
    if (isAuthenticated) {
      navigate('/dashboard');
    }
 
    // Gérer le callback OAuth
    const token = searchParams.get('token');
    const userData = searchParams.get('user');
 
    if (token && userData) {
      try {
        const user = JSON.parse(decodeURIComponent(userData));
        setUser(user, token);
        navigate('/dashboard');
      } catch (error) {
        console.error('Erreur lors de la connexion:', error);
      }
    }
  }, [isAuthenticated, navigate, searchParams, setUser]);
 
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <LoadingSpinner size="lg" text="Vérification de l'authentification..." />
      </div>
    );
  }
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="max-w-md w-full">
        {/* Card de connexion */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
          {/* Logo et titre */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-2xl mb-4">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Planning CACES
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Gestion des formations
            </p>
          </div>
 
          {/* Message d'accueil */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Bienvenue !
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Connectez-vous avec votre compte Google pour accéder au planning des formations.
            </p>
          </div>
 
          {/* Bouton de connexion Google */}
          <Button
            onClick={loginWithGoogle}
            variant="primary"
            size="lg"
            className="w-full"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Se connecter avec Google
          </Button>
 
          {/* Informations supplémentaires */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              En vous connectant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
            </p>
          </div>
        </div>
 
        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© 2026 Planning CACES. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
};
 
export default Login;
 
