class Calculator {
  // Constructeur de la classe Calculator
  constructor() {
    var firstCharacter;
    var equalDate;
  }

  // Méthodes de la classe Calculator
  // Ajoute le nombre au champ de saisie
  set(nb) {
    if(!document.getElementById('calcScreenEqual').value) {
      document.getElementById('calcScreenResult').value = "";
      this.firstCharacter=new Date();
    }
    const calcScreenEqual = document.getElementById('calcScreenEqual');
    const calcScreenResult = document.getElementById('calcScreenResult');
    calcScreenEqual.value += nb;
  }

  // Ajoute l'opérateur au champ de saisie
  equal() {
    this.equalDate = new Date();
    const expression = document.getElementById('calcScreenEqual').value;
      try {
        // Calcul de l'expression et affichage du résultat
        const result = eval(expression);
        document.getElementById('calcScreenResult').value = result;
        document.getElementById('calcScreenEqual').value = '';

        //Envoi de la requête au serveur
        let temp=this.equalDate - this.firstCharacter;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/valide', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
          "timeTakenMs": temp,
        }));

        //Réception de la réponse du serveur
        xhr.onreadystatechange = function () {
          console.log(xhr.responseText)
        };

        //Envoi de la requête au serveur
        const xhr2 = new XMLHttpRequest();
        xhr2.open('GET', 'http://localhost:3000/valide', true);
        xhr2.setRequestHeader('Content-Type', 'application/json');
        xhr2.send();

        //Réception de la réponse du serveur
        xhr2.onreadystatechange = function () {
          console.log(xhr2.responseText)
        };
      }catch (error) {
        document.getElementById('calcScreenResult').value = 'Erreur';
        document.getElementById('calcScreenEqual').value = '';

        //Envoi de la requête au serveur
        const xhr4 = new XMLHttpRequest();
        xhr4.open('GET', 'http://localhost:3000/invalide', true);
        xhr4.setRequestHeader('Content-Type', 'application/json');
        xhr4.send();
        //Réception de la réponse du serveur
        xhr4.onreadystatechange = function () {
          console.log(xhr4.responseText)
        };
        
        //Envoi de la requête au serveur
        const xhr3 = new XMLHttpRequest();
        xhr3.open('POST', 'http://localhost:3000/invalide', true);
        xhr3.setRequestHeader('Content-Type', 'application/json');
        xhr3.send();
        //Réception de la réponse du serveur
        xhr3.onreadystatechange = function () {
          console.log(xhr3.responseText)
        };

        
    }
  }

  // Efface le champ de saisie
  clr() {
    document.getElementById('calcScreenEqual').value = "";
    document.getElementById('calcScreenResult').value = "";
  }

  // Efface le dernier caractère du champ de saisie
  del() {
    document.getElementById('calcScreenEqual').value = document.getElementById('calcScreenEqual').value.slice(0, -1);
  }
}

// Création d'une instance de la classe Calculator
const calc = new Calculator();