Ce projet met en place un pipeline CI/CD complet pour une application Node.js, utilisant Docker pour la conteneurisation et Kubernetes (Kind) pour l'orchestration, le tout automatisé via GitHub Actions avec un runner self-hosted.
Technologies Utilisées
Application : Node.js
Conteneurisation : Docker
Orchestration : Kubernetes (Kind)
CI/CD : GitHub Actions
Runner : Self-hosted sur Windows
Architecture du Projet
1. Application Node.js
Application web simple
Port d'écoute : 3000
Endpoints :
/ : Hello World
2. Conteneurisation Docker
Image de base : node:14
Port exposé : 3000
Image publiée sur Docker Hub : ouldmahammed/hello-world-node
3. Orchestration Kubernetes
Cluster : Kind (Kubernetes in Docker)
Déploiement : 1 replica
Service : NodePort (30080)
4. Pipeline CI/CD
Déclencheur : Push sur la branche main
Runner : Self-hosted Windows
Étapes :
Checkout du code
Build de l'image Docker
Push vers Docker Hub
Déploiement sur Kind
État Actuel du Projet
Réalisations
✅ Configuration complète du pipeline CI/CD
✅ Installation du runner self-hosted
✅ Configuration de Docker et Kubernetes
✅ Création des fichiers de déploiement
Point de Blocage
❌ Le runner est installé mais n'exécute pas les jobs
Prochaines Étapes
Déblocage du Runner
Vérification des logs
Reconfiguration si nécessaire
Test de connectivité
Optimisations Prévues
Ajout de tests automatisés
Monitoring du déploiement
Gestion des secrets
