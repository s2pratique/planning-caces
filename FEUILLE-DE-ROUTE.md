# 🗺️ FEUILLE DE ROUTE - Planning Formations CACES

**Version :** 1.0  
**Date :** Avril 2026  
**Durée estimée Phase 1 :** 10 semaines (développement à temps partiel)

---

## 📅 PLANNING GLOBAL

```
Semaine 1-2   : Fondations (Backend + Frontend + Déploiement)
Semaine 3-4   : Gestion des données (Formations, Lieux, Formateurs, Sessions)
Semaine 5-6   : Interface Calendrier (5 vues + Filtres)
Semaine 7     : Permissions & Rôles
Semaine 8     : Synchronisation Google Calendar + Notifications
Semaine 9     : Export & Archivage + Statistiques
Semaine 10    : Polish, Tests, Documentation
```

---

## 🏗️ SEMAINE 1-2 : FONDATIONS

### Objectif
Mettre en place l'infrastructure complète du projet (backend, frontend, base de données, authentification, déploiement).

### Backend

**Tâches :**
1. Initialiser projet Node.js + Express
2. Configuration PostgreSQL (Railway)
3. Setup Prisma ORM
4. Schéma de base de données initial
5. Authentification Google OAuth
6. Structure API REST (routes, controllers, middlewares)
7. Gestion erreurs & validation
8. Variables d'environnement
9. CORS et sécurité

**Livrables :**
- Serveur Express fonctionnel
- Base de données PostgreSQL connectée
- Authentification Google OAuth opérationnelle
- API de base documentée
- Déploiement Railway configuré

**Fichiers créés :**
```
backend/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── passport.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── routes/
│   │   └── auth.js
│   ├── controllers/
│   │   └── authController.js
│   └── app.js
├── prisma/
│   └── schema.prisma
├── .env.example
├── package.json
└── README.md
```

### Frontend

**Tâches :**
1. Initialiser projet React + Vite
2. Configuration TailwindCSS
3. Setup React Router
4. Layout de base (Header, Sidebar, Content)
5. Page de connexion (Google OAuth)
6. Système de thèmes (dark/light)
7. Gestion d'état (Context API ou Zustand)
8. Service HTTP (Axios)
9. Protection des routes

**Livrables :**
- Application React fonctionnelle
- Layout responsive
- Authentification côté client
- Navigation entre pages
- Thème clair/sombre
- Déploiement Vercel configuré

**Fichiers créés :**
```
frontend/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Layout.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       └── Modal.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   └── Dashboard.jsx
│   ├── services/
│   │   └── api.js
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── package.json
└── README.md
```

### Déploiement

**Tâches :**
1. Créer repository GitHub
2. Configurer Vercel (frontend)
3. Configurer Railway (backend + DB)
4. Variables d'environnement (production)
5. CI/CD automatique
6. Tests de déploiement

**Livrables :**
- Repository GitHub configuré
- Auto-déploiement Vercel (frontend)
- Auto-déploiement Railway (backend)
- URLs de production fonctionnelles

### Tests utilisateur

**Validation :**
- [ ] Connexion Google OAuth fonctionne
- [ ] Layout responsive (desktop + mobile)
- [ ] Switch dark/light mode fonctionne
- [ ] Navigation entre pages OK
- [ ] Déploiement auto fonctionne

**Temps estimé :** 15-20h de développement

---

## 🗂️ SEMAINE 3-4 : GESTION DES DONNÉES

### Objectif
Créer les modules CRUD complets pour Formations, Lieux, Formateurs et Sessions.

### Module 1 : Gestion des Formations

**Backend :**
- Modèle Prisma : Formation, Catégorie
- Routes API : GET /formations, POST /formations, PUT /formations/:id, DELETE /formations/:id
- Controller avec validations
- Gestion hiérarchie catégorie → sous-catégories

**Frontend :**
- Page admin Formations
- Liste des formations (tableau ou cartes)
- Formulaire création/édition (modal)
- Sélection couleur (color picker)
- Suppression avec confirmation

**Livrables :**
- CRUD formations complet
- Interface admin intuitive
- Validation des données

**Temps estimé :** 4h

### Module 2 : Gestion des Lieux

**Backend :**
- Modèle Prisma : Lieu
- Routes API : CRUD lieux
- Intégration Google Places API (auto-complétion adresses)
- Calcul automatique GPS depuis adresse

**Frontend :**
- Page admin Lieux
- Liste des lieux avec recherche
- Formulaire création/édition
- Auto-complétion adresse (Google Places)
- Affichage carte (Google Maps) en modal

**Livrables :**
- CRUD lieux complet
- Auto-complétion adresses fonctionnelle
- Géolocalisation automatique

**Temps estimé :** 4h

### Module 3 : Gestion des Formateurs

**Backend :**
- Modèle Prisma : Formateur, Indisponibilité, Spécialité
- Routes API : CRUD formateurs
- Gestion périodes d'indisponibilité
- Relation formateurs ↔ formations (spécialités)

**Frontend :**
- Page admin Formateurs
- Liste formateurs avec filtres (par rôle)
- Formulaire création/édition
- Gestion spécialités (multi-select formations)
- Gestion indisponibilités (calendrier de saisie)
- Sélection couleur formateur

**Livrables :**
- CRUD formateurs complet
- Gestion indisponibilités
- Assignation spécialités

**Temps estimé :** 5h

### Module 4 : Gestion des Sessions

**Backend :**
- Modèle Prisma : Session, SessionFormateur (relation many-to-many)
- Routes API : CRUD sessions
- Logique création sessions multi-jours (événements liés)
- Validations :
  - Conflit d'agenda
  - Formateur indisponible
  - Formateur hors spécialité
- Endpoint validation en temps réel

**Frontend :**
- Page admin Sessions
- Formulaire création complet
- Gestion multi-jours (affichage série)
- Auto-complétion lieu
- Multi-sélection formateurs
- Affichage warnings (conflits, indisponibilités)
- Modification session (choix : un seul événement ou toute la série)
- Suppression avec confirmation

**Livrables :**
- CRUD sessions complet
- Gestion multi-jours fonctionnelle
- Validations temps réel
- Warnings visuels

**Temps estimé :** 7h

### Tests utilisateur

**Validation :**
- [ ] Créer une formation avec sous-catégorie
- [ ] Créer un lieu avec auto-complétion adresse
- [ ] Créer un formateur avec spécialités et indisponibilités
- [ ] Créer une session simple (1 jour)
- [ ] Créer une session multi-jours (3 jours)
- [ ] Vérifier warnings si formateur indisponible
- [ ] Vérifier warnings si conflit d'agenda

**Temps total semaines 3-4 :** 20h de développement

---

## 📅 SEMAINE 5-6 : INTERFACE CALENDRIER

### Objectif
Développer les 5 vues calendrier avec affichage codé couleur et filtres.

### Vue 1 : Formateur individuel (Priorité 1)

**Frontend :**
- Composant calendrier mensuel
- Sélecteur formateur (dropdown)
- Affichage sessions avec codes couleurs
- Navigation mois précédent/suivant
- Modal détails session au clic
- Actions selon rôle (admin vs formateur)

**Backend :**
- Endpoint : GET /sessions?formateur=X&mois=Y&annee=Z

**Livrables :**
- Vue calendrier mensuel fonctionnelle
- Sélection formateur
- Affichage sessions stylisées

**Temps estimé :** 5h

### Vue 2 : Semaine multi-formateurs (Priorité 2)

**Frontend :**
- Grille semaine : jours (colonnes) × formateurs (lignes)
- Affichage toutes sessions de la semaine
- Navigation semaine précédente/suivante
- Zones indisponibilités grisées
- Responsive (collapse sur mobile)

**Backend :**
- Endpoint : GET /sessions?semaine=W&annee=Y

**Livrables :**
- Vue semaine multi-formateurs
- Grille responsive
- Navigation fluide

**Temps estimé :** 6h

### Vue 3 : Jour détaillé (Priorité 3)

**Frontend :**
- Timeline horaire (8h → 18h)
- Colonnes par formateur
- Sessions positionnées selon heure début/fin
- Détails visibles sans clic
- Navigation jour précédent/suivant

**Backend :**
- Endpoint : GET /sessions?date=YYYY-MM-DD

**Livrables :**
- Vue jour avec timeline
- Positionnement précis des sessions

**Temps estimé :** 4h

### Vue 4 : Liste chronologique (Priorité 4)

**Frontend :**
- Tableau avec colonnes : Date, Heure, Formation, Entreprise, Formateur(s), Lieu, Statut
- Tri par colonne (cliquable)
- Pagination (20 sessions par page)
- Recherche rapide (barre de recherche simple)

**Backend :**
- Endpoint : GET /sessions?page=X&limit=Y&sort=Z

**Livrables :**
- Vue liste triable
- Pagination fonctionnelle

**Temps estimé :** 3h

### Vue 5 : Mois global (Priorité 5)

**Frontend :**
- Calendrier mensuel compact
- Mini-cartes de sessions (toutes visibles)
- Tooltip au survol pour détails
- Navigation mois

**Backend :**
- Endpoint : GET /sessions?mois=X&annee=Y (toutes sessions)

**Livrables :**
- Vue mois global dense
- Affichage compact

**Temps estimé :** 3h

### Système de filtres

**Frontend :**
- Barre de filtres (sticky top)
- Filtres :
  - Par formateur (multi-select)
  - Par type de formation (multi-select)
  - Par période (date range picker)
- Bouton "Réinitialiser filtres"
- Indicateur visuel filtres actifs
- Persistance filtres entre vues

**Backend :**
- Endpoints avec query params de filtrage

**Livrables :**
- Système de filtres complet
- Filtres cumulatifs
- Persistance navigation

**Temps estimé :** 4h

### Codes couleurs & Styles

**Frontend :**
- Composant Session Card stylisé :
  - Fond = couleur formation
  - Bulle nom = couleur formateur
  - Bordure = statut (aucune/orange/rouge)
- Indicateur sessions multi-jours (icône chaîne)
- Styles responsive

**Livrables :**
- Cartes sessions finalisées
- Cohérence visuelle toutes vues

**Temps estimé :** 3h

### Tests utilisateur

**Validation :**
- [ ] Vue formateur individuel : sélectionner formateur, naviguer mois
- [ ] Vue semaine : voir tous formateurs sur semaine courante
- [ ] Vue jour : voir détail journée avec timeline
- [ ] Vue liste : trier par date, paginer
- [ ] Vue mois : vue globale compact
- [ ] Filtres : filtrer par formateur, type formation, période
- [ ] Codes couleurs : vérifier cohérence (formation, formateur, statut)

**Temps total semaines 5-6 :** 28h de développement

---

## 🔐 SEMAINE 7 : PERMISSIONS & RÔLES

### Objectif
Implémenter le système de permissions et adapter l'interface selon le rôle.

### Backend

**Tâches :**
- Middleware vérification rôle
- Routes protégées par rôle
- Endpoints spécifiques par permission
- Logs d'activité (qui fait quoi)

**Livrables :**
- Middleware de permissions opérationnel
- Routes sécurisées

**Temps estimé :** 3h

### Frontend

**Tâches :**
- Adaptation UI selon rôle connecté :
  - Admin : tous boutons visibles
  - Formateur interne : boutons limités (modifier lieu/commentaire uniquement)
  - Navigation adaptée
- Formulaire modification partielle (formateurs)
- Messages d'erreur si action non autorisée

**Livrables :**
- Interface adaptive par rôle
- Formulaires conditionnels
- UX cohérente

**Temps estimé :** 3h

### Tests utilisateur

**Validation :**
- [ ] Connexion en tant qu'admin : accès total
- [ ] Connexion en tant que formateur interne : modifications limitées
- [ ] Tentative d'action non autorisée : erreur claire
- [ ] Logs d'activité enregistrés

**Temps total semaine 7 :** 6h de développement

---

## 🔄 SEMAINE 8 : SYNCHRONISATION & NOTIFICATIONS

### Objectif
Implémenter la synchronisation Google Calendar et le système de notifications automatiques.

### Synchronisation Google Calendar

**Backend :**
- Intégration Google Calendar API v3
- Service de synchronisation :
  - Création événement → Google Calendar
  - Mise à jour événement
  - Suppression événement
- Format événement (titre, description, lieu)
- Gestion multi-agendas (1 par formateur)
- Cron job synchronisation toutes les 15 min (fallback)

**Frontend :**
- Page admin configuration Google Calendar
- Connexion OAuth Google Calendar
- Test synchronisation (bouton manuel)
- Indicateur statut sync (dernière sync, erreurs éventuelles)

**Livrables :**
- Synchronisation unidirectionnelle fonctionnelle
- Événements Google Calendar bien formatés
- Configuration admin simple

**Temps estimé :** 6h

### Système de notifications

**Backend :**

**1. Service email (SendGrid) :**
- Configuration SendGrid
- Templates HTML responsive
- Service d'envoi

**2. Récapitulatif hebdomadaire :**
- Cron job : vendredi 16h
- Récupération sessions semaine suivante par formateur
- Génération email personnalisé
- Envoi à tous formateurs

**3. Alerte modification J-7 :**
- Hook déclenchement à chaque modification de session
- Vérification si session dans les 7 jours
- Détection des changements (diff ancien/nouveau)
- Envoi immédiat admin + formateur(s)

**4. Rappel J-1 :**
- Cron job : quotidien 18h-20h
- Récupération sessions du lendemain
- Envoi aux formateurs concernés

**5. Alerte session sans formateur :**
- Hook création/modification session
- Vérification si formateurs assignés
- Envoi immédiat à admin

**6. Notification modification par formateur :**
- Hook modification par formateur interne
- Envoi immédiat à admin

**Frontend :**
- Page admin paramètres notifications
- Activation/désactivation par type
- Test envoi (bouton)
- Prévisualisation templates

**Livrables :**
- 5 types de notifications fonctionnelles
- Templates email professionnels
- Cron jobs fiables
- Configuration admin

**Temps estimé :** 9h

### Tests utilisateur

**Validation :**
- [ ] Créer session → événement apparaît dans Google Calendar
- [ ] Modifier session → événement mis à jour dans Calendar
- [ ] Supprimer session → événement supprimé de Calendar
- [ ] Recevoir récap hebdo (vendredi 16h)
- [ ] Modifier session J-5 → recevoir alerte
- [ ] Recevoir rappel J-1
- [ ] Créer session sans formateur → admin alerté
- [ ] Formateur modifie lieu → admin notifié

**Temps total semaine 8 :** 15h de développement

---

## 📊 SEMAINE 9 : EXPORT & ARCHIVAGE

### Objectif
Implémenter l'export Excel, l'archivage et les statistiques simples.

### Export Excel

**Backend :**
- Bibliothèque : xlsx ou exceljs
- Endpoint : POST /export (avec paramètres période)
- Génération fichier .xlsx :
  - Feuille 1 : Sessions
  - Feuille 2 : Statistiques
- Mise en forme (couleurs, entêtes, filtres)

**Frontend :**
- Page Export
- Sélection période (date range)
- Checkbox "Inclure archivées"
- Bouton "Générer export"
- Téléchargement automatique fichier

**Livrables :**
- Export Excel fonctionnel
- Fichier bien formaté
- Statistiques incluses

**Temps estimé :** 4h

### Archivage

**Backend :**
- Champ `archived` sur modèle Session
- Endpoint : PUT /sessions/:id/archive
- Endpoint : PUT /sessions/:id/unarchive
- Endpoint : DELETE /sessions/:id (suppression définitive)
- Filtrage par défaut : exclure archivées

**Frontend :**
- Page Archives
- Liste sessions archivées
- Filtres (année, type, formateur)
- Bouton "Restaurer"
- Bouton "Supprimer définitivement" (avec double confirmation)
- Export spécifique archives

**Livrables :**
- Système d'archivage complet
- Suppression sécurisée (confirmation)
- Consultation archives facile

**Temps estimé :** 3h

### Statistiques simples

**Backend :**
- Endpoint : GET /stats?periode=X
- Calculs :
  - Répartition par type de formation
  - Jours de formation par formateur
  - Taux occupation par formateur
  - Top entreprises clientes

**Frontend :**
- Page Statistiques
- Sélection période
- Graphique camembert (répartition formations) - Chart.js ou Recharts
- Tableau occupation formateurs
- Tableau top clients

**Livrables :**
- 3 indicateurs statistiques
- Visualisations claires
- Période personnalisable

**Temps estimé :** 4h

### Tests utilisateur

**Validation :**
- [ ] Exporter planning sur 3 mois → fichier Excel téléchargé
- [ ] Archiver une session → disparaît de la vue principale
- [ ] Consulter archives → session visible
- [ ] Restaurer session archivée → revient dans planning
- [ ] Supprimer définitivement → confirmation demandée
- [ ] Voir statistiques période Q1 → graphiques affichés

**Temps total semaine 9 :** 11h de développement

---

## ✨ SEMAINE 10 : POLISH, TESTS & DOCUMENTATION

### Objectif
Finaliser, optimiser, tester et documenter l'application.

### Optimisations

**Tâches :**
- Lazy loading composants (React.lazy)
- Optimisation images (compression, formats modernes)
- Cache navigateur (Service Worker basique)
- Optimisation requêtes DB (indexes, jointures)
- Minification production
- Analyse performances (Lighthouse)

**Livrables :**
- Application rapide (< 3s chargement)
- Optimisations appliquées

**Temps estimé :** 3h

### Gestion erreurs & Edge cases

**Tâches :**
- Messages d'erreur clairs (toasts)
- Gestion perte connexion (indicateur, mode dégradé)
- Validations formulaires complètes
- États vides (empty states)
- Loading states sur toutes actions
- Gestion erreurs API (retry, fallback)

**Livrables :**
- UX robuste
- Erreurs gérées gracieusement

**Temps estimé :** 3h

### Tests end-to-end

**Tâches :**
- Tests manuels parcours utilisateur :
  - Parcours admin complet
  - Parcours formateur interne
  - Création session → notification → Google Calendar
- Tests multi-navigateurs (Chrome, Safari, Firefox)
- Tests responsive (desktop, tablet, mobile)
- Tests performances

**Livrables :**
- Checklist tests validée
- Bugs identifiés et corrigés

**Temps estimé :** 4h

### Documentation

**Tâches :**

**1. Documentation technique :**
- README.md principal
- README.md backend (installation, variables env, API)
- README.md frontend (installation, structure, composants)
- Schéma architecture (diagramme)
- Schéma base de données

**2. Guide utilisateur admin :**
- Installation et configuration initiale
- Gestion formations, lieux, formateurs
- Création et modification sessions
- Configuration Google Calendar
- Configuration notifications
- Export et statistiques

**3. Guide utilisateur formateur :**
- Connexion
- Consultation planning
- Modification session (lieu, commentaire)
- Notifications reçues

**4. Guide installation/déploiement :**
- Prérequis (Node.js, npm, comptes services)
- Installation locale (dev)
- Configuration variables d'environnement
- Déploiement production (Vercel, Railway)
- Configuration Google OAuth
- Configuration Google Calendar API
- Configuration SendGrid

**Livrables :**
- Documentation complète en français
- Guides illustrés (captures d'écran)
- Fichiers markdown dans /docs

**Temps estimé :** 5h

### Formation utilisateurs

**Tâches :**
- Préparer vidéo démo (ou visio live)
- Créer données de démo (formations, lieux, formateurs, sessions)
- Session formation admin (1h)
- Session formation formateurs (30 min)

**Livrables :**
- Utilisateurs formés
- Données de démo en place

**Temps estimé :** 3h

### Tests utilisateur

**Validation finale :**
- [ ] Tous les modules fonctionnent
- [ ] Aucun bug bloquant
- [ ] Performances acceptables
- [ ] Documentation complète
- [ ] Utilisateurs formés

**Temps total semaine 10 :** 18h de développement

---

## 📊 RÉCAPITULATIF TEMPS

| Semaine | Module | Temps estimé |
|---------|--------|--------------|
| 1-2 | Fondations | 15-20h |
| 3-4 | Gestion données | 20h |
| 5-6 | Interface calendrier | 28h |
| 7 | Permissions & Rôles | 6h |
| 8 | Sync & Notifications | 15h |
| 9 | Export & Archivage | 11h |
| 10 | Polish & Tests | 18h |
| **TOTAL** | **Phase 1 complète** | **~113-118h** |

**Réparti sur 10 semaines à temps partiel = ~11-12h/semaine**

---

## 🎯 ORGANISATION DES CONVERSATIONS CLAUDE

### Conversation par module

**Conversation #0 : Setup initial**
- Titre : `[SETUP] Configuration environnement & déploiement`
- Contenu : Installation GitHub, Vercel, Railway, structure initiale
- Durée estimée : 1 semaine

**Conversation #1 : Backend foundations**
- Titre : `[BACKEND] Architecture + Auth + DB`
- Contenu : Node.js, PostgreSQL, Prisma, Google OAuth
- Durée estimée : 1 semaine

**Conversation #2 : Frontend foundations**
- Titre : `[FRONTEND] Architecture React + Layout`
- Contenu : React, Vite, TailwindCSS, routing, auth UI
- Durée estimée : 1 semaine

**Conversation #3 : Module Formations**
- Titre : `[MODULE] Gestion Formations`
- Contenu : CRUD formations
- Durée estimée : 2-3 jours

**Conversation #4 : Module Lieux**
- Titre : `[MODULE] Gestion Lieux`
- Contenu : CRUD lieux + auto-complétion
- Durée estimée : 2-3 jours

**Conversation #5 : Module Formateurs**
- Titre : `[MODULE] Gestion Formateurs`
- Contenu : CRUD formateurs + indisponibilités
- Durée estimée : 3-4 jours

**Conversation #6 : Module Sessions**
- Titre : `[MODULE] Gestion Sessions`
- Contenu : CRUD sessions + multi-jours + validations
- Durée estimée : 4-5 jours

**Conversation #7 : Calendrier vues 1-2**
- Titre : `[CALENDRIER] Vues formateur individuel + semaine`
- Contenu : 2 vues prioritaires
- Durée estimée : 1 semaine

**Conversation #8 : Calendrier vues 3-5 + Filtres**
- Titre : `[CALENDRIER] Vues jour/mois/liste + Filtres`
- Contenu : 3 vues restantes + système filtres
- Durée estimée : 1 semaine

**Conversation #9 : Permissions**
- Titre : `[SÉCURITÉ] Gestion rôles et permissions`
- Contenu : Middleware, UI adaptative
- Durée estimée : 3-4 jours

**Conversation #10 : Google Calendar**
- Titre : `[INTÉGRATION] Synchronisation Google Calendar`
- Contenu : API Calendar, sync unidirectionnelle
- Durée estimée : 3-4 jours

**Conversation #11 : Notifications**
- Titre : `[NOTIFICATIONS] Emails automatiques`
- Contenu : SendGrid, 5 types notifications, cron jobs
- Durée estimée : 1 semaine

**Conversation #12 : Export & Stats**
- Titre : `[EXPORT] Excel + Archivage + Statistiques`
- Contenu : Export XLSX, archivage, stats simples
- Durée estimée : 1 semaine

**Conversation #13 : Polish & Debug**
- Titre : `[FINAL] Optimisations + Tests`
- Contenu : Corrections bugs, optimisations, tests
- Durée estimée : 1 semaine

---

## ✅ CHECKLIST DE VALIDATION PAR PHASE

### Phase Setup (Semaines 1-2)

- [ ] Repository GitHub créé
- [ ] Backend déployé sur Railway
- [ ] Frontend déployé sur Vercel
- [ ] Base de données PostgreSQL fonctionnelle
- [ ] Authentification Google OAuth opérationnelle
- [ ] Layout responsive (desktop + mobile)
- [ ] Mode dark/light fonctionnel
- [ ] Navigation entre pages OK

### Phase Données (Semaines 3-4)

- [ ] CRUD Formations complet
- [ ] CRUD Lieux complet + auto-complétion
- [ ] CRUD Formateurs complet + indisponibilités
- [ ] CRUD Sessions complet + multi-jours
- [ ] Validations fonctionnelles (conflits, warnings)

### Phase Calendrier (Semaines 5-6)

- [ ] Vue formateur individuel
- [ ] Vue semaine multi-formateurs
- [ ] Vue jour détaillé
- [ ] Vue liste chronologique
- [ ] Vue mois global
- [ ] Système de filtres complet
- [ ] Codes couleurs cohérents

### Phase Permissions (Semaine 7)

- [ ] Middleware permissions backend
- [ ] Interface adaptée par rôle
- [ ] Logs d'activité

### Phase Sync & Notifs (Semaine 8)

- [ ] Synchronisation Google Calendar fonctionnelle
- [ ] Récapitulatif hebdomadaire (vendredi 16h)
- [ ] Alerte modification J-7
- [ ] Rappel J-1
- [ ] Alerte session sans formateur
- [ ] Notification modification par formateur

### Phase Export (Semaine 9)

- [ ] Export Excel fonctionnel
- [ ] Archivage sessions
- [ ] Statistiques simples

### Phase Polish (Semaine 10)

- [ ] Optimisations performances
- [ ] Gestion erreurs complète
- [ ] Tests end-to-end validés
- [ ] Documentation complète
- [ ] Utilisateurs formés

---

## 🚀 PROCHAINES ÉTAPES IMMÉDIATES

1. **Créer le projet Claude** "Planning Formations CACES"
2. **Uploader dans le projet :**
   - CAHIER-DES-CHARGES.md
   - FEUILLE-DE-ROUTE.md (ce fichier)
   - TEMPLATE-CONVERSATION.md
   - README.md
3. **Créer repository GitHub** : `planning-caces`
4. **Démarrer Conversation #0** : Setup initial

---

**Ce document est la référence pour l'organisation et le suivi du développement. Il sera mis à jour au fur et à mesure de l'avancement.**
