# Journal des décisions

Ce fichier trace toutes les décisions techniques et fonctionnelles importantes prises au cours du développement.

---

## 2026-04-25 : Démarrage du projet

**Contexte :** Remplacement du fichier Excel par application web  
**Décision :** Développer une application web custom  
**Alternatives considérées :** Notion, Trello, Airtable (payants ou trop limités)  
**Raison :** Besoin de fonctionnalités sur-mesure (notifications J-7, sync Google Calendar, permissions granulaires)

---

## 2026-04-25 : Choix de l'architecture

**Contexte :** Choix de la stack technique  
**Décision :** React (frontend) + Node.js (backend) + PostgreSQL (database)  
**Alternatives considérées :** Vue.js, Angular / Python Flask, Django / MySQL, MongoDB  
**Raison :** 
- React : écosystème riche, bien documenté, adapté au calendrier interactif
- Node.js : JavaScript full-stack, nombreuses bibliothèques pour Google APIs
- PostgreSQL : base relationnelle robuste, adapté aux relations complexes (sessions, formateurs, etc.)

---

## 2026-04-25 : Hébergement

**Contexte :** Choix plateforme d'hébergement  
**Décision :** Vercel (frontend) + Railway (backend + DB)  
**Alternatives considérées :** Netlify + Render, Heroku, AWS  
**Raison :** 
- Gratuit avec quotas suffisants (4 formateurs = faible trafic)
- Auto-déploiement depuis GitHub
- Railway offre serveurs EU (préférence RGPD)

---

## 2026-04-25 : Méthode de développement

**Contexte :** Besoin d'assistance au développement  
**Décision :** Développement assisté par Claude (Anthropic) via projet structuré  
**Raison :** 
- Développement module par module bien organisé
- Documentation automatique
- Coût 0€ vs développeur freelance (400-600€)
- Contrôle total sur le code généré

---

## 2026-04-25 : Authentification

**Contexte :** Choix méthode d'authentification  
**Décision :** Google OAuth  
**Alternatives considérées :** Login/mot de passe classique, Azure AD  
**Raison :** 
- Pas de gestion de mots de passe
- Sécurisé par Google
- Formateurs utilisent déjà Gmail

---

## À venir

Les décisions seront ajoutées au fur et à mesure du développement.
