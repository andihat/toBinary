document.addEventListener("DOMContentLoaded", function() {


    let octalInput = document.getElementById("Octal");
  
    if (!octalInput) return;
  
    octalInput.oninput = function() {

      let octalInRaw = octalInput.value;
  
      if (isNaN(octalInRaw) == true) {

        window.alert("Enter some numbers");

      } else if (isNaN(octalInRaw) == false) {
        
        let octalNumber = parseInt(octalInRaw);

        let decimalNumber = parseInt(octalNumber, 8);
        document.getElementById("decimalOut").innerHTML = decimalNumber;

        let binaryNumber = Number(decimalNumber).toString(2);
        document.getElementById("binaryOut").innerHTML = binaryNumber;

        let hexNumber = Number(decimalNumber).toString(16);
        document.getElementById("hexOut").innerHTML = hexNumber;

      }
    };
  });
  