document.addEventListener("DOMContentLoaded", function() {


    let decimalInput = document.getElementById("Decimal");
  
    if (!decimalInput) return;
  
    decimalInput.oninput = function() {

      let decimalInRaw = decimalInput.value;
  
      if (isNaN(decimalInRaw) == true) {

        window.alert("Enter some numbers");

      } else if (isNaN(decimalInRaw) == false) {
        
        let decimalNumber = parseInt(decimalInRaw);

        let binaryNumber = Number(decimalNumber).toString(2);
        document.getElementById("binaryOut").innerHTML = binaryNumber;

        let octalNumber = Number(decimalNumber).toString(8);
        document.getElementById("octalOut").innerHTML = octalNumber;

        let hexNumber = Number(decimalNumber).toString(16);
        document.getElementById("hexOut").innerHTML = hexNumber;

      }
    };
  });
  