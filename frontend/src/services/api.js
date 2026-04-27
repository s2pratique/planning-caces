import axios from 'axios';
 
// URL de base de l'API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://planning-caces-production.up.railway.app';
 
// Instance Axios configurée
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Important pour les cookies de session
  headers: {
    'Content-Type': 'application/json',
  },
});
 
// Intercepteur de requête pour ajouter le token si disponible
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
 
// Intercepteur de réponse pour gérer les erreurs
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Erreur avec réponse du serveur
      const { status, data } = error.response;
      
      if (status === 401) {
        // Non authentifié - rediriger vers login
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user');
        window.location.href = '/login';
      } else if (status === 403) {
        // Pas les permissions
        console.error('Accès refusé:', data.message);
      } else if (status === 500) {
        console.error('Erreur serveur:', data.message);
      }
    } else if (error.request) {
      // Pas de réponse du serveur
      console.error('Pas de réponse du serveur. Vérifiez votre connexion.');
    } else {
      // Erreur lors de la configuration de la requête
      console.error('Erreur:', error.message);
    }
    
    return Promise.reject(error);
  }
);
 
// ============================================
// API ENDPOINTS - Authentification
// ============================================
 
export const authAPI = {
  // Connexion avec Google OAuth
  loginWithGoogle: () => {
    window.location.href = `${API_BASE_URL}/api/auth/google`;
  },
  
  // Récupérer l'utilisateur actuel
  getCurrentUser: () => api.get('/api/auth/user'),
  
  // Déconnexion
  logout: () => api.post('/api/auth/logout'),
  
  // Vérifier le statut d'authentification
  checkAuth: () => api.get('/api/auth/check'),
};
 
// ============================================
// API ENDPOINTS - Formations (à venir)
// ============================================
 
export const formationsAPI = {
  getAll: () => api.get('/api/formations'),
  getById: (id) => api.get(`/api/formations/${id}`),
  create: (data) => api.post('/api/formations', data),
  update: (id, data) => api.put(`/api/formations/${id}`, data),
  delete: (id) => api.delete(`/api/formations/${id}`),
};
 
// ============================================
// API ENDPOINTS - Lieux (à venir)
// ============================================
 
export const lieuxAPI = {
  getAll: () => api.get('/api/lieux'),
  getById: (id) => api.get(`/api/lieux/${id}`),
  create: (data) => api.post('/api/lieux', data),
  update: (id, data) => api.put(`/api/lieux/${id}`, data),
  delete: (id) => api.delete(`/api/lieux/${id}`),
};
 
// ============================================
// API ENDPOINTS - Formateurs (à venir)
// ============================================
 
export const formateursAPI = {
  getAll: () => api.get('/api/formateurs'),
  getById: (id) => api.get(`/api/formateurs/${id}`),
  create: (data) => api.post('/api/formateurs', data),
  update: (id, data) => api.put(`/api/formateurs/${id}`, data),
  delete: (id) => api.delete(`/api/formateurs/${id}`),
};
 
// ============================================
// API ENDPOINTS - Sessions (à venir)
// ============================================
 
export const sessionsAPI = {
  getAll: (params) => api.get('/api/sessions', { params }),
  getById: (id) => api.get(`/api/sessions/${id}`),
  create: (data) => api.post('/api/sessions', data),
  update: (id, data) => api.put(`/api/sessions/${id}`, data),
  delete: (id) => api.delete(`/api/sessions/${id}`),
};
 
export default api;
 
