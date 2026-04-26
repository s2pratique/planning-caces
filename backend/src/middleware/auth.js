// Middleware pour vérifier si l'utilisateur est authentifié
export const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: 'Non authentifié. Connexion requise.' });
};

// Middleware pour vérifier le rôle admin
export const isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'ADMIN') {
    return next();
  }
  res.status(403).json({ error: 'Accès refusé. Permissions administrateur requises.' });
};

// Middleware pour vérifier formateur interne ou admin
export const isFormateurOrAdmin = (req, res, next) => {
  if (req.isAuthenticated() && 
      (req.user.role === 'ADMIN' || req.user.role === 'FORMATEUR_INTERNE')) {
    return next();
  }
  res.status(403).json({ error: 'Accès refusé. Permissions formateur requises.' });
};
