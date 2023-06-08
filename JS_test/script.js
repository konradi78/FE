function submitNumbers() {
    var inputElement1 = document.getElementById("inputNumber1");
    var inputElement2 = document.getElementById("inputNumber2");
    var outputElement = document.getElementById("outputText");
    
    var number1 = inputElement1.valueAsNumber;
    var number2 = inputElement2.valueAsNumber;
    var sum = number1 - number1 * (number2 / 100);
    
    outputElement.textContent = "Цена товара со скидкой: " + sum + " $";
  }