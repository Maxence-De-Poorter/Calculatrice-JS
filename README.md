# Calculatrice JS
 Calculatrice web en JS

La BDD ne semble pas se créer toute seules lors de l'utilisation sur un autre ordinateur.

Il faut donc créer à la main la BDD, j'ai un schéma calculatrice avec 2 tables :

valide:
id:int Primary, Not Null, Auto increment
timeTakenMs:int

invalide:
id:int Primary, Not Null, Auto increment
created_at:datetime, defaut:CURRENT_TIMESTAMP
