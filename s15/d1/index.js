console.log("Hello World");

    function addNumbers(num1,num2){
    let addition = num1 + num2
    console.log("Displayed sum of " + num1 + " and " + num2)
    let sum = num1 + num2;
    console.log(sum);
}

    addNumbers(5,15);

    function subtractNumbers(num1,num2){
    let subtraction = num1 - num2
    console.log("Displayed difference of " + num1 + " and " + num2)
    let difference = num1 - num2;
    console.log(difference);
    }

    subtractNumbers(20,5);

    function multiplyNumbers(num1,num2){
        return num1*num2;
    }
    let product = multiplyNumbers(50, 10);
    console.log("Displayed product of 50 and 10: ");
    console.log(product);

    
    function quotNum(numG, numH){
        return numG / numH;
    }

    let quotient = quotNum(50, 10);
    console.log("Displayed quotient of 50 and 10: ");
    console.log(quotient);


    function circArea(numI, numJ, numK){
        return (numI * numJ) * numK;
    }

    let circumference = circArea(15, 3.1416, 15);
    console.log("The result of getting the area of a circle with 15 radius: ");
    console.log(circumference);

    
    function aveNum(numL, numM, numN, numO, numP){
        return (numL + numM + numN + numO) / numP;
    }

    let average = aveNum(20, 40, 60, 80 , 4);
    console.log("The average of 20, 40, 60 and 80: ");
    console.log(average);

    function actualScore(score, total){
        return score / total * 100;
        }

    let percentScore = actualScore(38, 50)
    let passingScore = 75;
    console.log("Is 38/50 a passing score?")
    console.log(percentScore > passingScore)