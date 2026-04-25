# Backend - Planning Formations CACES

API Node.js + Express + PostgreSQL + Prisma

## 🛠️ Technologies

- **Runtime :** Node.js 18+
- **Framework :** Express.js
- **Base de données :** PostgreSQL
- **ORM :** Prisma
- **Authentification :** Passport.js (Google OAuth)

## 📂 Structure
backend/
├── src/
│   ├── app.js              # Point d'entrée
│   ├── config/             # Configuration (passport, db, etc.)
│   ├── controllers/        # Contrôleurs API
│   ├── middleware/         # Middlewares (auth, validation, etc.)
│   ├── routes/             # Routes API
│   └── services/           # Services métier
├── prisma/
│   └── schema.prisma       # Schéma base de données
├── package.json
└── .env.example

## 🚀 Hébergement

**Railway** (Backend + PostgreSQL)
- Déploiement automatique depuis GitHub
- URL API : (à définir après déploiement)
