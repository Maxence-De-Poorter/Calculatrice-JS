class Calculator {
  constructor() {
    var firstCharacter;
    var equalDate;
  }

  set(nb) {
    if(!document.getElementById('calcScreenEqual').value) {
      document.getElementById('calcScreenResult').value = "";

      this.firstCharacter=new Date();
    }
    const calcScreenEqual = document.getElementById('calcScreenEqual');
    const calcScreenResult = document.getElementById('calcScreenResult');
    calcScreenEqual.value += nb;
  }

  equal() {
    this.equalDate = new Date();
    const expression = document.getElementById('calcScreenEqual').value;
    const isCalculable = /^[\d+\-*/().\s]+$/.test(expression); // Vérifie si l'expression contient uniquement des caractères autorisés

    if (isCalculable) {
      try {
        const result = eval(expression);
        document.getElementById('calcScreenResult').value = result;
        document.getElementById('calcScreenEqual').value = '';
        console.log(this.equalDate-this.firstCharacter, "millisecondes");
      } catch (error) {
        document.getElementById('calcScreenResult').value = 'Erreur';
        document.getElementById('calcScreenEqual').value = '';
      }
    } else {
      document.getElementById('calcScreenResult').value = 'Erreur';
    }
  }

  clr() {
    document.getElementById('calcScreenEqual').value = "";
    document.getElementById('calcScreenResult').value = "";
  }

  del() {
    document.getElementById('calcScreenEqual').value = document.getElementById('calcScreenEqual').value.slice(0, -1);
  }
}

const calc = new Calculator();