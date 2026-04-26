// Middleware de gestion des erreurs globales
export const errorHandler = (err, req, res, next) => {
  console.error('❌ Erreur:', err);

  // Erreur de validation Prisma
  if (err.code && err.code.startsWith('P')) {
    return res.status(400).json({
      error: 'Erreur de validation',
      message: 'Les données fournies sont invalides.',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
  }

  // Erreur 404
  if (err.status === 404) {
    return res.status(404).json({
      error: 'Ressource non trouvée',
      message: err.message,
    });
  }

  // Erreur générique
  res.status(err.status || 500).json({
    error: 'Erreur serveur',
    message: err.message || 'Une erreur est survenue',
    details: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

// Middleware pour les routes non trouvées
export const notFound = (req, res, next) => {
  const error = new Error(`Route non trouvée: ${req.originalUrl}`);
  error.status = 404;
  next(error);
};
