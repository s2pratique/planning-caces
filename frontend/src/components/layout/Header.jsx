import React from 'react';
import { Menu, LogOut, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import ThemeToggle from '../ui/ThemeToggle';
import Button from '../ui/Button';
 
const Header = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
 
  const handleLogout = async () => {
    if (window.confirm('Voulez-vous vraiment vous déconnecter ?')) {
      await logout();
    }
  };
 
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      <div className="px-4 h-16 flex items-center justify-between">
        {/* Gauche : Menu burger + Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">PC</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Planning CACES
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Gestion des formations
              </p>
            </div>
          </div>
        </div>
 
        {/* Droite : Thème + User + Déconnexion */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          {user && (
            <>
              <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <div className="text-sm">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {user.prenom} {user.nom}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {user.role === 'admin' ? 'Administrateur' : 'Formateur'}
                  </p>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                icon={LogOut}
                className="hidden md:inline-flex"
              >
                Déconnexion
              </Button>
              
              <button
                onClick={handleLogout}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Déconnexion"
              >
                <LogOut className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
 
export default Header;
 
