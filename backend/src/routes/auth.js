import express from 'express';
import passport from '../config/passport.js';

const router = express.Router();

// Route: Initier la connexion Google OAuth
router.get('/google', 
  passport.authenticate('google', { 
    scope: ['profile', 'email'] 
  })
);

// Route: Callback Google OAuth
router.get('/google/callback',
  passport.authenticate('google', { 
    failureRedirect: `${process.env.FRONTEND_URL}/login?error=auth_failed` 
  }),
  (req, res) => {
    // Authentification réussie, rediriger vers le frontend
    res.redirect(`${process.env.FRONTEND_URL}/dashboard`);
  }
);

// Route: Récupérer l'utilisateur connecté
router.get('/me', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ 
      user: {
        id: req.user.id,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
      }
    });
  } else {
    res.status(401).json({ error: 'Non authentifié' });
  }
});

// Route: Déconnexion
router.post('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de la déconnexion' });
    }
    res.json({ message: 'Déconnexion réussie' });
  });
});

export default router;
