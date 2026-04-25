# 📝 TEMPLATE CONVERSATION - Planning Formations CACES

Ce template vous guide pour démarrer chaque nouvelle conversation de développement de manière optimale.

---

## 🎯 STRUCTURE TYPE D'UNE CONVERSATION

```markdown
MODULE : [Nom du module]

CONTEXTE :
Je travaille sur le projet "Planning Formations CACES".
Le cahier des charges complet est dans CAHIER-DES-CHARGES.md (fichiers du projet).
La feuille de route est dans FEUILLE-DE-ROUTE.md.

OBJECTIF DE CETTE CONVERSATION :
[Décrire précisément ce que vous voulez accomplir]

DÉPENDANCES :
[Lister les modules déjà développés dont celui-ci dépend]
Exemple : "Le backend auth et DB sont déjà en place (voir conversation #1)"

QUESTIONS/BLOCAGES :
[Si vous avez rencontré un problème dans une conversation précédente]

PRÊT À DÉMARRER
Fournis-moi le code complet pour ce module.
```

---

## 📋 EXEMPLES CONCRETS PAR PHASE

### Conversation #0 : Setup initial

```markdown
MODULE : Configuration environnement & déploiement

CONTEXTE :
Je démarre le projet "Planning Formations CACES".
Cahier des charges dans CAHIER-DES-CHARGES.md (fichiers projet).

OBJECTIF DE CETTE CONVERSATION :
- Créer la structure complète du projet (frontend + backend)
- Configurer GitHub, Vercel, Railway
- Mettre en place l'infrastructure de base

DÉPENDANCES :
Aucune, c'est le point de départ.

COMPTES CRÉÉS :
- [x] GitHub
- [ ] Vercel
- [ ] Railway
- [ ] Google Cloud (pour OAuth)

PRÊT À DÉMARRER
Guide-moi étape par étape pour le setup complet.
```

---

### Conversation #1 : Backend foundations

```markdown
MODULE : Architecture Backend + Auth + DB

CONTEXTE :
Projet "Planning Formations CACES" (voir CAHIER-DES-CHARGES.md).

OBJECTIF DE CETTE CONVERSATION :
Développer le backend complet avec :
- Architecture Node.js + Express
- Base de données PostgreSQL (Railway)
- ORM Prisma
- Authentification Google OAuth
- Routes API de base
- Sécurité (CORS, validation, gestion erreurs)

DÉPENDANCES :
✅ Setup initial terminé (conversation #0)
✅ Repository GitHub créé
✅ Comptes Railway et Google Cloud créés

PRÊT À DÉMARRER
Fournis-moi le code backend complet.
```

---

### Conversation #2 : Frontend foundations

```markdown
MODULE : Architecture React + Layout + Routing

CONTEXTE :
Projet "Planning Formations CACES" (voir CAHIER-DES-CHARGES.md).

OBJECTIF DE CETTE CONVERSATION :
Développer le frontend complet avec :
- React + Vite
- TailwindCSS
- React Router
- Layout responsive (Header, Sidebar, Content)
- Authentification UI (connexion Google)
- Système de thèmes (dark/light)
- Service HTTP (Axios)

DÉPENDANCES :
✅ Backend opérationnel (conversation #1)
✅ API d'authentification fonctionnelle

INFORMATIONS UTILES :
- URL API backend : [à préciser]
- Client ID Google OAuth : [à préciser]

PRÊT À DÉMARRER
Fournis-moi le code frontend complet.
```

---

### Conversation #3 : Module Formations

```markdown
MODULE : Gestion des Formations (CRUD)

CONTEXTE :
Projet "Planning Formations CACES" (voir CAHIER-DES-CHARGES.md).
Voir section 1.1 du cahier des charges pour les spécifications détaillées.

OBJECTIF DE CETTE CONVERSATION :
Développer le module complet de gestion des formations :
- Backend : modèle Prisma + routes API CRUD
- Frontend : page admin + liste + formulaire création/édition
- Hiérarchie catégories/sous-catégories
- Sélection couleur par formation
- Durée standard modifiable

DÉPENDANCES :
✅ Backend opérationnel (conversation #1)
✅ Frontend opérationnel (conversation #2)
✅ Authentification fonctionnelle

LISTE DES FORMATIONS À INTÉGRER :
Voir section 1.1.a du cahier des charges (CACES, ACES, autres formations).

PRÊT À DÉMARRER
Fournis-moi le code complet pour ce module (backend + frontend).
```

---

### Conversation #4 : Module Lieux

```markdown
MODULE : Gestion des Lieux (CRUD)

CONTEXTE :
Projet "Planning Formations CACES" (voir CAHIER-DES-CHARGES.md).
Voir section 1.3 du cahier des charges.

OBJECTIF DE CETTE CONVERSATION :
Développer le module complet de gestion des lieux :
- Backend : modèle Prisma + routes API CRUD
- Frontend : page admin + liste + formulaire
- Auto-complétion adresse (Google Places API)
- Calcul automatique GPS
- Contact sur place (optionnel)

DÉPENDANCES :
✅ Backend et frontend opérationnels
✅ Module Formations terminé (conversation #3)

CLÉS API NÉCESSAIRES :
- [ ] Google Places API (à activer dans Google Cloud)
- [ ] Google Maps JavaScript API (pour carte)

PRÊT À DÉMARRER
Fournis-moi le code complet pour ce module.
```

---

### Conversation #5 : Module Formateurs

```markdown
MODULE : Gestion des Formateurs (CRUD)

CONTEXTE :
Projet "Planning Formations CACES" (voir CAHIER-DES-CHARGES.md).
Voir section 2 du cahier des charges.

OBJECTIF DE CETTE CONVERSATION :
Développer le module complet de gestion des formateurs :
- Backend : modèle Prisma (Formateur, Indisponibilité, Spécialité)
- Backend : routes API CRUD
- Frontend : page admin + liste + formulaire
- Gestion spécialités (multi-select formations)
- Gestion indisponibilités (périodes de congés)
- Sélection couleur formateur

DÉPENDANCES :
✅ Module Formations terminé (nécessaire pour les spécialités)
✅ Module Lieux terminé

PRÊT À DÉMARRER
Fournis-moi le code complet pour ce module.
```

---

### Conversation #6 : Module Sessions

```markdown
MODULE : Gestion des Sessions (CRUD)

CONTEXTE :
Projet "Planning Formations CACES" (voir CAHIER-DES-CHARGES.md).
Voir section 4 du cahier des charges.

OBJECTIF DE CETTE CONVERSATION :
Développer le module complet de gestion des sessions :
- Backend : modèle Prisma + routes API CRUD
- Backend : logique sessions multi-jours (événements liés)
- Backend : validations (conflits, indisponibilités, spécialités)
- Frontend : formulaire complet création/édition
- Frontend : affichage warnings temps réel
- Frontend : gestion modification série vs événement seul

DÉPENDANCES :
✅ Modules Formations, Lieux, Formateurs terminés

SPÉCIFICITÉS IMPORTANTES :
- Sessions multi-jours = N événements liés (1 par jour)
- Warnings non bloquants (conflits, indisponibilités, hors spécialité)
- Formateurs multiples par session (illimité)

PRÊT À DÉMARRER
Fournis-moi le code complet pour ce module.
```

---

### Conversation #7 : Calendrier vues 1-2

```markdown
MODULE : Interface Calendrier - Vues prioritaires

CONTEXTE :
Projet "Planning Formations CACES" (voir CAHIER-DES-CHARGES.md).
Voir section 5 du cahier des charges.

OBJECTIF DE CETTE CONVERSATION :
Développer les 2 vues calendrier prioritaires :
1. Vue formateur individuel (calendrier mensuel)
2. Vue semaine multi-formateurs (grille)

Avec :
- Codes couleurs (formation, formateur, statut)
- Navigation temporelle
- Modal détails session
- Actions selon rôle

DÉPENDANCES :
✅ Module Sessions terminé
✅ Données sessions disponibles en base

BIBLIOTHÈQUES SUGGÉRÉES :
- React Big Calendar
- FullCalendar
- Ou développement from scratch

PRÊT À DÉMARRER
Fournis-moi le code pour ces 2 vues.
```

---

### Conversation #8 : Calendrier vues 3-5 + Filtres

```markdown
MODULE : Interface Calendrier - Vues restantes + Filtres

CONTEXTE :
Projet "Planning Formations CACES" (voir CAHIER-DES-CHARGES.md).

OBJECTIF DE CETTE CONVERSATION :
Développer :
- Vue jour détaillé (timeline)
- Vue liste chronologique (tableau)
- Vue mois global
- Système de filtres complet (formateur, type, période)

DÉPENDANCES :
✅ Vues formateur individuel et semaine terminées (conversation #7)

PRÊT À DÉMARRER
Fournis-moi le code pour ces vues et les filtres.
```

---

### Conversation #9 : Permissions

```markdown
MODULE : Gestion des rôles et permissions

CONTEXTE :
Projet "Planning Formations CACES" (voir CAHIER-DES-CHARGES.md).
Voir section 2.2 et 9.1 du cahier des charges.

OBJECTIF DE CETTE CONVERSATION :
Implémenter le système de permissions :
- Backend : middleware vérification rôle
- Backend : routes protégées
- Frontend : UI adaptative selon rôle connecté
- Frontend : formulaire modification partielle (formateurs internes)

RÔLES :
1. Admin : accès complet
2. Formateur interne : consultation + modification limitée (lieu, commentaire)
3. Formateur intervenant (Phase 2) : consultation seule

DÉPENDANCES :
✅ Tous les modules CRUD terminés
✅ Interface calendrier terminée

PRÊT À DÉMARRER
Fournis-moi le code pour le système de permissions.
```

---

### Conversation #10 : Google Calendar

```markdown
MODULE : Synchronisation Google Calendar

CONTEXTE :
Projet "Planning Formations CACES" (voir CAHIER-DES-CHARGES.md).
Voir section 6 du cahier des charges.

OBJECTIF DE CETTE CONVERSATION :
Implémenter la synchronisation unidirectionnelle App → Google Calendar :
- Intégration Google Calendar API v3
- Service de synchronisation (création, maj, suppression événements)
- Format événement (titre, description, lieu)
- Gestion multi-agendas (1 par formateur)
- Cron job fallback (sync toutes les 15 min)

DÉPENDANCES :
✅ Module Sessions terminé
✅ API Google Calendar activée dans Google Cloud

INFORMATIONS GOOGLE CLOUD :
- Project ID : [à préciser]
- Credentials JSON : [à fournir]

PRÊT À DÉMARRER
Fournis-moi le code pour la synchronisation Google Calendar.
```

---

### Conversation #11 : Notifications

```markdown
MODULE : Système de notifications automatiques

CONTEXTE :
Projet "Planning Formations CACES" (voir CAHIER-DES-CHARGES.md).
Voir section 7 du cahier des charges.

OBJECTIF DE CETTE CONVERSATION :
Implémenter les 5 types de notifications :
1. Récapitulatif hebdomadaire (vendredi 16h)
2. Alerte modification J-7 (immédiate)
3. Rappel J-1 (veille session)
4. Alerte session sans formateur (immédiate)
5. Notification modification par formateur (immédiate)

Avec :
- Service email (SendGrid)
- Templates HTML responsive
- Cron jobs pour notifications planifiées
- Hooks pour notifications immédiates

DÉPENDANCES :
✅ Module Sessions terminé
✅ Compte SendGrid créé

INFORMATIONS SENDGRID :
- API Key : [à préciser]
- Email expéditeur vérifié : [à préciser]

PRÊT À DÉMARRER
Fournis-moi le code pour le système de notifications complet.
```

---

### Conversation #12 : Export & Stats

```markdown
MODULE : Export Excel + Archivage + Statistiques

CONTEXTE :
Projet "Planning Formations CACES" (voir CAHIER-DES-CHARGES.md).
Voir section 8 du cahier des charges.

OBJECTIF DE CETTE CONVERSATION :
Développer :
1. Export Excel (période personnalisable, 2 feuilles)
2. Système d'archivage (archiver/restaurer/supprimer)
3. Statistiques simples (répartition, occupation, top clients)

DÉPENDANCES :
✅ Module Sessions terminé
✅ Interface calendrier terminée

BIBLIOTHÈQUES SUGGÉRÉES :
- xlsx ou exceljs (export Excel)
- Chart.js ou Recharts (graphiques stats)

PRÊT À DÉMARRER
Fournis-moi le code pour export, archivage et statistiques.
```

---

### Conversation #13 : Polish & Debug

```markdown
MODULE : Optimisations finales + Tests + Documentation

CONTEXTE :
Projet "Planning Formations CACES" en phase de finalisation.

OBJECTIF DE CETTE CONVERSATION :
Finaliser l'application :
- Optimisations performances (lazy loading, cache, etc.)
- Gestion erreurs complète (messages clairs, états vides)
- Corrections bugs identifiés
- [Lister les bugs/améliorations à traiter]

BUGS/AMÉLIORATIONS IDENTIFIÉS :
- [Bug 1 : description]
- [Bug 2 : description]
- [Amélioration 1 : description]

DÉPENDANCES :
✅ Tous les modules développés

PRÊT À DÉMARRER
Aide-moi à finaliser et optimiser l'application.
```

---

## 🔧 INFORMATIONS À AVOIR SOUS LA MAIN

### Lors du développement backend

```markdown
INFORMATIONS BACKEND :
- Base de données : PostgreSQL sur Railway
- URL DB : [copier depuis Railway]
- Node.js version : 18+
- Port local : 5000 (ou autre)
```

### Lors du développement frontend

```markdown
INFORMATIONS FRONTEND :
- React version : 18+
- URL API backend (dev) : http://localhost:5000
- URL API backend (prod) : [copier depuis Railway]
- Google OAuth Client ID : [copier depuis Google Cloud]
```

### Lors de l'intégration Google

```markdown
INFORMATIONS GOOGLE CLOUD :
- Project ID : [votre project ID]
- OAuth Client ID : [votre client ID]
- OAuth Client Secret : [votre client secret]
- Calendar API activée : [x] Oui [ ] Non
- Places API activée : [x] Oui [ ] Non
- Maps JavaScript API activée : [x] Oui [ ] Non
```

### Lors de l'intégration SendGrid

```markdown
INFORMATIONS SENDGRID :
- API Key : [votre API key]
- Email expéditeur vérifié : [votre email]
- Nom expéditeur : Planning CACES
```

---

## ⚠️ CONSEILS POUR DES CONVERSATIONS EFFICACES

### ✅ À FAIRE

1. **Référencer les fichiers du projet** au lieu de copier-coller
   - ✅ "Voir section 4.1 du cahier des charges"
   - ❌ [Copier-coller toute la section]

2. **Lister les dépendances** pour que je sache ce qui est déjà fait
   - ✅ "Module Sessions terminé (conversation #6)"
   - ❌ Commencer sans contexte

3. **Être précis sur l'objectif** de la conversation
   - ✅ "Développer le CRUD sessions avec validations temps réel"
   - ❌ "Faire le truc des sessions"

4. **Signaler les problèmes rencontrés** immédiatement
   - ✅ "Erreur lors du déploiement Railway : [copier l'erreur]"
   - ❌ Attendre que ça se règle tout seul

5. **Tester avant de passer au module suivant**
   - ✅ Valider chaque module avant de continuer
   - ❌ Tout développer d'un coup sans tester

### ❌ À ÉVITER

1. **Conversations trop longues** (>40 messages)
   - Si limite atteinte : créer nouvelle conversation "Suite de [Titre]"

2. **Mélanger plusieurs modules** dans une conversation
   - 1 conversation = 1 objectif clair

3. **Ne pas mentionner les dépendances**
   - Je ne peux pas deviner ce qui est déjà fait

4. **Copier-coller des sections entières** du cahier des charges
   - Référencer les sections suffit

5. **Oublier de tester** avant de passer au suivant
   - Tester systématiquement chaque module

---

## 📂 FICHIERS À GARDER À JOUR

### AVANCEMENT.md (à créer dans docs/)

```markdown
# Suivi du développement

## ✅ Modules terminés
- [x] Setup initial (conversation #0)
- [x] Backend foundations (conversation #1)
- [x] Frontend foundations (conversation #2)

## 🚧 En cours
- [ ] Module Formations (conversation #3)

## 📅 À venir
- [ ] Module Lieux
- [ ] Module Formateurs
- ...

## 🐛 Bugs identifiés
- Bug 1 : [description]

## 💡 Améliorations futures
- Amélioration 1 : [description]
```

### DECISIONS.md (à créer dans docs/)

```markdown
# Journal des décisions

## 2026-04-XX : Choix de la bibliothèque calendrier
**Contexte :** Besoin d'un composant calendrier React  
**Options :** React Big Calendar vs FullCalendar vs Custom  
**Décision :** React Big Calendar  
**Raison :** Open source, flexible, bonne documentation

## 2026-04-XX : Hébergement backend
**Contexte :** Choix plateforme hébergement  
**Options :** Railway vs Render vs Heroku  
**Décision :** Railway  
**Raison :** 500h gratuites/mois, serveurs EU disponibles
```

---

## 🎯 CHECKLIST AVANT CHAQUE CONVERSATION

Avant de démarrer une nouvelle conversation, vérifiez :

- [ ] Le module précédent est terminé et testé
- [ ] J'ai uploadé les fichiers de référence dans le projet Claude
- [ ] Je connais l'objectif précis de cette conversation
- [ ] J'ai listé les dépendances (modules déjà faits)
- [ ] J'ai les informations techniques nécessaires (URLs, API keys, etc.)
- [ ] J'ai mis à jour AVANCEMENT.md

---

**Ce template est votre guide pour des conversations efficaces. Adaptez-le selon vos besoins !**
