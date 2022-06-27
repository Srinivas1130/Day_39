let randomNum = Math. floor((Math. random() * 10 ) % 6) + 1;
let result = new Map();
result.set(1,randomNum);
for(let [key, value] of result)
console.log(key+" "+value);