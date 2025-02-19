// POP (Delete last element)
// let arr2 = [10,20,30,40,50];
// arr2.pop();
// console.log(arr2);

// PUSH (Add element at last)
// let arr = ["a","b","c","d"];
// arr.push("e")
// console.log(arr);

// SHIFT (Delete element at start)
// let arr = ["a","b","c","d","e"];
// arr.shift();
// console.log(arr)

// UNSHIFT (Add element at start)
// let arr = [10,"a",20];
// arr.unshift("z");
// console.log(arr)

// AT (INDEX VALUE)
// let arr = ["a",10,"b",20];
// console.log(arr.at(3));

// SLICE ( Give the array from start to end (slice(start,end)) )
// let arr1 = [10,2,30,4,35,25];
// let array = arr1.slice(0,2);
// console.log(array)

// ----------------- STRING METHOD --------------//

// STRING LENGTH
// let text = "Hello World";
// console.log(text.length)

// STRING UPPER-CASE
// let text = "hello";
// console.log(text.toUpperCase())

// STRING LOWER-CASE
// let text = "HELLO";
// console.log(text.toLowerCase());

// STRING TRIM
// let text ="   Hello World   ";
// console.log(text.trim());

// STRING REPLACE
// let text = "Hello World";
// console.log(text.replace("World","Javascript"));

// STRING SLICE
// let text = "Hello World"
// console.log(text.slice(0,5));

// STRING SUBSTRING
// let text = "Hello World";
// console.log(text.substring(0,5));

// STRING INCLUDE
// let text = "Hello World";
// console.log(text.includes("World"));

// STRING SPLIT
// let text = "Hello,World,Javascript";
// console.log(text.split(","));

// STRING CONCAT
// let text1 = "Hello";
// let text2 = "World";
// console.log(text1.concat(" ",text2));

// STRING REPEAT
// let text = "Hello";
// console.log(text.repeat(3));

// STRING PADSTART
// let text = "5";
// console.log(text.padStart(4, "0"));

// STRING PADEND
// let text = "5";
// console.log(text.padEnd(4, "0"));

// STRING MATCH
// let text = "Javascript is awesome";
// console.log(text.match(/a/g));

// STRING SEARCH
// let text = "Hello Javascript";
// console.log(text.search("Javascript"));


// ---------------------- ARRAY METHOD ----------------------//

// ARRAY LENGTH
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

// PUSH 
// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);

// POP
// let arr = [1, 2, 3];
// arr.pop();
// console.log(arr);

// SHIFT
// let arr = [1, 2, 3];
// arr.shift();
// console.log(arr);

// UNSHIFT
// let arr = [1, 2, 3];
// arr.unshift(0);
// console.log(arr);

// ARRAY MAP
// let num = [1,2,3]
// let dbl = num.map(numb => numb * 2);
// console.log(dbl)

// ARRAY FILTER
// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// ARRAY REDUCE
// let num = [1,2,3,4];
// let sum = num.reduce((acc,numb)=>acc + numb,0);
// console.log(sum)

// ARRAY FIND
// let num = [1,2,3,4,5]
// let result = num.find(num => num > 3);
// console.log(result);

// ARRAY SORT
// let fruit = ["Banana","Apple","Cherry"];
// console.log(fruit.sort())

// ARRAY REVERSE
// let arr = [1,2,3,4,5]
// console.log(arr.reverse());

// ARRAY SPLICE
// let arr = [1,2,3,4,5]
// arr.splice(2,1);
// console.log(arr)

// ARRAY SLICE
// let arr = [1,2,3,4,5];
// console.log(arr.slice(1,4));

// ARRAY INDEXOF
// let arr = [10,20,30,40];
// console.log(arr.indexOf(30));

// ARRAY LASTINDEXOF
// let arr = [10, 20, 30, 10, 40];
// console.log(arr.lastIndexOf(10));

// ARRAY SOME
// let num = [1,2,3,4,5]
// console.log(num.some(val => val > 3));

// ARRAY EVERY
// let num = [2,4,6,8]
// console.log(num.every(val => val % 2 === 0));

// ARRAY FILL
// let arr = new Array(5).fill(0);
// console.log(arr);

// ARRAY JOIN
// let arr = ["Hello","World","Javascript"]
// console.log(arr.join(" - "))

// ARRAY INCLUDE
let arr = [1,2,3,4,5]
console.log(arr.includes(3));

// ARRAY FLAT
let arr = [1,[2,3],[4,5]];
console.log(arr.flat())