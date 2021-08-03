
function main() {
    let numbersInRange = [];
    let startNum = 442;
    let stopNum = 500;

    numbersInRange = ex1(startNum, stopNum);
    console.log(numbersInRange)
    ex1(5);

}

//ex 1: write a function in javascript that takes two integer parameter
function ex1(x1, x2) {

    let numberResult = []; //this will hold the numbers between twp values
    // check to see if the second parm is less than first, and if so return a -1
    if (x1 > x2) {
        return (-1);
    }
    //check x1 and x2 parameters and determine range between them
    let currentNum = x1; //5
    let finishNum = x2; //8
    // goes (where we start; rules for when to stop ; then how to increment)
    for (currentNum; currentNum <= finishNum; currentNum++) {
        //add numbers to some list
        numberResult.push(currentNum);

    }
    //return numbers in the range when im done
    return numberResult;

}

//ex 2:write a function that writes in console multi table ( 1 to 10)
function ex2() {
    // console.log(`Alternate approach to using nested loops`);
    //longer approach to using nested loops and arrays
    //loop through each number for multiplication
    for (let index = 1; index <= 10; index++) {
        // console.log(` outer loop is ${index}`);
        //need nested loop to do products for 1 - 10
        //now do an inner loop for 
        let productList = []; //create a new array to hold the product
        for (let pindex = 1; pindex <= 10; pindex++) {
        //    console.log(`Inner loop ${pindex}`);
            productList[pindex-1] = index * pindex;
        }

    }
        // for each product, add row to table
        let multiTableRow = `${index} ${index * 1} ${index * 2} ${index * 3} ${index * 4} ${index * 5} ${index * 6}`;
        console.log(multiTableRow);
}



//ex 3: 
// is says we need a function that takes
function ex3(someNum) {
    // loop starting at 1 and multiply by starting number until we reach
    for (let index = 1; index <= 10; index++) {
        console.log(`loop interation ${index * someNum}`);

    }


}

//ex 4:
let mulof23 = []; //we need to show these devices, create somewhere to put the results in an empty

let resultsOfMultiples = 0; //start at 0 so we can add it to something. it is holding a value.

for (let index = 0; index < 500; index++) //we need to iterate through a certain amount of times
{ // we need an i statement to set the conditional
    if (index % 23 == 0 ) //this is running the modular, if it returns a 0, it should be added to the array
    {
        mulof23.push(index);//push this to the multiple of 23
        resultsOfMultiples += index;// += shorthand for 'result of index' PLUS 'index'

    }
    


}
console.log(mulof23);
console.log(resultsOfMultiples);

//ex 5:





//POE
// ex1();
// ex2();
main();
