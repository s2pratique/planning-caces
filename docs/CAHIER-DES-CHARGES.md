# 📋 CAHIER DES CHARGES FONCTIONNEL
## Application de gestion du planning - Centre de formation CACES

**Version :** 1.0  
**Date :** Avril 2026  
**Statut :** Validé

---

## 🎯 VISION GLOBALE DU PROJET

### Objectif
Remplacer le fichier Excel Dropbox par une application web centralisée pour gérer le planning des formations du centre CACES, avec :
- Visibilité claire pour tous les formateurs
- Centralisation des informations (actuellement éparpillées)
- Élimination des conflits de version
- Notifications automatiques
- Synchronisation Google Calendar

### Problèmes actuels résolus
1. ✅ **Visibilité complexe** → Interface calendrier claire avec vues multiples
2. ✅ **Conflits de version** → Base de données centralisée, mises à jour temps réel
3. ✅ **Informations éparpillées** → Toutes les infos dans une seule fiche session

### Utilisateurs
- **1 Admin** : gestion complète de l'application
- **4 Formateurs internes** : consultation + modification limitée
- **Formateurs intervenants** (Phase 2) : consultation seule

---

## 📊 ARCHITECTURE FONCTIONNELLE

### Modèle de données

```
FORMATIONS (Catalogue)
├── Catégorie principale (CACES, ACES, Travail en Hauteur, etc.)
├── Sous-catégorie (R482, R483, R484, R485, R486A, R487, R489, R490)
├── Durée standard (jours) - modifiable
├── Couleur d'affichage
└── Note : R485 et R489 peuvent être combinées

LIEUX
├── Nom du site
├── Adresse complète (rue, CP, ville)
├── Coordonnées GPS (auto-calculées)
└── Contact sur place (optionnel)

FORMATEURS
├── Nom/Prénom
├── Email (notifications)
├── Téléphone
├── Rôle (Admin / Formateur interne / Formateur intervenant)
├── Spécialités (formations qu'il peut animer)
├── Couleur d'affichage (pour bulle nom)
└── Périodes d'indisponibilité

SESSIONS
├── Date + Heure début/fin (8h30-16h30 par défaut)
├── Durée en jours
├── Type de formation (catégorie + sous-catégorie)
├── Statut (Confirmé / Option / Annulé)
├── Entreprise cliente (obligatoire)
├── Formateur(s) (optionnel, multi-sélection illimitée)
├── Lieu (optionnel, auto-complétion)
├── Contact client : nom, tél, email (optionnel)
├── Commentaire libre (optionnel)
└── Lien vers sessions liées (si multi-jours)
```

---

## 🔴 PHASE 1 : MVP (INDISPENSABLE)

### 1. GESTION DES FORMATIONS

#### 1.1 Catalogue de formations (Admin uniquement)

**Liste des catégories et sous-catégories :**

**CACES :**
- R482, R483, R484, R485*, R486A, R487, R489*, R490

**ACES :**
- R482, R483, R484, R485*, R486A, R487, R489*, R490

**Autres formations :**
- Travail en Hauteur
- AIPR
- Hab Elec
- Échafaudage
- SST
- PRAP
- Gestes et Postures

*Note système : R485 et R489 peuvent être combinées sur une même formation*

**Champs par formation :**
- Durée standard en jours (modifiable)
- Couleur d'affichage (picker de couleur)

**Interface admin :**
- Liste hiérarchique : Catégorie → Sous-catégories
- Boutons : Ajouter / Modifier / Supprimer
- Formulaire modal pour création/édition

#### 1.2 Évolutivité
- Seul l'admin peut ajouter/modifier/supprimer des types de formations
- Possibilité d'ajouter de nouvelles catégories à l'avenir

---

### 2. GESTION DES LIEUX

#### 2.1 Base de données lieux (Admin uniquement)

**Lieux récurrents principaux :**
- Bénisse Maremne (INTER - formations CACES)
- Bayonne (INTER - formations CACES)
- Volume : 10-30 lieux différents par mois

**Champs par lieu :**
- Nom du site (obligatoire)
- Adresse complète : rue, code postal, ville (obligatoire)
- Coordonnées GPS (auto-calculées depuis adresse)
- Contact sur place : nom, téléphone (optionnel)

**Interface admin :**
- Liste des lieux avec recherche
- Boutons : Ajouter / Modifier / Supprimer
- Formulaire modal pour création/édition
- Auto-complétion lors de la saisie d'adresse (API Google Places)

#### 2.2 Utilisation dans les sessions
- Auto-complétion lors de la création de session
- Possibilité de saisir un nouveau lieu à la volée
- Lien vers Google Maps généré automatiquement

---

### 3. GESTION DES FORMATEURS

#### 3.1 Types de profils

**1. Admin :**
- Accès total à toutes les fonctionnalités
- CRUD sur formations, lieux, formateurs, sessions
- Accès aux exports et statistiques

**2. Formateur interne** (4 personnes actuellement) :
- Voir son propre planning
- Voir le planning global (tous formateurs)
- Peut ajouter/modifier sur ses propres sessions :
  - Lieu (si vide ou modification)
  - Commentaire
- **NE PEUT PAS** modifier :
  - Type de formation
  - Entreprise cliente
  - Date/Heure
  - Statut
  - Formateurs assignés

**3. Formateur intervenant** (Phase 2) :
- Consultation seule de son planning
- Aucune modification possible

#### 3.2 Fiche formateur

**Informations stockées :**
- Nom/Prénom (obligatoire)
- Email (obligatoire, pour notifications)
- Téléphone (obligatoire)
- Rôle (Admin / Formateur interne / Formateur intervenant)
- Spécialités : liste des formations qu'il peut animer (multi-sélection)
- Couleur d'affichage (pour bulle nom dans calendrier)
- Périodes d'indisponibilité (congés, absences)

**Interface admin :**
- Liste des formateurs avec filtres par rôle
- Boutons : Ajouter / Modifier / Supprimer
- Formulaire complet de création/édition

#### 3.3 Gestion des absences/indisponibilités

**Saisie :** Admin uniquement

**Affichage dans calendrier :**
- Zone grisée sur la période d'indisponibilité
- Mention "Congé" ou "Indisponible"

**Alertes :**
- ⚠️ Warning si tentative d'assigner un formateur sur période d'indisponibilité
- ⚠️ Warning (non bloquant) si formateur assigné à formation hors ses spécialités

---

### 4. GESTION DES SESSIONS

#### 4.1 Formulaire de création (Admin uniquement)

**Champs OBLIGATOIRES :**
- Date de début (date picker)
- Durée en jours (nombre, pré-rempli selon type formation choisi)
- Heure de début (time picker, défaut 8h30)
- Heure de fin (time picker, défaut 16h30)
- Type de formation (select hiérarchique : catégorie → sous-catégorie)
- Statut : 
  - ⚪ Confirmé (défaut)
  - 🟠 Option
  - 🔴 Annulé
- Entreprise cliente (texte libre)

**Champs OPTIONNELS :**
- Formateur(s) : multi-sélection, nombre illimité
- Lieu : auto-complétion depuis base lieux + possibilité saisie libre
- Contact client :
  - Nom
  - Téléphone
  - Email
- Commentaire libre (textarea)

#### 4.2 Gestion des sessions multi-jours

**Principe :**
- Si durée > 1 jour → création automatique de N événements liés (1 par jour consécutif)
- Raison : possibilité d'assigner des formateurs différents chaque jour

**Exemple :**
- SST sur 2 jours (lundi-mardi)
- → 2 événements créés : "Lundi" + "Mardi"
- → Lien entre les 2 événements (série)
- → Formateur peut être différent chaque jour

**Modification d'un événement d'une série :**
- Modal de choix :
  - "Modifier cet événement seul"
  - "Modifier toute la série"

**Affichage dans calendrier :**
- Indicateur visuel de liaison (icône chaîne, bordure spéciale)
- Tooltip : "Jour 1/2 - SST Entreprise X"

#### 4.3 Validations et alertes

**Lors de la création/modification :**

1. **Conflit d'agenda :**
   - ⚠️ Alerte si un formateur est déjà assigné ailleurs au même moment
   - Message : "⚠️ [Nom formateur] a déjà une session le [date] de [heure] à [heure]"
   - Non bloquant (admin peut valider quand même)

2. **Formateur indisponible :**
   - ⚠️ Alerte si formateur assigné sur période de congé
   - Message : "⚠️ [Nom formateur] est en congé du [date] au [date]"
   - Non bloquant

3. **Formateur hors spécialité :**
   - ⚠️ Warning si formateur assigné à formation non listée dans ses spécialités
   - Message : "⚠️ [Nom formateur] n'a pas [Type formation] dans ses spécialités"
   - Non bloquant

4. **Session sans formateur :**
   - ℹ️ Info si aucun formateur assigné
   - Notification envoyée à l'admin (voir section Notifications)

#### 4.4 Actions autorisées par rôle

**Admin :**
- ✅ Créer session
- ✅ Modifier tous les champs
- ✅ Supprimer session (définitif ou archivage)

**Formateur interne :**
- ❌ Créer session
- ✅ Modifier ses sessions : lieu, commentaire uniquement
- ❌ Supprimer session

**Formateur intervenant (Phase 2) :**
- ❌ Aucune modification

---

### 5. INTERFACE CALENDRIER

#### 5.1 Vues disponibles (par ordre de priorité)

**1️⃣ Vue formateur individuel** (Priorité 1)
- Calendrier mensuel d'un seul formateur
- Sélecteur de formateur en haut (dropdown)
- Navigation mois précédent/suivant
- Affichage sessions avec couleurs

**2️⃣ Vue semaine multi-formateurs** (Priorité 2)
- Grille : 7 jours en colonnes, formateurs en lignes
- Toutes les sessions de la semaine visibles d'un coup
- Navigation semaine précédente/suivante
- Vue la plus utilisée au quotidien

**3️⃣ Vue jour détaillée** (Priorité 3)
- Détail d'une journée pour tous les formateurs
- Timeline horaire (8h → 18h)
- Détails complets de chaque session
- Navigation jour précédent/suivant

**4️⃣ Vue liste chronologique** (Priorité 4)
- Liste des sessions par ordre chronologique
- Tableau avec colonnes : Date, Heure, Formation, Entreprise, Formateur(s), Lieu, Statut
- Tri par colonne
- Pagination

**5️⃣ Vue mois global** (Priorité 5)
- Calendrier mensuel avec toutes les sessions de tous les formateurs
- Vue dense, mini-cartes de sessions
- Navigation mois précédent/suivant

#### 5.2 Affichage d'une session sur le calendrier

**Informations visibles (sans clic) :**
- Type de formation
- Lieu complet
- Entreprise cliente
- Nom du formateur (dans bulle colorée)

**Codes couleurs :**
- **Fond de la carte** = Couleur du type de formation
- **Bulle nom formateur** = Couleur du formateur
- **Bordure de la carte** = Statut :
  - Pas de bordure = Confirmé
  - Bordure orange (3px) = Option
  - Bordure rouge (3px) = Annulé

**Exemple visuel :**
```
┌─────────────────────────────┐
│ 🟦 CACES R482               │ ← Fond bleu (couleur CACES)
│                             │
│ Entreprise Dupont           │
│ Bénisse Maremne             │
│                             │
│ 👤 Jean Martin              │ ← Bulle verte (couleur formateur)
└─────────────────────────────┘
      ↑
   Bordure orange = Option
```

#### 5.3 Interactions

**Clic simple sur session :**
- Ouverture modal avec détails complets :
  - Toutes les infos de la session
  - Lien Google Maps (si lieu renseigné)
  - Boutons (selon rôle) :
    - Admin : Modifier / Supprimer / Archiver
    - Formateur interne (si sa session) : Modifier (lieu/commentaire)

**Double-clic sur session :**
- Ouverture directe du formulaire d'édition (si autorisé)

**Clic sur zone vide du calendrier :**
- Admin : ouverture formulaire création session avec date pré-remplie
- Formateurs : rien (pas de droit de création)

#### 5.4 Filtres

**Filtres disponibles :**
- **Par formateur** : multi-sélection (afficher plusieurs formateurs)
- **Par type de formation** : multi-sélection
- **Par période** : du [date] au [date]

**Comportement :**
- Filtres cumulatifs (ET logique)
- Bouton "Réinitialiser les filtres"
- Conservation des filtres lors du changement de vue
- Indicateur visuel si filtres actifs

**Pas de fonction recherche** (Phase 3 potentielle)

---

### 6. SYNCHRONISATION GOOGLE CALENDAR

#### 6.1 Configuration initiale

**Création des agendas :**
- 4 agendas Google Calendar (1 par formateur interne)
- Nom suggeré : "[Nom formateur] - Planning CACES"
- Partage entre formateurs en lecture seule

**Connexion API :**
- Google Calendar API v3
- OAuth 2.0 pour authentification
- Configuration dans l'app web (admin)

#### 6.2 Synchronisation unidirectionnelle (App → Google Calendar)

**Principe :**
- L'application web est la source de vérité
- Google Calendar = copie lecture seule pour consultation mobile
- Modifications dans Google Calendar ne remontent PAS dans l'app

**Actions synchronisées :**
- ✅ Création session → Création événement Google Calendar
- ✅ Modification session → Mise à jour événement
- ✅ Suppression session → Suppression événement
- ✅ Changement formateur → Déplacement vers autre agenda

**Fréquence :**
- Temps réel si possible (webhook)
- Sinon : synchronisation toutes les 15 minutes

#### 6.3 Format événement Google Calendar

**Titre :**
```
[Type formation] - [Entreprise] - [Ville]
```
Exemples :
- "CACES R482 - Entreprise Dupont - Dax"
- "SST - Mairie de Bayonne - Bayonne"

**Description :**
```
📋 DÉTAILS DE LA FORMATION

👨‍🏫 Formateur(s) : [Nom(s)]
📍 Lieu complet : [Adresse complète]
📞 Contact client : [Nom - Tél - Email]
📝 Commentaire : [Commentaire libre]

🔗 Voir la fiche complète : [Lien vers l'app web]

---
Généré automatiquement par Planning CACES
```

**Lieu :**
- Adresse complète (pour lien Google Maps automatique)

**Date/Heure :**
- Selon session (heure début → heure fin)

**Rappels :**
- 1 jour avant (notification mobile)
- 1 heure avant (notification mobile)

---

### 7. NOTIFICATIONS AUTOMATIQUES

#### 7.1 Récapitulatif hebdomadaire

**Déclenchement :**
- Chaque vendredi à 16h00
- Automatique (cron job)

**Destinataires :**
- Tous les formateurs (admin + formateurs internes)
- 1 email par formateur

**Contenu :**
- **Objet :** "📅 Votre planning de la semaine prochaine"
- **Corps :**
  - Salutation personnalisée
  - Liste des sessions de la semaine suivante (lundi → dimanche)
  - Pour chaque session :
    - Date et heure
    - Type de formation
    - Entreprise
    - Lieu
    - Statut (badge visuel si Option)
  - Nombre total de jours de formation
  - Lien vers le planning web
  - Footer avec logo

**Format :**
- Email HTML responsive (lisible sur mobile)
- Couleurs selon charte graphique
- Template professionnel

**Cas particulier :**
- Si aucune session la semaine suivante : "Vous n'avez pas de session planifiée la semaine prochaine"

#### 7.2 Alertes modification J-7

**Déclenchement :**
- Immédiat dès modification d'une session dans les 7 jours suivants
- Toute modification compte (même mineure : commentaire, lieu, etc.)

**Destinataires :**
- Admin
- Formateur(s) concerné(s) par la session

**Contenu :**
- **Objet :** "⚠️ Modification de session : [Formation] - [Date]"
- **Corps :**
  - Nature de la modification
  - Ancien état → Nouvel état
  - Détails complets de la session
  - Lien vers la session dans l'app

**Exemples :**
- "Le lieu a été modifié : Bayonne → Dax"
- "Un commentaire a été ajouté"
- "La session a été annulée"

#### 7.3 Rappel J-1

**Déclenchement :**
- Veille de chaque session
- Envoi le soir vers 18h-20h (pour session du lendemain)

**Destinataires :**
- Formateur(s) assigné(s) à la session

**Contenu :**
- **Objet :** "📌 Rappel : Formation demain - [Type] - [Entreprise]"
- **Corps :**
  - Détails complets de la session
  - Heure et lieu avec lien Google Maps
  - Contact client
  - Commentaires éventuels
  - Checklist formateur (matériel, documents...)

#### 7.4 Alerte session sans formateur

**Déclenchement :**
- Immédiat lors de la création d'une session sans formateur assigné
- Ou lors de la suppression du dernier formateur d'une session

**Destinataires :**
- Admin uniquement

**Contenu :**
- **Objet :** "⚠️ Session sans formateur : [Formation] - [Date]"
- **Corps :**
  - Détails de la session
  - Rappel de l'assigner un formateur
  - Lien direct vers modification

#### 7.5 Notification modification par formateur

**Déclenchement :**
- Un formateur interne modifie une session (lieu ou commentaire)

**Destinataires :**
- Admin uniquement

**Contenu :**
- **Objet :** "ℹ️ Modification par [Nom formateur] : [Formation] - [Date]"
- **Corps :**
  - Nom du formateur qui a modifié
  - Nature de la modification
  - Ancien état → Nouvel état

---

### 8. EXPORT & ARCHIVAGE

#### 8.1 Export Excel

**Accès :** Admin uniquement

**Paramètres :**
- Sélection période : du [date] au [date]
- Option : inclure sessions archivées (checkbox)

**Contenu fichier .xlsx :**
- Feuille 1 : Liste des sessions
  - Colonnes : Date, Heure début, Heure fin, Durée (jours), Type formation, Sous-catégorie, Entreprise, Formateur(s), Lieu, Contact client (nom/tél/email), Statut, Commentaire
- Feuille 2 : Statistiques de la période
  - Nombre de sessions par type
  - Nombre de jours par formateur
  - Taux d'occupation

**Format :**
- Mise en forme conditionnelle (couleurs selon statut)
- Entêtes en gras
- Colonnes auto-dimensionnées
- Filtres activés

**Nom du fichier :**
```
Planning_CACES_[Date début]_[Date fin].xlsx
```
Exemple : `Planning_CACES_2026-01-01_2026-03-31.xlsx`

#### 8.2 Archivage sessions

**Principe :**
- Sessions passées restent dans la base (conservation illimitée)
- Possibilité de masquer les sessions archivées de la vue principale
- Accès via section dédiée "Archives"

**Actions :**
- **Archiver** : masque de la vue principale, conserve en base
- **Supprimer définitivement** : suppression base de données (après export fortement recommandé)

**Interface archives :**
- Liste des sessions archivées
- Filtres : année, type de formation, formateur
- Recherche
- Export Excel
- Bouton "Restaurer" (désarchiver)
- Bouton "Supprimer définitivement" (avec confirmation)

#### 8.3 Statistiques simples

**Accès :** Admin uniquement

**Indicateurs disponibles :**

1. **Répartition des formations par type**
   - Graphique camembert ou barres
   - Nombre de sessions par type de formation
   - Sur période sélectionnable

2. **Taux d'occupation par formateur**
   - Tableau avec colonnes : Formateur, Jours de formation, % occupation
   - Calcul : (jours de formation / jours ouvrés de la période) × 100
   - Sur période sélectionnable

3. **Top clients (entreprises)**
   - Tableau : Entreprise, Nombre de sessions
   - Tri par nombre décroissant
   - Sur période sélectionnable

**Pas de dashboard graphique complexe** (reporté en Phase 3)

---

### 9. AUTHENTIFICATION & SÉCURITÉ

#### 9.1 Connexion Google OAuth

**Principe :**
- Connexion via compte Gmail existant
- Pas de gestion de mots de passe
- Sécurisé par Google

**Flux de connexion :**
1. Utilisateur clique "Se connecter avec Google"
2. Redirection vers Google OAuth
3. Utilisateur autorise l'application
4. Redirection vers l'app avec token
5. Vérification email dans liste blanche
6. Création/récupération session utilisateur

**Liste blanche d'emails :**
- Gérée par admin dans l'app
- Seuls les emails autorisés peuvent se connecter
- Erreur sinon : "Votre email n'est pas autorisé à accéder à cette application"

#### 9.2 Gestion des comptes

**Création de comptes :**
- Admin crée les comptes formateurs dans l'interface
- Saisie : Email, Nom, Prénom, Rôle
- Email d'invitation envoyé automatiquement

**Email d'invitation :**
- Lien vers l'application
- Instructions de première connexion
- Expiration du lien : 7 jours

**Désactivation de compte :**
- Admin peut désactiver un formateur
- Le compte ne peut plus se connecter
- Données historiques conservées

#### 9.3 Permissions par rôle

**Admin :**
- CRUD formations, lieux, formateurs, sessions
- Gestion des comptes utilisateurs
- Accès exports et statistiques
- Réception de toutes les notifications

**Formateur interne :**
- Lecture de toutes les sessions (planning global)
- Modification limitée de ses sessions (lieu, commentaire)
- Réception notifications (récap hebdo, rappels J-1, alertes modifs)

**Formateur intervenant (Phase 2) :**
- Lecture de ses sessions uniquement
- Aucune modification
- Réception notifications (récap hebdo, rappels J-1)

#### 9.4 Sécurité des données

**Données sensibles :**
- Informations clients (nom entreprise, contacts)
- Données personnelles formateurs (email, téléphone)

**Mesures :**
- Connexions HTTPS uniquement
- Tokens JWT pour sessions
- Validation côté serveur de toutes les requêtes
- Protection CSRF
- Rate limiting (anti-spam)
- Logs d'activité (qui a fait quoi, quand)

**RGPD :**
- Mentions légales obligatoires
- Politique de confidentialité
- Possibilité d'export des données personnelles
- Possibilité de suppression de compte
- Hébergement préféré : EU (Railway propose serveurs EU)

---

### 10. DESIGN & ERGONOMIE

#### 10.1 Identité visuelle

**Style général :**
- Moderne, épuré, sobre
- Palette de couleurs cohérente
- Logo du centre intégré (à fournir)

**Modes :**
- Mode clair (défaut)
- Mode sombre
- Switch utilisateur (persisté en localStorage)

**Typographie :**
- Police moderne et lisible (ex: Inter, Roboto)
- Hiérarchie claire (titres, sous-titres, corps de texte)

**Icônes :**
- Bibliothèque cohérente (ex: Lucide React, Hero Icons)
- Utilisés avec parcimonie

#### 10.2 Responsive design

**Desktop (priorité Admin) :**
- Layout multi-colonnes
- Sidebar navigation
- Calendrier large
- Formulaires détaillés

**Tablet :**
- Layout adapté (1-2 colonnes)
- Navigation mobile (hamburger menu)
- Calendrier optimisé

**Mobile (priorité Formateurs) :**
- Layout 1 colonne
- Navigation bottom bar ou hamburger
- Calendrier simplifié (vue liste recommandée)
- Formulaires adaptés (inputs mobiles)
- Touch-friendly (boutons > 44px)

#### 10.3 Expérience utilisateur

**Performance :**
- Temps de chargement < 3s (connexion 3G)
- Lazy loading (images, composants)
- Optimisation images
- Cache navigateur

**Feedback utilisateur :**
- Loading spinners
- Messages de succès (toasts)
- Messages d'erreur clairs
- Confirmations actions critiques (suppression)

**Offline (limité) :**
- Mode consultation si perte connexion
- Indicateur de statut connexion
- Queue de synchronisation pour modifications

**Accessibilité (bases) :**
- Contraste couleurs suffisant
- Labels sur tous les inputs
- Navigation clavier possible
- Alt text sur images

---

## 🟠 PHASE 2 : AMÉLIORATIONS RAPIDES

### Formateurs intervenants

**Ajout du rôle "Formateur intervenant" :**
- Accès consultation seule (leur planning uniquement)
- Pas de modification possible
- Notifications : récapitulatif hebdo + rappel J-1
- Interface simplifiée (pas de boutons d'édition)

**Gestion admin :**
- Ajout de formateurs intervenants dans l'interface
- Assignation sur sessions
- Couleur d'affichage

---

## 🟢 PHASE 3 : ÉVOLUTIONS FUTURES

**À prioriser après tests utilisateurs et retours :**

### Fonctionnalités potentielles

**Recherche & Filtrage avancés :**
- Barre de recherche globale
- Recherche par entreprise, lieu, commentaire
- Filtres multiples combinés

**Synchronisation bidirectionnelle Google Calendar :**
- Modifications dans Google Calendar remontent dans l'app
- Gestion des conflits
- Plus complexe techniquement

**Dashboard statistiques avancées :**
- Graphiques interactifs
- Prévisionnel de charge
- Chiffre d'affaires (si tarifs renseignés)
- Export PDF rapports

**Gestion stagiaires :**
- Liste nominative par session
- Émargement numérique
- Attestations automatiques

**Fonctionnalités commerciales :**
- Gestion devis
- Facturation
- Suivi paiements

**Intégrations :**
- CRM (export contacts clients)
- Comptabilité (export factures)
- Signature électronique

**Mobile app native :**
- PWA (Progressive Web App)
- Notifications push natives
- Mode offline complet

**Gestion matériel :**
- Inventaire matériel pédagogique
- Réservation matériel par session
- Alertes maintenance

---

## 📋 RÉCAPITULATIF TECHNIQUE

### Stack technique

**Frontend :**
- React 18+
- Vite (build tool)
- React Router (routing)
- TailwindCSS (styling)
- Axios (HTTP client)
- React Query (data fetching)
- Date-fns (manipulation dates)
- React Big Calendar (composant calendrier)

**Backend :**
- Node.js 18+
- Express.js (framework web)
- PostgreSQL (base de données)
- Prisma (ORM)
- Passport.js (authentification)
- Node-cron (tâches planifiées)
- Nodemailer (emails)

**Services tiers :**
- Google OAuth (authentification)
- Google Calendar API (synchronisation)
- SendGrid (envoi emails - gratuit jusqu'à 100/jour)
- Google Maps API (géolocalisation, auto-complétion adresses)

**Hébergement :**
- GitHub (code source)
- Vercel (frontend, gratuit)
- Railway (backend + DB, 500h/mois gratuit avec optimisation)

### Contraintes techniques

**Navigateurs supportés :**
- Chrome/Edge (dernières versions)
- Safari (dernières versions)
- Firefox (dernières versions)

**Systèmes d'exploitation :**
- Windows 10+
- macOS (toutes versions récentes)
- iOS/Android (mobile)

**Connexion :**
- Fonctionnement optimal : connexion stable
- Dégradation acceptable : connexion instable (mode consultation offline)

---

## ✅ PROCHAINES ÉTAPES

1. **Validation finale de ce cahier des charges**
2. **Création du projet Claude** avec upload de ce fichier
3. **Création repository GitHub**
4. **Configuration environnement de développement**
5. **Développement Phase 1 module par module**
6. **Tests internes**
7. **Tests utilisateurs (formateurs)**
8. **Mise en production**
9. **Formation utilisateurs**
10. **Monitoring et ajustements**

---

**Document vivant - sera mis à jour selon les retours et décisions en cours de développement**
