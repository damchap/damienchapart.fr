---
title: 'Guide du nouveau developpeur'
description: 'Apprenons à Developer des choses incroyable.'
navigation:
  title: 'Guide du nouveau developpeur'
  icon: 'octicon:project'
---

## Introduction

L'API Perfs N Zen repose sur l'outil t'intégration et de déploiement continue (Azure DevOps), nodejs avec exprese pour la création de l'API RESTFULL.


## Installation des IDE


### Visual studio code

Visual studio code est un IDE pour le developpement web, il est gratuit et open source. Il est disponible pour Windows, Linux et Mac.

Lien de téléchargement :
[https://code.visualstudio.com/](https://code.visualstudio.com/)



## Installation de NodeJs et express avec typescript

### NodeJs et npm

Nous avons besoin de NodeJs et de Npm pour faire fonctionner notre API. NodeJs est un environnement d'exécution pour JavaScript. Il est basé sur le moteur JavaScript V8 de Chrome et utilise un modèle d'exécution événementielle asynchrone, ce qui le rend léger et efficace. NodeJs utilise un modèle de gestionnaire de paquets appelé npm. npm est le gestionnaire de paquets officiel de Node.js. Il est utilisé pour installer des modules, des bibliothèques et des outils de ligne de commande.

Npm est fourni lors de l'installation de NodeJs.

Lien de téléchargement :
[https://nodejs.org/fr/download/](https://nodejs.org/fr/download/)

## Installation de Git 

### Git

Git est un logiciel de gestion de versions décentralisé. Il permet de gérer les versions de fichiers et de répertoires. Il est utilisé pour le développement de logiciels, mais aussi pour la gestion de documents, de sites web, de livres, etc.

Lien de téléchargement :
[https://git-scm.com/downloads](https://git-scm.com/downloads)

Sur le projet, nous n'utilisons pas git en ligne de commandes mais via l'outil
graphique integré à Visual Studio Code :
[https://code.visualstudio.com/docs/editor/versioncontrol](https://code.visualstudio.com/docs/editor/versioncontrol)

## Azure DevOps

### présentation

Azure DevOps est un outil d'intégration et de déploiement continu (CI/CD)
développé par Microsoft.

On peut y gérer :
- La gestion des dépôts Git
- La gestion du backlog et des sprints
- Le stockage des packages npm
- Les pipelines d'intégration et de déploiement continu

Le lien :
[https://dev.azure.com/itFactoryProject](https://dev.azure.com/itFactoryProject)

Il faudra demander les droits aux projets « PerfsNZen »

### Clonage des dépôts git
<!-- image -->


<img src="/img/perfs-n-zen-api/menu_Azure_Devops-4ddb5eb1-8eb7-4164-bacc-4d937d6fe5be.png" width="200" alt="menu_Azure_Devops.png">

1. Cliquer sur « Repos »
2. Sélectionner le dépôt que l'on souhaite cloner
3. Cliquer sur « Clone »  
4. Cliquer sur Copy clone URL to clipboard pour copier l'url dans le presse
    papier  
5. Ouvrir Visual Studio Code
6. Cliquer sur « Clone Repository »
7. Coller l'url dans le champ « Repository URL »
8. Cliquer sur « Clone »

## Faire tourner l'API en local

### Installation des dépendances

Pour installer les dépendances, il faut se placer dans le dossier de l'API
et lancer la commande suivante :

```bash
npm install
```

### Lancer l'application

Pour lancer l'application, taper la commande « npm run dev » dans le terminal
de Visual Studio Code.

```bash
npm run dev
```

### Tester l'API

Pour tester l'API, il faut utiliser un outil comme Postman ou Insomnia.

#### Postman

Postman est un outil de test d'API qui permet de tester les requêtes HTTP
et de voir les réponses.

Lien de téléchargement :
[https://www.getpostman.com/downloads/](https://www.getpostman.com/downloads/)
<!-- image -->

![postman.png](/img/perfs-n-zen-api/postman-dfa9c73c-3db4-4447-ac80-094d924f89b0.png)

#### Insomnia

Insomnia est un outil de test d'API qui permet de tester les requêtes HTTP
et de voir les réponses.

Lien de téléchargement :
[https://insomnia.rest/download/](https://insomnia.rest/download/)
<!-- image -->

![insomnia.png](/img/perfs-n-zen-api/insomnia-fe4ad9ad-71e8-4e9b-91ad-5fcebfe5ec3d.png)




