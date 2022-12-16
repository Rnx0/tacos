
function calculateTotal() {
    var radio1 = document.querySelectorAll('input[type="radio"]');

    var total = 0;

    for (var i = 0; i < radio1.length; i++) {

      var radio = radio1[i];

    
      if (radio.checked) {
        total += parseInt(radio.value);
      }
    }

    document.getElementById("total").innerHTML = total;
  }