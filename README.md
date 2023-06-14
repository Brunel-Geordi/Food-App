# Food-App

## 1 - Cloner le repository git avec la commande 
```git clone https://github.com/Brunel-Geordi/Food-App.git```

## 2 - Installer les dependances
##### a - Ouvrir le dossier Food-App 
##### b - aller dans ```cd .\Backend\ ``` et faire ```npm i``` pour installer les dépendances necessaires pour le Back-End
#### c - repeter l'operation dans ```cd .\Frontend\ ```

## 3 - Mettre en place la base de données

#### Excécuté le fichier ```malewa.sql``` contenant la base de données
#### cheat : ```Clt + A``` ensuite ```Clt + Entrée```

## 4 - Connexion à la base données 

#### Modifier les valeurs de ```DB_USER``` et ```DB_PASSWORD``` selon votre server local sql ( ```DB_PORT``` aussi si besoin )
```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_NAME=malewa
```

## 5 - Lancer le serveur avec la commande 
##### Excécuter la commande ```npm run start:dev``` dans le dossier du BackEnd

#### 5' Changer les ```adresses ip``` de l'```api``` coté FrontEnd contenue dans le fichier ```\service\api.js``` en mettant l'addresse ip local du poste

## 6 - Lancer l'application
#### ⚠ Toute les etapes precédente sont obligatoire avant de pouvoir lancer l'appli
#### ```npm start``` à taper dans le dossier Front du projet

## NB :
#### La base de données contient déjà deux utilisateurs avec les identifiants de connexion suivante : 
#### Client : ```julina@dani.fr``` mdp:```azerty```
#### Admin : ```admin@admin.com```  mdp:```azerty```



