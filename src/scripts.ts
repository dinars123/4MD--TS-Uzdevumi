/*
Write a function that takes two numbers (a and b) as argument sum a and b return the result
*/
const sum = function (a: number, b: number): number {
  return a + b;
};

console.log(sum(1, 3));
console.log(sum(1, 10));
console.log(sum(99, 1));

/*
Write a function that takes a value as argument
Return the type of the value
*/

const myFunction = function (a: any) {
  console.log(typeof a);
};

myFunction("number");
myFunction(false);
myFunction({});
myFunction(null);
myFunction("string");
myFunction(["array"]);

/*
Write a function that takes two values, say a and b, as arguments
Return true if the two values are equal and of the same type
*/

const myFunctionEqual = (a: number, b: number): boolean => {
  return a === b;
};

console.log(myFunctionEqual(2, 3));
console.log(myFunctionEqual(3, 3));
console.log(myFunctionEqual(1, 1));
console.log(myFunctionEqual(10, 10));

/*
  Write a function that takes a string (a) and a number (n) as arguments
Return the nth character of 'a'
  */

const myFunctionThree = (name: string, digit: number): string => {
  return name[digit - 1];
};

console.log(myFunctionThree("abcd", 1));
console.log(myFunctionThree("zyxbwpl", 5));
console.log(myFunctionThree("gfedcba", 3));

/*
Write a function that takes a string (a) as argument
Remove the first 3 characters of a
Return the result
*/

function myFunctionFour(word: string, number: number) {
  return word.slice(number);
}

console.log(myFunctionFour("abcdefg", 3));
console.log(myFunctionFour("1234", 3));
console.log(myFunctionFour("dcba", 3));

/*
Write a function that takes a string as argument
Extract the last 3 characters from the string
Return the result
*/

const myFunctionFive = (word: string): string => {
  return word.slice(-3);
};

console.log(myFunctionFive("abcdefg"));
console.log(myFunctionFive("1234"));
console.log(myFunctionFive("fgedcba"));

/*
Write a function that takes a string (a) as argument
Get the first 3 characters of a
Return the result
*/

function myFunctionsix(word: string): string {
  return word.substring(0, 3);
}

console.log(myFunctionsix("abcdefg"));
console.log(myFunctionsix("1234"));
console.log(myFunctionsix("fgedcba"));

/*
Write a function that takes a string (a) as argument
Extract the first half a
Return the result
*/

const myFunctionseven = (word: string): string => {
  return word.slice(0, word.length / 2);
};

console.log(myFunctionseven("abcdefgh"));
console.log(myFunctionseven("1234"));
console.log(myFunctionseven("gedcba"));

/*
Write a function that takes a string (a) as argument
Remove the last 3 characters of a
Return the result
*/

function myFunctionEight(word: string): string {
  return word.substring(0, word.length - 3);
}

console.log(myFunctionEight("abcdefg"));
console.log(myFunctionEight("1234"));
console.log(myFunctionEight("fgedcba"));

/*
Write a function that takes two numbers (a and b) as argument
Return b percent of a
*/

function myFunctionNine(a: number, b: number): number {
  return (b / a) * 100;
}

console.log(myFunctionNine(100, 50));
console.log(myFunctionNine(10, 1));
console.log(myFunctionNine(500, 25));

/*
Write a function that takes 6 values (a,b,c,d,e,f) as arguments
Sum a and b
Then substract by c
Then multiply by d and divide by e
Finally raise to the power of f and return the result
Tip: mind the order
*/

function myFunctionTen(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
): number {
  return Math.pow(((a + b - c) * d) / e, f);
}

console.log(myFunctionTen(6, 5, 4, 3, 2, 1));
console.log(myFunctionTen(6, 2, 1, 4, 2, 3));
console.log(myFunctionTen(2, 3, 6, 4, 2, 3));

/*
Write a function that takes a number as argument
If the number is even, return true
Otherwise, return false
*/

function myFunctionEleven(num: number): boolean {
  return num % 2 === 0;
}

console.log(myFunctionEleven(10));
console.log(myFunctionEleven(-4));
console.log(myFunctionEleven(5));
console.log(myFunctionEleven(-111));

/*
Write a function that takes two strings (a and b) as arguments
Return the number of times a occurs in b
*/

function myFunctionTwelve(letter: string, sentence: string): number {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(
  myFunctionTwelve(
    "m",
    "how many times does the character occur in this sentence?"
  )
);
console.log(
  myFunctionTwelve(
    "h",
    "how many times does the character occur in this sentence?"
  )
);
console.log(
  myFunctionTwelve(
    "?",
    "how many times does the character occur in this sentence?"
  )
);
console.log(
  myFunctionTwelve(
    "z",
    "how many times does the character occur in this sentence?"
  )
);

/*
Write a function that takes a number (a) as argument
If a is a whole number (has no decimal place), return true
Otherwise, return false
*/

function myFunctiontEleven(num: number): boolean {
  return num % 1 === 0;
}

console.log(myFunctiontEleven(4));
console.log(myFunctiontEleven(1.123));
console.log(myFunctiontEleven(1048));
console.log(myFunctiontEleven(10.48));

/*
Write a function that takes two numbers (a and b) as arguments
If a is smaller than b, divide a by b
Otherwise, multiply both numbers
Return the resulting value
*/

function myFunctiontThirteen(a: number, b: number): number {
  if (a < b) {
    return a / b;
  } else {
    return a * b;
  }
}

console.log(myFunctiontThirteen(10, 100));
console.log(myFunctiontThirteen(90, 45));
console.log(myFunctiontThirteen(8, 20));
console.log(myFunctiontThirteen(2, 0.5));

/*
Write a function that takes two strings (a and b) as arguments
If a contains b, append b to the beginning of a
If not, append it to the end
Return the concatenation
*/

function myFunctiontFourteen(strone: string, strtwo: string): string {
  if (strone.includes(strtwo)) {
    return strtwo + strone;
  } else {
    return strone + strtwo;
  }
}
console.log(myFunctiontFourteen("cheese", "cake"));
console.log(myFunctiontFourteen("lips", "s"));
console.log(myFunctiontFourteen("Java", "script"));
console.log(myFunctiontFourteen(" think, therefore I am", "I"));

/*
Write a function that takes a number (a) as argument
Round a to the 2nd digit after the comma
Return the rounded number
*/

function myFunctiontFiveteen(num: number): number {
  return parseFloat(num.toFixed(2));
}

console.log(myFunctiontFiveteen(2.12397));
console.log(myFunctiontFiveteen(3.136));
console.log(myFunctiontFiveteen(1.12397));
console.log(myFunctiontFiveteen(26.1379));

/*
Write a function that takes a number (a) as argument
Split a into its individual digits and return them in an array
Tip: you might want to change the type of the number for the splitting
*/

function myFunctiontSixteen(num: number): number[] {
  return num
    .toString()
    .split("")
    .map((eachNum) => Number(eachNum));
}

console.log(myFunctiontSixteen(10));
console.log(myFunctiontSixteen(931));
console.log(myFunctiontSixteen(193278));

/*
It seems like something happened to these strings
Can you figure out how to clear up the chaos?
Write a function that joins these strings together such that they form the following words:
'Javascript', 'Countryside', and 'Downtown'
You might want to apply basic JS string methods such as replace(), split(), slice() etc.
*/

function myFunctiontSeventeen(word: string, revword: string): string {
  return (
    word.replace(/[^a-zA-Z]/g, "") +
    revword
      .replace(/[^a-zA-Z]/g, "")
      .split("")
      .reverse()
      .join("")
  );
}

console.log(myFunctiontSeventeen("java", "tpi%rcs"));
console.log(myFunctiontSeventeen("c%ountry", "edis"));
console.log(myFunctiontSeventeen("down", "nw%ot"));

/*
This challenge is a little bit more complex
Write a function that takes a number (a) as argument
If a is prime, return a
If not, return the next higher prime number
*/

function myFunctiontEighteen(num: number): number {
  const isPrime = (n: number) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  while (true) {
    if (isPrime(num)) return num;
    num++;
  }
}

console.log(myFunctiontEighteen(38));
console.log(myFunctiontEighteen(7));
console.log(myFunctiontEighteen(115));
console.log(myFunctiontEighteen(2000));

/*
Write a function that takes two numbers, say x and y, as arguments
Check if x is divisible by y
If yes, return x
If not, return the next higher natural number that is divisible by y
*/

function myFunctiontNineteen(x: number, y: number): number {
  if (x % y === 0) {
    return x;
  } else {
    for (let i = x + 1; ; i++) {
      if (i % y === 0) {
        return i;
      }
    }
  }
}

console.log(myFunctiontNineteen(1, 23));
console.log(myFunctiontNineteen(23, 23));
console.log(myFunctiontNineteen(7, 3));
console.log(myFunctiontNineteen(-5, 7));

/*
Write a function that takes two strings (a and b) as arguments
Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
Return the resulting string
*/

function myFunctionTwenty(a: string, b: string) {
  const reversed = a.split("").reverse().join("");
  let newstr = "";
  for (let i = 0; i < reversed.length; i++) {
    newstr += reversed[i];
    if ((i + 1) % 3 === 0 && i !== reversed.length - 1) {
      newstr += b;
    }
  }
  return newstr.split("").reverse().join("");
}

console.log(myFunctionTwenty("1234567", "."));
console.log(myFunctionTwenty("abcde", "$"));
console.log(myFunctionTwenty("zxyzxyzxyzxyzxyz", "w"));

/*
Write a function that takes a string as argument
As it is, the string has no meaning
Increment each letter to the next letter in the alphabet
Return the correct word
*/

function myFunctionTwentyOne(str: string) {
  let newstr: string = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (alphabet.includes(letter)) {
      let indexOfAlphabet = alphabet.indexOf(letter);
      let nextIndex = (indexOfAlphabet + 1) % alphabet.length;
      newstr += alphabet[nextIndex];
    } else {
      newstr += letter;
    }
  }
  return newstr;
}

console.log(myFunctionTwentyOne("bnchmf"));
console.log(myFunctionTwentyOne("bgddrd"));
console.log(myFunctionTwentyOne("sdrshmf"));

/*
Write a function that takes an array (a) and a value (n) as argument
Return the nth element of 'a
*/

function myFunctionTwentyTwo(a: number[], b: number): number {
  return a[b - 1];
}
console.log(myFunctionTwentyTwo([1, 2, 3, 4, 5], 3));
console.log(myFunctionTwentyTwo([10, 9, 8, 7, 6], 5));
console.log(myFunctionTwentyTwo([7, 2, 1, 6, 3], 1));

/*
Write a function that takes an array (a) as argument
Remove the first 3 elements of 'a'
Return the result
*/

function myFunctionTwentyThree(arr: number[]): number[] {
  return arr.slice(3);
}

console.log(myFunctionTwentyThree([1, 2, 3, 4]));
console.log(myFunctionTwentyThree([5, 4, 3, 2, 1, 0]));
console.log(myFunctionTwentyThree([99, 1, 1]));

/*
Write a function that takes an array (a) as argument
Extract the last 3 elements of a
Return the resulting array
*/

function myFunctionTwentyFour(a: number[]) {
  return a.slice(-3);
}

console.log(myFunctionTwentyFour([1, 2, 3, 4]));
console.log(myFunctionTwentyFour([5, 4, 3, 2, 1, 0]));
console.log(myFunctionTwentyFour([99, 1, 1]));

/*
Write a function that takes an array (a) as argument
Extract the first 3 elements of a
Return the resulting array
*/

function myFunctionTwentyFive(arr: number[]): number[] {
  return arr.slice(0, 3);
}

console.log(myFunctionTwentyFive([1, 2, 3, 4]));
console.log(myFunctionTwentyFive([5, 4, 3, 2, 1, 0]));
console.log(myFunctionTwentyFive([99, 1, 1]));

/*
Write a function that takes an array (a) and a number (n) as arguments
It should return the last n elements of a
*/

function myFunctionTwentySix(arr: number[], num: number) {
  return arr.slice(-num);
}

console.log(myFunctionTwentySix([1, 2, 3, 4, 5], 2));
console.log(myFunctionTwentySix([1, 2, 3], 6));
console.log(myFunctionTwentySix([1, 2, 3, 4, 5, 6, 7, 8], 3));

/*
Write a function that takes an array (a) and a value (b) as argument
The function should clean a from all occurrences of b
Return the filtered array
*/

function myFunctionTwentySeven(arr: any[], num: any): any[] {
  return arr.filter((item) => item !== num);
}

console.log(myFunctionTwentySeven([1, 2, 3], 2));
console.log(myFunctionTwentySeven([1, 2, "2"], "2"));
console.log(myFunctionTwentySeven([false, "2", 1], false));
console.log(myFunctionTwentySeven([1, 2, "2", 1], 1));

/*
Write a function that takes an array (a) as argument
Return the number of elements in a
*/

function myFunctionTwentyEight(a: number[]): number {
  return a.length;
}

console.log(myFunctionTwentyEight([1, 2, 2, 4]));
console.log(myFunctionTwentyEight([9, 9, 9]));
console.log(myFunctionTwentyEight([4, 3, 2, 1, 0]));

/*
Write a function that takes an array of numbers as argument
Return the number of negative values in the array
*/

function myFunctionTwentyNine(a: number[]) {
  let negativecount: number = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      negativecount++;
    }
  }
  return negativecount;
}

console.log(myFunctionTwentyNine([1, -2, 2, -4]));
console.log(myFunctionTwentyNine([0, 9, 1]));
console.log(myFunctionTwentyNine([4, -3, 2, 1, 0]));

/*
  Write a function that takes an array of numbers as argument
It should return an array with the numbers sorted in descending order
  */

function myFunctionThirty(num: number[]): number[] {
  return num.sort((a, b) => b - a);
}

console.log(myFunctionThirty([1, 3, 2]));
console.log(myFunctionThirty([4, 2, 3, 1]));

/*
Write a function that takes an array of strings as argument
Sort the array elements alphabetically
Return the result
*/

function myFunctionThirtyOne(a: string[]): string[] {
  return a.sort();
}

console.log(myFunctionThirtyOne(["b", "c", "d", "a"]));
console.log(myFunctionThirtyOne(["z", "c", "d", "a", "y", "a", "w"]));

/*
Write a function that takes an array of numbers as argument
It should return the average of the numbers
*/

function myFunctionThirtyTwo(arr: number[]): number {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  let average = count / arr.length;
  return average;
}

console.log(myFunctionThirtyTwo([10, 100, 40]));
console.log(myFunctionThirtyTwo([10, 100, 1000]));
console.log(myFunctionThirtyTwo([-50, 0, 50, 200]));

/*
Write a function that takes an array of strings as argument
Return the longest string
*/

function myFunctionThirtyThree(array: string[]): string {
  let longestword = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > longestword.length) {
      longestword = array[i];
    }
  }
  return longestword;
}

console.log(myFunctionThirtyThree(["help", "me"]));
console.log(myFunctionThirtyThree(["I", "need", "candy"]));

/*
Write a function that takes an array as argument
It should return true if all elements in the array are equal
It should return false otherwise
*/

function myFunctionThirtyFour(arr: any[]): boolean {
  const firstelement = arr[0];
  return arr.every((everyarrelement) => everyarrelement === firstelement);
}

console.log(myFunctionThirtyFour([true, true, true, true]));
console.log(myFunctionThirtyFour(["test", "test", "test"]));
console.log(myFunctionThirtyFour([1, 1, 1, 2]));
console.log(myFunctionThirtyFour(["10", 10, 10, 10]));

/*
Write a function that takes arguments an arbitrary number of arrays
It should return an array containing the values of all arrays
*/

function myFunctionThirtyFive(...arr: any[]): any[] {
  return [].concat(...arr);
}

console.log(myFunctionThirtyFive([1, 2, 3], [4, 5, 6]));
console.log(myFunctionThirtyFive(["a", "b", "c"], [4, 5, 6]));
console.log(myFunctionThirtyFive([true, true], [1, 2], ["a", "b"]));

/*
Write a function that takes an array of objects as argument
Sort the array by property b in ascending order
Return the sorted array
*/
function myFunctionThirtySix(arr: { a: number; b: number }[]) {
  if (arr[0].b > arr[1].b) {
    arr.reverse();
  }
  return arr;
}
console.log(
  myFunctionThirtySix([
    { a: 1, b: 2 },
    { a: 5, b: 4 },
  ])
);
console.log(
  myFunctionThirtySix([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ])
);
console.log(
  myFunctionThirtySix([
    { a: 1, b: 7 },
    { a: 2, b: 1 },
  ])
);

/*
Write a function that takes two arrays as arguments
Merge both arrays and remove duplicate values
Sort the merge result in ascending order
Return the resulting array
*/

function myFunctionThirtySeven(one: number[], two: number[]) {
  // Merge both arrays and remove duplicates using a Set
  const mergedArray = [...one, ...two];
  const uniqueArray = Array.from(new Set(mergedArray));

  // Sort the unique array in ascending order
  uniqueArray.sort((a, b) => a - b);

  return uniqueArray;
}

console.log(myFunctionThirtySeven([1, 2, 3], [3, 4, 5]));
console.log(myFunctionThirtySeven([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

/*
Write a function that takes an array (a) and a number (b) as arguments
Sum up all array elements with a value greater than b
Return the sum
*/

function myFunctionThirtyEight(arr: number[], num: number): number {
  let newArr = arr.filter((n) => n > num);
  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  return sum;
}

console.log(myFunctionThirtyEight([1, 2, 3, 4, 5, 6, 7], 2));
console.log(myFunctionThirtyEight([-10, -11, -3, 1, -4], -3));
console.log(myFunctionThirtyEight([78, 99, 100, 101, 401], 99));

/*
Write a function that takes two numbers (min and max) as arguments
Return an array of numbers in the range min to max
*/

function myFunctionThirtyNine(one: number, two: number): number[] {
  let newarr: number[] = [];
  for (let i = one; i <= two; i++) {
    newarr.push(i);
  }
  return newarr;
}

console.log(myFunctionThirtyNine(2, 10));
console.log(myFunctionThirtyNine(1, 3));
console.log(myFunctionThirtyNine(-5, 5));
console.log(myFunctionThirtyNine(2, 7));

/*
Write a function that takes an array of strings as argument
Group those strings by their first letter
Return an object that contains properties with keys representing first letters
The values should be arrays of strings containing only the corresponding strings
For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
{ a: ['Alf', 'Alice'], b: ['Ben']}
*/

function myFunctionForty(strings: string[]): { [key: string]: string[] } {
  // Create an empty object to store the grouped strings
  const groupedStrings: { [key: string]: string[] } = {};
  for (const string of strings) {
    const firstLetter = string[0].toLowerCase();
    if (groupedStrings[firstLetter]) {
      groupedStrings[firstLetter].push(string);
    } else {
      groupedStrings[firstLetter] = [string];
    }
  }
  return groupedStrings;
}

console.log(myFunctionForty(["Alf", "Alice", "Ben"]));
console.log(myFunctionForty(["Ant", "Bear", "Bird"]));
console.log(myFunctionForty(["Berlin", "Paris", "Prague"]));
console.log(
  "-----------------------------------------------------------------------------------------"
);
/*
Write a function that takes an array with arbitrary elements and a number as arguments
Return a new array, the first element should be either the given number itself
or zero if the number is smaller than 6
The other elements should be the elements of the original array
Try not to mutate the original array
*/

function myFunctionFortyOne(arr: any[], num: number): any[] {
  if (num >= 6) {
    arr.unshift(num);
  } else {
    arr.unshift(0);
  }
  return arr;
}
console.log(myFunctionFortyOne([1, 2, 3], 6));
console.log(myFunctionFortyOne(["a", "b"], 2));
console.log(myFunctionFortyOne([null, false], 11));

/*
Write a function that takes an array (a) and a value (n) as arguments
Save every nth element in a new array
Return the new array
*/

function myFunctionFortyTwo(arr: number[], num: number): number[] {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % num === 0) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}

console.log(myFunctionFortyTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(myFunctionFortyTwo([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
console.log(myFunctionFortyTwo([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));

/*
 * Write a function that takes an object with two properties as argument
It should return the value of the property with key country
 */

type MyObject = {
  country: string;
  continent: string;
};

function myFunctionFortyThree(abj: MyObject) {
  return abj.country;
}

console.log(myFunctionFortyThree({ continent: "Asia", country: "Japan" }));
console.log(myFunctionFortyThree({ country: "Sweden", continent: "Europe" }));

/*
Write a function that takes an object with two properties as argument
It should return the value of the property with key 'prop-2'
Tip: you might want to use the square brackets property accessor
*/

function myFunctionFortyFour(obj: { [key: string]: any }) {
  return obj["prop-2"];
}

console.log(myFunctionFortyFour({ one: 1, "prop-2": 2 }));
console.log(myFunctionFortyFour({ "prop-2": "two", prop: "test" }));

/*
Write a function that takes an object with two properties and a string as arguments
It should return the value of the property with key equal to the value of the string
*/

function myFunctionFortyFive(obj: { [key: string]: any }, str: string) {
  return obj[str];
}

console.log(
  myFunctionFortyFive({ continent: "Asia", country: "Japan" }, "continent")
);
console.log(
  myFunctionFortyFive({ country: "Sweden", continent: "Europe" }, "country")
);

/*
Write a function that takes an object (a) and a string (b) as argument
Return true if a has a property with key b
Return false otherwis
*/

function myFunctionFortySix(obj: {}, str: string) {
  if (obj.hasOwnProperty(str)) {
    return true;
  } else {
    return false;
  }
}

console.log(myFunctionFortySix({ a: 1, b: 2, c: 3 }, "b"));
console.log(myFunctionFortySix({ x: "a", y: "b", z: "c" }, "a"));
console.log(myFunctionFortySix({ x: "a", y: "b", z: "c" }, "z"));

/*
Write a function that a string (a) as argument
Create an object that has a property with key 'key' and a value of a
Return the object
*/

function myFunctionFortySeven(str: string) {
  let newobj: { key: string } = { key: str };
  newobj["key"] = str;
  return newobj;
}

console.log(myFunctionFortySeven("a"));
console.log(myFunctionFortySeven("z"));
console.log(myFunctionFortySeven("b"));

/*
Write a function that takes two strings (a and b) as arguments
Create an object that has a property with key 'a' and a value of 'b'
Return the object
*/

function myFunctionFortyEight(one: string, two: string) {
  let newobj: { [key: string]: string } = {};
  newobj[one] = two;
  return newobj;
}

console.log(myFunctionFortyEight("a", "b"));
console.log(myFunctionFortyEight("z", "x"));
console.log(myFunctionFortyEight("b", "w"));

/*
Write a function that takes two arrays (a and b) as arguments
Create an object that has properties with keys 'a' and corresponding values 'b'
Return the object
*/

function myFunctionFortyNine(one: any[], two: any[]) {
  let newobj: { [key: string]: string } = {};
  for (let i = 0; i < one.length; i++) {
    let key = one[i];
    for (let i = 0; i < two.length; i++) {
      let value = two[i];
      newobj[key] = value;
    }
  }
  return newobj;
}

console.log(myFunctionFortyNine(["a", "b", "c"], [1, 2, 3]));
console.log(myFunctionFortyNine(["w", "x", "y", "z"], [10, 9, 5, 2]));
console.log(myFunctionFortyNine([1, "b"], ["a", 2]));

/*
Write a function that takes an object (a) as argument
Return an array with all object keys
*/

function myFunctionFifty(obj: {}) {
  return Object.keys(obj);
}

console.log(myFunctionFifty({ a: 1, b: 2, c: 3 }));
console.log(myFunctionFifty({ j: 9, i: 2, x: 3, z: 4 }));
console.log(myFunctionFifty({ w: 15, x: 22, y: 13 }));

/*
Write a function that takes an object (a) as argument
Return the sum of all object values
*/

function myFunctionFiftyOne(obj: { [key: string]: number }) {
  let sum = 0;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      sum += obj[key];
    }
  }

  return sum;
}

console.log(myFunctionFiftyOne({ a: 1, b: 2, c: 3 }));
console.log(myFunctionFiftyOne({ j: 9, i: 2, x: 3, z: 4 }));
console.log(myFunctionFiftyOne({ w: 15, x: 22, y: 13 }));

/*
Write a function that takes an object as argument
It should return an object with all original object properties
except for the property with key 'b'
*/

function myFunctionFiftyTwo(obj: Record<string, any>): Record<string, any> {
  const newobj: Record<string, any> = {};

  for (const key in obj) {
    if (key !== "b") {
      newobj[key] = obj[key];
    }
  }

  return newobj;
}

console.log(myFunctionFiftyTwo({ a: 1, b: 7, c: 3 }));
console.log(myFunctionFiftyTwo({ b: 0, a: 7, d: 8 }));
console.log(myFunctionFiftyTwo({ e: 6, f: 4, b: 5, a: 3 }));

/*
Write a function that takes two objects as arguments
Unfortunately, the property 'b' in the second object has the wrong key
should be named 'd' instead
Merge both objects and correct the wrong property name
Return the resulting object
It should have the properties 'a', 'b', 'c', 'd', and 'e'
*/

function myFunctionFiftyThree(
  one: Record<string, any>,
  two: Record<string, any>
): Record<string, any> {
  const wholeObject: Record<string, number> = { ...one, ...two, d: two.b };
  delete wholeObject.b;
  return wholeObject;
}

console.log(myFunctionFiftyThree({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(myFunctionFiftyThree({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

/*
Write a function that takes an object (a) and a number (b) as arguments
Multiply all values of 'a' by 'b'
Return the resulting object
*/

function myFunctionFiftyFour(obj: Record<string, any>, num: number) {
  const newobj: Record<string, any> = {};
  for (const key in obj) {
    newobj[key] = obj[key] * num;
  }
  return newobj;
}

console.log(myFunctionFiftyFour({ a: 1, b: 2, c: 3 }, 3));
console.log(myFunctionFiftyFour({ j: 9, i: 2, x: 3, z: 4 }, 10));
console.log(myFunctionFiftyFour({ w: 15, x: 22, y: 13 }, 6));

/*
Write a function that takes an object as argument
Somehow, the properties and keys of the object got mixed up
Swap the Javascript object's key with its values and return the resulting object
*/

function myFunctionFiftyFive(obj: Record<string, any>) {
  const swappedObj: Record<string, any> = {};

  for (const key in obj) {
    swappedObj[obj[key]] = key;
  }

  return swappedObj;
}

console.log(myFunctionFiftyFive({ z: "a", y: "b", x: "c", w: "d" }));
console.log(myFunctionFiftyFive({ 2: "a", 4: "b", 6: "c", 8: "d" }));
console.log(myFunctionFiftyFive({ a: 1, z: 24 }));

/*
Write a function that takes an object as argument
Some of the property values contain empty strings
Replace empty strings and strings that contain only whitespace with null values
Return the resulting object
*/

function myFunctionFiftySix(obj: Record<string, any>) {
  let newobj: Record<string, any> = {};

  for (const key in obj) {
    if (typeof obj[key] === "string") {
      const trimmedValue = obj[key].trim();
      newobj[key] = trimmedValue === "" ? null : trimmedValue;
    } else {
      newobj[key] = obj[key];
    }
  }

  return newobj;
}

console.log(myFunctionFiftySix({ a: "a", b: "b", c: "" }));
console.log(myFunctionFiftySix({ a: "", b: "b", c: " ", d: "d" }));
console.log(myFunctionFiftySix({ a: "a", b: "b ", c: " ", d: "" }));

/*
Write a function that takes an object as argument containing properties with personal information
Extract firstName, lastName, size, and weight if available
If size or weight is given transform the value to a string
Attach the unit cm to the size
Attach the unit kg to the weight
Return a new object with all available properties that we are interested in
*/

type PersonalInfo = {
  fn: string;
  ln: string;
  age?: number;
  size?: number | string;
  weight?: number | string;
  email?: string;
};

function myFunctionFiftySeven(obj: PersonalInfo): PersonalInfo {
  const result: PersonalInfo = {
    fn: obj.fn,
    ln: obj.ln,
  };

  if (obj.size) {
    result.size = obj.size + "cm";
  }

  if (obj.weight) {
    result.weight = obj.weight + "kg";
  }

  return result;
}

console.log(
  myFunctionFiftySeven({
    fn: "Lisa",
    ln: "Müller",
    age: 17,
    size: 175,
    weight: 67,
  })
);
console.log(
  myFunctionFiftySeven({
    fn: "Martin",
    ln: "Harper",
    age: 26,
    email: "martin.harper@test.de",
    weight: 102,
  })
);
console.log(
  myFunctionFiftySeven({
    fn: "Andrew",
    ln: "Harper",
    age: 81,
    size: 175,
    weight: 71,
  })
);
console.log(
  myFunctionFiftySeven({
    fn: "Matthew",
    ln: "Müller",
    age: 19,
    email: "matthew@mueller.de",
  })
);

/*
Write a function that takes an array of objects and a string as arguments
Add a property with key 'continent' and value equal to the string to each of the objects
Return the new array of objects
Tip: try not to mutate the original array
*/

function myFunctionFiftyEight(
  arr: Record<string, any>[],
  continent: string
): Record<string, any>[] {
  // Use map to create a new array of objects
  return arr.map((obj) => ({
    ...obj, // Copy all properties from the original object
    continent, // Add the 'continent' property with the specified value
  }));
}

console.log(
  myFunctionFiftyEight(
    [
      { city: "Tokyo", country: "Japan" },
      { city: "Bangkok", country: "Thailand" },
    ],
    "Asia"
  )
);
console.log(
  myFunctionFiftyEight(
    [
      { city: "Stockholm", country: "Sweden" },
      { city: "Paris", country: "France" },
    ],
    "Europe"
  )
);

/*
Write a function that takes an array of numbers as argument
Convert the array to an object
It should have a key for each unique value of the array
The corresponding object value should be the number of times the key occurs within the array
*/

function myFunctionFiftyNine(arr: number[]): Record<number, number> {
  const countObject: Record<number, number> = {};

  for (const number of arr) {
    if (countObject[number]) {
      countObject[number]++;
    } else {
      countObject[number] = 1;
    }
  }

  return countObject;
}

console.log(myFunctionFiftyNine([1, 2, 2, 3]));
console.log(myFunctionFiftyNine([9, 9, 9, 99]));
console.log(myFunctionFiftyNine([4, 3, 2, 1]));

/*
Write a function that takes two date instances as arguments
It should return true if the dates are equal
It should return false otherwise
*/

function myFunctionSixty(date1: Date, date2: Date): boolean {
  return date1.getTime() === date2.getTime();
}

console.log(
  myFunctionSixty(
    new Date("2000/01/01 08:00:00"),
    new Date("2000/01/01 08:45:00")
  )
);
console.log(
  myFunctionSixty(
    new Date("2000/01/01 08:00:00"),
    new Date("2000/01/01 08:00:00")
  )
);
console.log(
  myFunctionSixty(
    new Date("2001/01/01 08:00:00"),
    new Date("2000/01/01 08:00:00")
  )
);

/*
Write a function that takes two date instances as argument
It should return the number of days that lies between those dates
*/

function myFunctionSixtyOne(date1: Date, date2: Date): number {
  const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const timeDifference = Math.abs(date1.getTime() - date2.getTime());
  return Math.floor(timeDifference / oneDay);
}

console.log(myFunctionSixtyOne(new Date("2020-06-11"), new Date("2020-06-01")));
console.log(myFunctionSixtyOne(new Date("2000-01-01"), new Date("2020-06-01")));

/*
Write a function that takes two date instances as argument
It should return true if they fall on the exact same day
It should return false otherwise
*/

function myFunctionSixtyThree(date1: Date, date2: Date): boolean {
  return date1.toISOString().slice(0, 10) === date2.toISOString().slice(0, 10);
}
console.log(
  myFunctionSixtyThree(new Date("2000/01/01"), new Date("2000/01/01"))
);
console.log(
  myFunctionSixtyThree(new Date("2000/01/01"), new Date("2000/01/02"))
);
console.log(
  myFunctionSixtyThree(new Date("2001/01/01"), new Date("2000/01/01"))
);
console.log(
  myFunctionSixtyThree(new Date("2000/11/01"), new Date("2000/01/01"))
);

/*
Write a function that takes two number arrays as parameters 
and return an array which contains elements from both 
arrays
*/

function myFunctionSixtyFour(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

console.log(myFunctionSixtyFour([1, 2], [3, 4]));
console.log(myFunctionSixtyFour([1, 2], [3, 4, 5, 6]));

/*
Write a function that takes an array and a string as parameters 
and return an array which contains all elements from the given array
and the given string as the last element
*/

function myFunctionSixtyFive(arr: string[], str: string): string[] {
  return [...arr, str];
}

console.log(myFunctionSixtyFive(["Apple", "Orange", "Banana"], "Kiwi"));

/*
Write a function that takes an array and a string as parameters 
and return an array which contains all elements from the given array
and the given string as the first element
*/

function myFunctionSixtySeven(arr: string[], str: string): string[] {
  return [str, ...arr];
}

console.log(myFunctionSixtySeven(["Apple", "Orange", "Banana"], "Kiwi"));

/*
Write a function that takes two objects as parameters 
and return an object which contains properties from both 
objects
*/

function myFunctionSixtyEight(
  obj1: Record<string, any>,
  obj2: Record<string, any>
): Record<string, any> {
  return { ...obj1, ...obj2 };
}

console.log(myFunctionSixtyEight({ a: 1, b: 2 }, { c: 3, d: 4 }));
console.log(myFunctionSixtyEight({ a: 1, b: 2 }, { c: 3, d: 4, e: 5, f: 6 }));

/*
Write a function that takes an object and a string as parameters 
and return an object which contains properties from the given object
and a new property favoriteMovie with the value equal to the given string
*/

function myFunctionSixtyNine(
  obj: Record<string, any>,
  movie: string
): Record<string, any> {
  return { ...obj, favoriteMovie: movie };
}

console.log(myFunctionSixtyNine({ eyeColor: "green", age: 10 }, "Garfield"));
console.log(myFunctionSixtyNine({ eyeColor: "blue", age: 15 }, "Twilight"));
