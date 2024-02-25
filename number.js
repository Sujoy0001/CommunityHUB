function populateNumbers() {
    var number1 = document.getElementById("number1");
    var number2 = document.getElementById("number2");
    var number3 = document.getElementById("number3");

    var num1 = 0;
    var num2 = 0;
    var num3 = 0;

    // Function to update h3 tag values
    function updateNumbers() {
      number1.textContent = num1;
      number2.textContent = num2;
      number3.textContent = num3;
    }

    // Interval to update the numbers
    var intervalId = setInterval(function() {
      updateNumbers();
      num1++;
      if (num1 > 4890) {
        clearInterval(intervalId);
      }
    }, 0);

    var intervalId2 = setInterval(function() {
      updateNumbers();
      num2++;
      if (num2 > 5390) {
        clearInterval(intervalId2);
      }
    }, 0);

    var intervalId3 = setInterval(function() {
      updateNumbers();
      num3++;
      if (num3 > 6582) {
        clearInterval(intervalId3);
      }
    }, 0);
  }

  // Call the function when the page loads
  window.onload = populateNumbers;