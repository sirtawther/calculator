let val = "12.......34"
let test = val.split(".")
test.splice(1,0,".").join("")
test1 = test.join("")

console.log(test1);

