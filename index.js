// FizzBuzz implementation
//function take prameter of n
//loop from 1 to n
//if number is multiple of 3 and 5, print FizzBuzz
//if number is multiple of 3, print Fizz
//if number is multiple of 5, print Buzz
//else print the number

//for (let i= 1, i<=n; i++) {
//    if (i % 3 === 0 && i % 5 === 0) {
//        console.log("FizzBuzz");
//    } else if (i % 3 === 0) {
//        console.log("Fizz");
//    } else if (i % 5 === 0) {
//        console.log("Buzz");
//    } else {
//        console.log(i);
//    }
//}

function checkFizzBuzz(n) {
    if (n <= 0) {
        console.log("Please enter a positive integer.");
        return;
    }
    let output = [];
    let outputDiv = document.getElementById('output');
    for (let i=1; i<=n; i++) {
        let fizzBuzz = i % 3 === 0 && i % 5 === 0;
        let fizz = i % 3 === 0;
        let buzz = i % 5 === 0;
        if (fizzBuzz) {
            output.push("FizzBuzz"); //push to output array

        } else if (fizz) {
            output.push("Fizz");

        } else if (buzz) {
            output.push("Buzz");
    
        } else {
            output.push(i);
        }
    }
    outputDiv.innerHTML = output.join(", <br>"); //they are separated by a line break and comma
}

//it can be changed to be numbers that the user gives. Than, it takes the input from the user
//then do a validation on the numbers, and check those numbers