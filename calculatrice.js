//Fichier contenant toutes les fonctions nécessaires aux fonctionnement de la calculatrice

function set(nb) {
    document.getElementById('calcScreenEqual').value += nb;
}

function equal(){
    document.getElementById('calcScreenResult').value = eval(document.getElementById('calcScreenEqual').value);
}

function clr(){
    document.getElementById('calcScreenEqual').value = "";
    document.getElementById('calcScreenResult').value = "";
}

function del(){
    document.getElementById('calcScreenEqual').value = document.getElementById('calcScreenEqual').value.slice(0, -1);
}