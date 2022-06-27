const randomNum = new Array();
for(i=1; i<=10; i++){
    let num = Math.floor(Math.random() * 999) + 100;
    randomNum.push(num);
}
console.log(randomNum);