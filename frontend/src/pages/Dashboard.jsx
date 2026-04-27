import React from 'react';
import { 
  Calendar, 
  Users, 
  GraduationCap, 
  TrendingUp,
  Clock,
  MapPin,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
 
const Dashboard = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
 
  // Données de démo (à remplacer par de vraies données API)
  const stats = [
    {
      title: 'Sessions ce mois',
      value: '24',
      change: '+12%',
      icon: Calendar,
      color: 'blue',
    },
    {
      title: 'Formateurs actifs',
      value: '4',
      change: '100%',
      icon: Users,
      color: 'green',
    },
    {
      title: 'Types de formations',
      value: '12',
      change: '+2',
      icon: GraduationCap,
      color: 'purple',
    },
    {
      title: 'Heures planifiées',
      value: '192h',
      change: '+8%',
      icon: Clock,
      color: 'orange',
    },
  ];
 
  const upcomingSessions = [
    {
      id: 1,
      type: 'CACES R482',
      entreprise: 'Entreprise Dupont',
      lieu: 'Bénisse Maremne',
      date: '2026-05-02',
      formateur: 'Jean Martin',
      statut: 'confirme',
    },
    {
      id: 2,
      type: 'SST',
      entreprise: 'Mairie de Bayonne',
      lieu: 'Bayonne',
      date: '2026-05-03',
      formateur: 'Sophie Durand',
      statut: 'option',
    },
    {
      id: 3,
      type: 'CACES R489',
      entreprise: 'BTP Services',
      lieu: 'Dax',
      date: '2026-05-05',
      formateur: null,
      statut: 'confirme',
    },
  ];
 
  const colorMap = {
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
    green: 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400',
    purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
    orange: 'bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400',
  };
 
  const statutStyles = {
    confirme: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    option: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
    annule: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
  };
 
  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Tableau de bord
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Bienvenue, {user?.prenom} ! Voici un aperçu de votre planning.
        </p>
      </div>
 
      {/* Statistiques */}
      {isAdmin && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${colorMap[stat.color]}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      )}
 
      {/* Sessions à venir */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Prochaines sessions
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Vos formations à venir cette semaine
          </p>
        </div>
 
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {upcomingSessions.map((session) => (
            <div
              key={session.id}
              className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {session.type}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statutStyles[session.statut]}`}>
                      {session.statut === 'confirme' ? 'Confirmé' : session.statut === 'option' ? 'Option' : 'Annulé'}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">
                      {session.entreprise}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(session.date).toLocaleDateString('fr-FR', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{session.lieu}</span>
                      </div>
                      
                      {session.formateur ? (
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{session.formateur}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400">
                          <AlertCircle className="w-4 h-4" />
                          <span className="font-medium">Aucun formateur assigné</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <button className="px-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors">
                  Voir détails
                </button>
              </div>
            </div>
          ))}
        </div>
 
        {upcomingSessions.length === 0 && (
          <div className="p-12 text-center">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              Aucune session planifiée pour le moment
            </p>
          </div>
        )}
      </div>
 
      {/* Alertes et notifications */}
      {isAdmin && (
        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-orange-900 dark:text-orange-300 mb-1">
                Attention : 1 session sans formateur
              </h3>
              <p className="text-sm text-orange-800 dark:text-orange-400">
                La formation CACES R489 du 5 mai 2026 n'a pas encore de formateur assigné.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default Dashboard;
 
