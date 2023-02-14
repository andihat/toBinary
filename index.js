document.addEventListener("DOMContentLoaded", function() {


    let decimalInput = document.getElementById("Decimal");
  
    if (!decimalInput) return;
  
    decimalInput.oninput = function() {

      let decimalInRaw = decimalInput.value;
  
      if (isNaN(decimalInRaw) == true) {

        window.alert("Enter some numbers");

      } else if (isNaN(decimalInRaw) == false) {
        
        let decimalNumber = parseInt(decimalInRaw);
        
        if (isNaN(decimalNumber)) {
          decimalNumber = 0;
        }

        let binaryNumber = Number(decimalNumber).toString(2);
        document.getElementById("binaryOut").innerHTML = "Binary: " + binaryNumber;

        let octalNumber = Number(decimalNumber).toString(8);
        document.getElementById("octalOut").innerHTML = "Octal: " + octalNumber;

        let hexNumber = Number(decimalNumber).toString(16);
        document.getElementById("hexOut").innerHTML = "Hexadecimal: " + hexNumber;

      }
    };
  });
  
