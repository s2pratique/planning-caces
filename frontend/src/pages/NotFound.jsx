import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
 
const NotFound = () => {
  const navigate = useNavigate();
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Page non trouvée
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={() => navigate(-1)}
            variant="secondary"
            icon={ArrowLeft}
          >
            Retour
          </Button>
          <Button
            onClick={() => navigate('/dashboard')}
            variant="primary"
            icon={Home}
          >
            Accueil
          </Button>
        </div>
      </div>
    </div>
  );
};
 
export default NotFound;
 
