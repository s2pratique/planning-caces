# 📅 Planning Formations CACES

Application web de gestion du planning des formations pour centre de formation CACES.

**Version :** 1.0 (Phase 1 - MVP)  
**Statut :** En développement  
**Dernière mise à jour :** Avril 2026

---

## 🎯 Présentation

Application web complète pour gérer le planning des formations d'un centre de formation CACES, remplaçant un fichier Excel partagé par une solution centralisée, ergonomique et automatisée.

### Problèmes résolus

- ✅ **Visibilité complexe** → Interface calendrier claire avec vues multiples
- ✅ **Conflits de version** → Base de données centralisée, mises à jour temps réel
- ✅ **Informations éparpillées** → Toutes les infos dans une seule fiche session
- ✅ **Pas de notifications** → Système d'alertes automatiques (email)
- ✅ **Consultation mobile limitée** → Sync Google Calendar pour accès mobile

---

## 🚀 Fonctionnalités principales

### Gestion des données
- **Formations** : CACES, ACES, SST, PRAP, Hab Elec, etc. (catégories + sous-catégories)
- **Lieux** : Base de lieux avec auto-complétion adresse (Google Places)
- **Formateurs** : Gestion profils, spécialités, indisponibilités, couleurs
- **Sessions** : Création/modification avec validations (conflits, indisponibilités)

### Interface calendrier
- 5 vues : formateur individuel, semaine multi-formateurs, jour, liste, mois global
- Codes couleurs : formation (fond), formateur (bulle nom), statut (bordure)
- Filtres : par formateur, type de formation, période
- Gestion sessions multi-jours (événements liés)

### Synchronisation & Notifications
- **Google Calendar** : synchronisation unidirectionnelle (app → calendar)
- **Notifications email automatiques** :
  - Récapitulatif hebdomadaire (vendredi 16h)
  - Alertes modification J-7 (immédiate)
  - Rappels J-1 (veille de session)
  - Alertes sessions sans formateur
  - Notifications modifications par formateurs

### Permissions & Rôles
- **Admin** : accès complet (CRUD, exports, stats, config)
- **Formateur interne** : consultation + modification limitée (lieu, commentaire)
- **Formateur intervenant** (Phase 2) : consultation seule

### Export & Statistiques
- Export Excel (période personnalisable)
- Archivage sessions passées
- Statistiques : répartition formations, taux occupation, top clients

---

## 🛠️ Stack technique

### Frontend
- **Framework :** React 18+ avec Vite
- **Styling :** TailwindCSS
- **Routing :** React Router
- **HTTP Client :** Axios
- **State Management :** React Query + Context API
- **Calendrier :** React Big Calendar (ou custom)
- **Date manipulation :** date-fns
- **Charts :** Chart.js ou Recharts

### Backend
- **Runtime :** Node.js 18+
- **Framework :** Express.js
- **Base de données :** PostgreSQL
- **ORM :** Prisma
- **Authentification :** Passport.js (Google OAuth)
- **Emails :** Nodemailer + SendGrid
- **Cron jobs :** node-cron

### Services externes
- Google OAuth (authentification)
- Google Calendar API (synchronisation agendas)
- Google Places API (auto-complétion adresses)
- Google Maps API (géolocalisation)
- SendGrid (envoi emails - gratuit jusqu'à 100/jour)

### Hébergement
- **Code source :** GitHub
- **Frontend :** Vercel (gratuit)
- **Backend + DB :** Railway (500h/mois gratuit avec optimisation)

---

## 📁 Structure du projet

```
planning-caces/
│
├── frontend/              # Application React
│   ├── src/
│   │   ├── components/   # Composants réutilisables
│   │   ├── pages/        # Pages de l'application
│   │   ├── services/     # Services API
│   │   ├── context/      # Contextes React
│   │   └── utils/        # Utilitaires
│   ├── public/           # Fichiers statiques
│   └── package.json
│
├── backend/              # API Node.js
│   ├── src/
│   │   ├── routes/       # Routes API
│   │   ├── controllers/  # Contrôleurs
│   │   ├── models/       # Modèles Prisma
│   │   ├── services/     # Services métier
│   │   ├── middleware/   # Middlewares
│   │   └── config/       # Configuration
│   ├── prisma/           # Schéma base de données
│   └── package.json
│
├── docs/                 # Documentation
│   ├── CAHIER-DES-CHARGES.md
│   ├── FEUILLE-DE-ROUTE.md
│   ├── INSTALLATION.md
│   ├── GUIDE-ADMIN.md
│   ├── GUIDE-FORMATEUR.md
│   ├── AVANCEMENT.md
│   └── DECISIONS.md
│
└── README.md            # Ce fichier
```

---

## 🚀 Installation & Déploiement

### Prérequis

- Node.js 18+ et npm
- Compte GitHub
- Compte Vercel (frontend)
- Compte Railway (backend + DB)
- Compte Google Cloud (OAuth + APIs)
- Compte SendGrid (emails)

### Installation locale

Voir le guide détaillé dans [docs/INSTALLATION.md](docs/INSTALLATION.md).

**Résumé :**

```bash
# Cloner le repository
git clone https://github.com/[votre-username]/planning-caces.git
cd planning-caces

# Backend
cd backend
npm install
cp .env.example .env
# Configurer les variables d'environnement dans .env
npx prisma migrate dev
npm run dev

# Frontend (nouveau terminal)
cd frontend
npm install
cp .env.example .env
# Configurer les variables d'environnement dans .env
npm run dev
```

### Déploiement production

**Frontend (Vercel) :**
1. Connecter le repository GitHub à Vercel
2. Configurer les variables d'environnement
3. Déploiement automatique à chaque push

**Backend (Railway) :**
1. Créer nouveau projet Railway
2. Connecter le repository GitHub
3. Ajouter service PostgreSQL
4. Configurer les variables d'environnement
5. Déploiement automatique à chaque push

Guide complet : [docs/INSTALLATION.md](docs/INSTALLATION.md)

---

## 📖 Documentation

- **[Cahier des charges](docs/CAHIER-DES-CHARGES.md)** - Spécifications fonctionnelles complètes
- **[Feuille de route](docs/FEUILLE-DE-ROUTE.md)** - Planning de développement détaillé
- **[Guide d'installation](docs/INSTALLATION.md)** - Installation et déploiement
- **[Guide administrateur](docs/GUIDE-ADMIN.md)** - Utilisation interface admin
- **[Guide formateur](docs/GUIDE-FORMATEUR.md)** - Utilisation interface formateur
- **[Suivi d'avancement](docs/AVANCEMENT.md)** - État du développement
- **[Journal des décisions](docs/DECISIONS.md)** - Décisions techniques prises

---

## 👥 Utilisateurs & Permissions

### Admin
- Gestion complète (formations, lieux, formateurs, sessions)
- Configuration (Google Calendar, notifications)
- Exports et statistiques
- Gestion des comptes utilisateurs

### Formateur interne
- Consultation planning complet (tous formateurs)
- Modification limitée de ses sessions (lieu, commentaire uniquement)
- Réception notifications (récap hebdo, rappels, alertes)

### Formateur intervenant (Phase 2)
- Consultation de son planning uniquement
- Aucune modification
- Réception notifications

---

## 🗓️ Roadmap

### ✅ Phase 1 : MVP (En cours)
- [x] Setup infrastructure
- [x] Backend foundations
- [x] Frontend foundations
- [ ] Modules CRUD (Formations, Lieux, Formateurs, Sessions)
- [ ] Interface calendrier (5 vues)
- [ ] Permissions & rôles
- [ ] Synchronisation Google Calendar
- [ ] Notifications automatiques
- [ ] Export & archivage
- [ ] Tests & documentation

**Date cible :** Juin 2026

### 🟠 Phase 2 : Améliorations
- [ ] Formateurs intervenants
- [ ] Optimisations performances
- [ ] Retours utilisateurs

**Date cible :** Juillet 2026

### 🟢 Phase 3 : Évolutions (à prioriser)
- [ ] Fonction recherche avancée
- [ ] Synchronisation bidirectionnelle Google Calendar
- [ ] Dashboard statistiques avancées
- [ ] Gestion stagiaires (listes nominatives)
- [ ] Module commercial (devis, facturation)
- [ ] Intégrations tierces (CRM, comptabilité)
- [ ] PWA / App mobile native

**Date cible :** À définir selon besoins

---

## 🤝 Contribution

### Développement

Ce projet est développé avec l'assistance de **Claude (Anthropic)** via conversations structurées.

**Workflow :**
1. 1 conversation Claude = 1 module de développement
2. Code généré par Claude → intégration dans le projet
3. Tests locaux
4. Validation → commit → déploiement auto

### Conventions de code

**Backend :**
- ESLint + Prettier
- Nomenclature : camelCase (variables/fonctions), PascalCase (classes)
- Commentaires en français

**Frontend :**
- ESLint + Prettier
- Composants : PascalCase
- Fichiers : kebab-case
- CSS : TailwindCSS utility-first

### Git workflow

```bash
# Nouvelle fonctionnalité
git checkout -b feature/nom-du-module
# Développement
git add .
git commit -m "feat: description de la fonctionnalité"
git push origin feature/nom-du-module

# Merge dans develop
git checkout develop
git merge feature/nom-du-module
git push

# Déploiement production
git checkout main
git merge develop
git push  # → Auto-déploiement
```

---

## 🐛 Bugs & Support

### Signaler un bug

1. Vérifier que le bug n'est pas déjà listé dans [docs/AVANCEMENT.md](docs/AVANCEMENT.md)
2. Créer une issue GitHub avec :
   - Description du problème
   - Étapes pour reproduire
   - Comportement attendu vs observé
   - Captures d'écran si pertinent
   - Environnement (navigateur, OS, etc.)

### Demander une fonctionnalité

1. Vérifier la roadmap (Phase 3)
2. Créer une issue GitHub avec label "enhancement"
3. Décrire le besoin et le cas d'usage

---

## 📜 Licence

**Projet privé** - Centre de formation CACES  
Tous droits réservés

---

## 📞 Contact

**Admin projet :** [Votre nom]  
**Email :** [Votre email]  
**Centre de formation :** [Nom du centre]

---

## 🙏 Remerciements

- **Claude (Anthropic)** pour l'assistance au développement
- **Équipe formateurs** pour les retours et tests
- **Communauté open source** pour les bibliothèques utilisées

---

**Dernière mise à jour :** Avril 2026  
**Version :** 1.0.0-beta
