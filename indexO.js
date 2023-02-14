document.addEventListener("DOMContentLoaded", function() {


    let octalInput = document.getElementById("Octal");
  
    if (!octalInput) return;
  
    octalInput.oninput = function() {

      let octalInRaw = octalInput.value;
  
      if (isNaN(octalInRaw) == true) {

        window.alert("Enter some numbers");

      } else if (isNaN(octalInRaw) == false) {
        
        let octalNumber = parseInt(octalInRaw);

        if(isNaN(octalNumber)) {
          octalNumber = 0;
        }

        let decimalNumber = parseInt(octalNumber, 8);
        document.getElementById("decimalOut").innerHTML = "Decimal: " + decimalNumber;

        let binaryNumber = Number(decimalNumber).toString(2);
        document.getElementById("binaryOut").innerHTML = "Binary: " + binaryNumber;

        let hexNumber = Number(decimalNumber).toString(16);
        document.getElementById("hexOut").innerHTML = "Hexadecimal: " + hexNumber;

      }
    };
  });
  
