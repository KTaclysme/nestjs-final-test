# Évaluation finale [énoncé]
Pour ce test final vous allez être évalués sur votre maîtrise du framework NestJS. Ce projet, qui est une TodoList et qu'il vous faudra dupliquer (fork), contient un certain nombre de tests automatisés. Chacun d'entre eux couvre une fonctionnalité spécifique : création d'un utilisateur, création d'une tâche, vérification que le serveur renvoie une erreur dans tel ou tel cas etc.

🎯 **Votre objectif est simple :** faire passer tous ces tests en implémentant vous-mêmes ces fonctionnalités.

## Critères
Avant de rendre votre projet, vous devez vous assurer d'avoir respecté **4 critères obligatoires** :

### 🚀 Le projet fonctionne
* aucune erreur non gérée n'est jetée au runtime
* aucune erreur non gérée n'est jetée au compile time

| Contexte | Barème               |
| ------------- | -------------------- |
| Erreur au runtime       | -2 pts par erreur    |
| Erreur au compile time  | 0 immédiat           |


### 💾 Une BDD est utilisée
* une base de données relationnelle ou noSQL est utilisée
* un ORM est configuré dans le `DatabaseModule` et est utilisé

| Contexte | Barème    |
| ------------- | -------------------- |
| Pas de BDD    | -7 pts               |
| ORM différent de TypeORM et Mongoose | +2 pts |

### 🧹 Le code est clean
Votre code se doit d'être propre, compréhensible et convenablement segmenté.

| Contexte | Barème    |
| ------------- | -------------------- |
| les classes, méthodes, variables etc. sont mal nommées | -2 pts |
| le code contient des commentaires jugés inutiles | -2 pts |
| les contrôleurs contiennent autre chose que de la logique de validation/HTTP | -4 pts |
| les services contiennent autre chose que de la logique métier | -4 pts |

### 🚧 Pas de sur-configuration
Assurez-vous que je n'ai **aucune configuration supplémentaire à faire**, si ce n'est :

- d'installer les `node_modules` avec `npm ci`
- de lancer les tests avec le script npm approprié
- de lancer votre serveur avec le script npm approprié

| Contexte | Barème               |
| ------------- | -------------------- |
| `npm ci` ne fonctionne pas      | 0 immédiat   |
| le projet nécessite la moindre configuration supplémentaire | 0 immédiat |
| le script npm de lancement des tests n'est pas indiqué dans le readme  | -5 pts |
| le script npm de lancement du serveur n'est pas indiqué dans le readme  | -5 pts |

## Setup
### 🏗️ Initialisation
1. Clonez le repository
2. Installez ses dépendances en utilisant la commande `npm ci`

### 💾 Base de données
* PostgreSQL, pour du relationnel

Cela vous permet à vous (et à moi) de ne pas avoir à les installer sur nos machines. Pour pouvoir utiliser ces SGBD contenairisés :
1. Installez [Docker Desktop](https://www.docker.com/products/docker-desktop/) sur votre machine
2. Lancez-le
3. Lorsque vous voudrez lancer votre serveur, utilisez le script npm de votre choix : `npm run start:postgres` (ces scripts démarrent une base de données, puis lancent le serveur en watch mode)

### ORM utilisé
* [Sequelize](https://docs.nestjs.com/techniques/database#sequelize-integration)

### 🧪 Tests
Les tests utilisés pour vous noter sont localisés dans le dossier `test`. Considérez-les comme les spécifications du projet, vous n'aurez d'autre choix que de les respecter à la lettre.

Pour lancer ces tests, utilisez le script npm : `npm run test:e2e:postgres` (ces scripts démarrent une base de données, puis lancent les tests e2e).
