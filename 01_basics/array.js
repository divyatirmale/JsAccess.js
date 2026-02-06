//array

const number = [ 1,2,3,4,5]
console.log(number);

const myhero = ["div","man","new"]
console.log(myhero);

const newarray = new Array ("parts of computer","details")
console.log(newarray);
console.log(newarray[1]);//details
console.log(newarray[0]);

newarray.push(4)
console.log(newarray);

const myarray = new Array(1,2,3,4,5,6)


myarray.pop(4)
myarray.push(9)
console.log(myarray);

myarray.unshift(11)// it will add the element at the startin og the array 
console.log(myarray);
// [
//   11, 1, 2, 3,
//    4, 5, 9
// ]


