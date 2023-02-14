document.addEventListener("DOMContentLoaded", function() {


    let binaryInput = document.getElementById("Binary");
  
    if (!binaryInput) return;
  
    binaryInput.oninput = function() {

      let binaryInRaw = binaryInput.value;
  
      if (isNaN(binaryInRaw) == true) {

        window.alert("Enter some numbers");

      } else if (isNaN(binaryInRaw) == false) {
        
        let binaryNumber = parseInt(binaryInRaw);

        if (isNaN(binaryNumber)) {
          binaryNumber = 0;
        }

        let decimalNumber = parseInt(binaryNumber, 2);
        document.getElementById("decimalOut").innerHTML = "Decimal: " + decimalNumber;

        let octalNumber = Number(decimalNumber).toString(8);
        document.getElementById("octalOut").innerHTML = "Octal: " + octalNumber;

        let hexNumber = Number(decimalNumber).toString(16);
        document.getElementById("hexOut").innerHTML = "Hexadecimal: " + hexNumber;

      }
    };
  });
  
