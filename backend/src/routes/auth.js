const express = require('express');
const passport = require('passport');
const router = express.Router();

// Route pour initier la connexion Google
router.get('/google',
  passport.authenticate('google', { 
    scope: ['profile', 'email'] 
  })
);

// Callback après authentification Google
router.get('/google/callback',
  passport.authenticate('google', { 
    failureRedirect: process.env.FRONTEND_URL || 'http://localhost:5173'
  }),
  (req, res) => {
    // Succès : redirection vers le frontend avec le token
    const token = req.user.token;
    const redirectUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/auth/callback?token=${token}`;
    res.redirect(redirectUrl);
  }
);

// Route pour récupérer l'utilisateur connecté
router.get('/me', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      email: req.user.email,
      nom: req.user.nom,
      prenom: req.user.prenom,
      role: req.user.role
    });
  }
);

// Route de déconnexion
router.post('/logout', (req, res) => {
  req.logout(() => {
    res.json({ message: 'Déconnexion réussie' });
  });
});

module.exports = router;
