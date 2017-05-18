/**
 *Write the FizzBuzz program described on page 38 of your text.
 */
    
//loop to iterate over 100
for (var i=1; i <= 100; i++){
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}