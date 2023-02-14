document.addEventListener("DOMContentLoaded", function() {


    let hexInput = document.getElementById("Hex");
  
    if (!hexInput) return;
  
    hexInput.oninput = function() {

      let hexInRaw = hexInput.value;

      

      let decimalNumber = parseInt(hexInRaw, 16);
      document.getElementById("decimalOut").innerHTML = "Decimal: " + decimalNumber;

      let binaryNumber = Number(decimalNumber).toString(2);
      document.getElementById("binaryOut").innerHTML = "Binary: " + binaryNumber;

      let octalNumber = Number(decimalNumber).toString(8);
      document.getElementById("octalOut").innerHTML = "Octal: " + octalNumber;

    };
  });
  
