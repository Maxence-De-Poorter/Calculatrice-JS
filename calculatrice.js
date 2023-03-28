class Calculator {
  set(nb) {
    const calcScreenEqual = document.getElementById('calcScreenEqual');
    const calcScreenResult = document.getElementById('calcScreenResult');
    calcScreenEqual.value += nb;
  }

  equal() {
    const expression = document.getElementById('calcScreenEqual').value;
    const isCalculable = /^[\d+\-*/().\s]+$/.test(expression); // Vérifie si l'expression contient uniquement des caractères autorisés

    if (isCalculable) {
      try {
        const result = eval(expression);
        document.getElementById('calcScreenResult').value = result;
      } catch (error) {
        document.getElementById('calcScreenResult').value = 'Erreur';
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