function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function deleteChar() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function inputValue(val) {
    const display = document.getElementById("display");
    display.value += val;
  }
  
  function calculate() {
    const display = document.getElementById("display");
    try {
      display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch {
      display.value = "Error";
    }
  }
  