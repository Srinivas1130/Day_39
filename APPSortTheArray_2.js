const randomNum = new Array();
for(i=1; i<=10; i++){
    let num = Math.floor(Math.random() * 999) + 100;
    randomNum.push(num);
}
console.log(randomNum.sort());

    let max = Math.max.apply(null, randomNum);
    randomNum.splice(randomNum.indexOf(max), 1); 
    let secondLargest = Math.max.apply(null, randomNum);
    console.log("Second Largest Number is : "+secondLargest);

    let min = Math.min.apply(null, randomNum); 
    randomNum.splice(randomNum.indexOf(min), 1);
    let secondSmallest = Math.min.apply(null, randomNum);
    console.log("Second Smallest Number is : "+secondSmallest);