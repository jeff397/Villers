# 🏛️ Site Municipal de **\***

> Une vitrine moderne, performante et chaleureuse conçue pour les collectivités locales, développée en architecture **Jamstack** avec **React**, **Tailwind CSS** et **Decap CMS** (Headless).

Ce projet, initialement conçu pour la commune de \*\*\*\*, a été développé dans l'optique de moderniser la communication institutionnelle. Il propose une expérience utilisateur fluide, un design épuré, tout en offrant une autonomie totale à l'équipe municipale pour la gestion du contenu sans toucher au code.

---

[![Netlify Status](https://api.netlify.com/api/v1/badges/5c56a6d7-d5dc-452c-92ce-553e1ace7424/deploy-status)](https://app.netlify.com/projects/vitrine-mairie-react/deploys)

## 🚀 Fonctionnalités Clés

- **📰 Flux d'Actualités & Événements Dynamique :** Une grille moderne avec filtres par catégorie (Travaux, Événements, Vie Locale), badges de couleur, effets de survol fluides et alertes/flashs infos de dernière minute (ex: coupures d'eau, vigilances).
- **🤝 Module "Vie Solidaire" & Sociale :** Un espace chaleureux mettant en avant les actions de la commune (Jeunesse, Aînés, Solidarité). Conçu dans le respect strict du **RGPD** (utilisation de statistiques et de données agrégées, aucune donnée nominative sensible).
- **👶 Registre d'État Civil :** Section dédiée aux naissances, mariages et décès pour célébrer et consigner la vie du village de manière lisible.
- **⚙️ Back-Office Intégré (Headless) :** Configuration complète avec **Decap CMS** (anciennement Netlify CMS). La secrétaire ou les élus se connectent sur `/admin` pour rédiger, modifier ou supprimer du contenu. Chaque publication génère un commit Git automatique et un re-déploiement instantané.

---

## 🛠️ Stack Technique

- **Framework :** [React](https://react.dev/) (Vite)
- **Styling :** [Tailwind CSS](https://tailwindcss.com/) (Design responsive, typographie soignée, composants fluides)
- **Icônes :** [Lucide-React](https://lucide.dev/) (Visuels vectoriels modernes et légers)
- **Gestion de Contenu (CMS) :** [Decap CMS](https://decapcms.org/) (CMS Headless basé sur Git et des fichiers de données JSON)
- **Hébergement & Déploiement :** [Netlify](https://www.netlify.com/) (Intégration continue avec GitHub, gestion des routes et de l'authentification Identity / Git Gateway)

---

## 📁 Structure du Projet

```bash
├── public/
│   ├── admin/
│   │   ├── index.html       # Point d'entrée de l'interface d'administration
│   │   └── config.yml       # Configuration des collections et champs pour Decap CMS
│   └── _redirects           # Règle de routage Netlify pour éviter les erreurs 404 (React Router)
├── src/
│   ├── components/          # Composants réutilisables (Actualites, VieSolidaire, etc.)
│   ├── data/
│   │   └── actualites.json  # Fichier JSON mis à jour dynamiquement par le CMS Headless
│   ├── App.jsx              # Routage et structure principale
│   └── main.jsx
├── package.json
└── README.md

```

---

## ⚙️ Configuration & Installation Locale

Si vous souhaitez cloner ce projet et le faire tourner sur votre machine :

1. **Cloner le dépôt :**

```bash
git clone [https://github.com/jeff397/Villers.git](https://github.com/jeff397/Villers.git)
cd Villers

```

2. **Installer les dépendances :**

```bash
npm install

```

3. **Lancer le serveur de développement :**

```bash
npm run dev

```

Le site est accessible localement sur `http://localhost:5173`.

---

## 🌐 Déploiement en Production

Le site est configuré pour un déploiement optimal sur **Netlify** :

1. Connexion au dépôt GitHub sur l'interface Netlify.
2. Commande de build : `npm run build` | Dossier de sortie : `dist`.
3. Activation de **Netlify Identity** et du **Git Gateway** dans les réglages du site pour sécuriser l'accès au panneau `/admin`.

---

## ✉️ Contact & Prestations

Ce template est entièrement personnalisable et adaptable pour n'importe quelle autre municipalité, communauté de communes ou structure institutionnelle locale.

Pour toute demande de démonstration, de déploiement ou de contrat de maintenance web :

- **Développeur :** Monsieur DELMOTTE Jean-François
- **Profils :** Freelance Concepteur & Développeur Web Front-End
- **Email professionnel :** jeffdelmotte@gmail.com

```

```
