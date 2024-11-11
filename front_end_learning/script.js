function findSecondMax() {
    // Get the values from the input fields
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
  
    // Store numbers in an array
    let numbers = [num1, num2, num3];
  
    // Sort the numbers in descending order and get the second maximum
    numbers.sort((a, b) => b - a);
    let secondMax = numbers[1];
  
    // Display the result
    document.getElementById("result").textContent = `The second maximum number is: ${secondMax}`;
  }
  