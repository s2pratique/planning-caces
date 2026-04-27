import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  MapPin, 
  GraduationCap,
  FileText,
  BarChart3,
  Settings,
  X
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
 
const Sidebar = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
 
  const navItems = [
    {
      name: 'Tableau de bord',
      path: '/dashboard',
      icon: LayoutDashboard,
      roles: ['admin', 'formateur_interne'],
    },
    {
      name: 'Calendrier',
      path: '/calendrier',
      icon: Calendar,
      roles: ['admin', 'formateur_interne'],
    },
    {
      name: 'Sessions',
      path: '/sessions',
      icon: FileText,
      roles: ['admin', 'formateur_interne'],
    },
    {
      name: 'Formateurs',
      path: '/formateurs',
      icon: Users,
      roles: ['admin'],
    },
    {
      name: 'Formations',
      path: '/formations',
      icon: GraduationCap,
      roles: ['admin'],
    },
    {
      name: 'Lieux',
      path: '/lieux',
      icon: MapPin,
      roles: ['admin'],
    },
    {
      name: 'Statistiques',
      path: '/statistiques',
      icon: BarChart3,
      roles: ['admin'],
    },
    {
      name: 'Paramètres',
      path: '/parametres',
      icon: Settings,
      roles: ['admin'],
    },
  ];
 
  // Filtrer les items selon le rôle
  const filteredNavItems = navItems.filter(item => 
    item.roles.includes(user?.role)
  );
 
  return (
    <>
      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
 
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700
          w-64 z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static
        `}
      >
        {/* Header sidebar */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 lg:hidden">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Menu
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Fermer le menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
 
        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {filteredNavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>
 
        {/* Footer sidebar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
            <p>Planning CACES v1.0</p>
            <p>© 2026 Tous droits réservés</p>
          </div>
        </div>
      </aside>
    </>
  );
};
 
export default Sidebar;
 
