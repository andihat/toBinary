document.addEventListener("DOMContentLoaded", function() {


    let binaryInput = document.getElementById("Binary");
  
    if (!binaryInput) return;
  
    binaryInput.oninput = function() {

      let binaryInRaw = binaryInput.value;
  
      if (isNaN(binaryInRaw) == true) {

        window.alert("Enter some numbers");

      } else if (isNaN(binaryInRaw) == false) {
        
        let binaryNumber = parseInt(binaryInRaw);

        let decimalNumber = parseInt(binaryNumber, 2);
        document.getElementById("decimalOut").innerHTML = decimalNumber;

        let octalNumber = Number(decimalNumber).toString(8);
        document.getElementById("octalOut").innerHTML = octalNumber;

        let hexNumber = Number(decimalNumber).toString(16);
        document.getElementById("hexOut").innerHTML = hexNumber;

      }
    };
  });
  