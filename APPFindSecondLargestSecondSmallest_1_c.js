const randomNum = new Array();
for(i=1; i<=10; i++){
    let num = Math.floor(Math.random() * 999) + 100;
    randomNum.push(num);
}
console.log(randomNum);

    let max = Math.max.apply(null, randomNum); // get the max of the array
    randomNum.splice(randomNum.indexOf(max), 1); // remove max from the array
    let secondLargest = Math.max.apply(null, randomNum); // get the 2nd max
    console.log("Second Largest Number is : "+secondLargest);

    let min = Math.min.apply(null, randomNum); // get the max of the array
    randomNum.splice(randomNum.indexOf(min), 1); // remove max from the array
    let secondSmallest = Math.min.apply(null, randomNum); // get the 2nd max
    console.log("Second Smallest Number is : "+secondSmallest);