//Fichier contenant toutes les fonctions nécessaires aux fonctionnement de la calculatrice

//Fonction permettant d'afficher le nombre sur l'écran de la calculatrice
function set(nb) {
    document.getElementById('calcScreenEqual').value += nb;
}

//Fonction permettant d'afficher le résulat sur l'écran de la calculatrice
function equal(){
    document.getElementById('calcScreenResult').value = eval(document.getElementById('calcScreenEqual').value);
}

//Fonction permettant de supprimer le contenu des écrans de la calculatrice
function clr(){
    document.getElementById('calcScreenEqual').value = "";
    document.getElementById('calcScreenResult').value = "";
}

//Fonction permettant de supprimer le dernier caractère de l'écran de la calculatrice
function del(){
    document.getElementById('calcScreenEqual').value = document.getElementById('calcScreenEqual').value.slice(0, -1);
}