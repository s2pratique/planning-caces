# 🔗 URLs de l'infrastructure

**Dernière mise à jour :** Avril 2026

---

## 🌐 URLs de production

### Frontend
- **URL publique :** https://planning-caces.vercel.app
- **Hébergement :** Vercel
- **Auto-déploiement :** Activé (push sur `main`)

### Backend API
- **URL publique :** https://planning-caces-production.up.railway.app
- **URL santé :** https://planning-caces-production.up.railway.app/health
- **Hébergement :** Railway
- **Auto-déploiement :** Activé (push sur `main`)

### Base de données
- **Type :** PostgreSQL
- **Hébergement :** Railway (service lié)
- **Accès :** Via backend uniquement

---

## 🛠️ Services externes (à configurer)

### Google Cloud Console
- **Project ID :** Planning CACES
- **Console :** https://console.cloud.google.com/

**APIs à activer :**
- [ ] Google OAuth 2.0
- [ ] Google Calendar API
- [ ] Google Places API
- [ ] Google Maps JavaScript API

### SendGrid
- [ ] Compte à créer
- [ ] Email expéditeur à vérifier

---

## 🔑 Variables d'environnement

### Backend (Railway)
