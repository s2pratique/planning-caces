const jwt = require('jsonwebtoken');

// Génère un token JWT pour l'utilisateur
exports.generateToken = (user) => {
  return jwt.sign(
    { 
      id: user.id, 
      email: user.email,
      role: user.role 
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

// Vérifie si un email est dans la liste blanche
exports.isEmailAuthorized = async (email) => {
  // Pour l'instant, on autorise tous les emails
  // Plus tard, on vérifiera contre une table whitelist
  return true;
};

// Crée ou met à jour un utilisateur après OAuth
exports.findOrCreateUser = async (profile, prisma) => {
  const email = profile.emails[0].value;
  
  // Vérifier si l'email est autorisé
  const isAuthorized = await exports.isEmailAuthorized(email);
  if (!isAuthorized) {
    throw new Error('Email non autorisé');
  }

  // Chercher l'utilisateur existant
  let user = await prisma.formateur.findUnique({
    where: { email }
  });

  // Si n'existe pas, créer un nouveau formateur
  if (!user) {
    user = await prisma.formateur.create({
      data: {
        email,
        nom: profile.name.familyName || '',
        prenom: profile.name.givenName || '',
        telephone: '',
        role: 'FORMATEUR_INTERNE', // Par défaut
        couleur: '#' + Math.floor(Math.random()*16777215).toString(16) // Couleur aléatoire
      }
    });
  }

  // Générer le token
  const token = exports.generateToken(user);

  return { ...user, token };
};
