// Masalalar
// Massivlar bilan ishlash
// 1-masala
// function twoMassives(arr1,arr2) {
// return arr1.concat(arr2);
// }
// let arr1 = ["true"];
// let arr2 = ["false"];
// let res = twoMassives(arr1,arr2);
// console.log(res);

// 2-masala

// function multiplyingAccordingToKofetsinet(arr, num) {
//     let multiply = 1;
//     let res = arr.map(function(value){
//        return value * num
//     })
//     return res
// }
// let arr = [1,2,3,4,4,5];
// let res = multiplyingAccordingToKofetsinet(arr, 5);
// console.log(res);

// 3-masala

// function onlyMusbatNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += i
//         }
//     }
//     return sum
// }
// let arr = [1, 2, 3, 4, 4, 5];
// let res = onlyMusbatNumbers(arr);
// console.log(res);

// 4-masala

// function moveZeroesToend(arr) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] == 0){
//             arr.splice(i, 1);
//             arr.push(0)
//         }
//     }
//     return arr;
// }


// 5-masala
// function theMostRepeatedElement(arr) {
//     let repetition = [];
//    let theMostRepeated = arr[0];
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++){
//         let element = arr[i];
//     }
//     repetition[element] > theMostRepeated[element]
//     if (theMostRepeated[element] > counter) {
//         counter = repetition[element];
//         theMostRepeated = element
//     }
//     return (element, counter)
// }

// 6-masala

// Flat usulini o'tmagan edik.

// function flatWithArray(arr) {
//     return arr.flat(Infinity);
// }

// 7-masala

// Buni biz Set orqali qilamiz.

// function donotGetRepeatedElements(arr1,arr2) {
//     let res = arr1.concat(arr2);
//     let unique = new Set(res)
//     return Array.from(unique);
// }

// 8-masala

// function OddandEven(arr) {
//     let juft = [];
//     let toq = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             juft.push(arr[i]);
//         } else {
//             toq.push(arr[i]);
//         }
//     }
//     return [toq, juft];
// }

// 9-masala

// function isItIncluded(arr,element) {
//     return arr.includes(element);
// }

// 10-masala

// function theBigAndTheSmall(arr) {
//     let big =  arr[0];
//     let small = arr[0]
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > big) {
//             big = arr[i];
//         }
//         if (arr[i] < small) {
//             small = arr[i];
//         }
//     } 
//     return [big, small];
// }

// Obyektlar bilan ishlash

// // 11-masala
// let objects = {
//     salom : "greet"
// }
// console.log(Object.keys(objects));

// 12-masala

// function objectKeysAndObjectValues(obj) {
//     let valuesOfObject = Object.keys(obj);
//     let keysOfObject = Object.values(obj);
// return [valuesOfObject, keysOfObject];
// }

// 13-masala

// function birlashtirish(obj1, obj2) {
//         return {...obj1, ...obj2};
// }

// 14-masala

// function overallSum(obj) {
//     let values = Object.values(obj);
//     let sum = 0;
//     values.forEach(function(value){
//         if (typeof value == "string"){
//             sum += value
//         }
//     })
//     return sum;
// }

// 15-masala

// let objects = {
//     name : "Mutalibov",
// }
// objects.name = "Zuhriddin"

// 16-masala

// function deleteKey(obj,key) {
//     let values = Object.keys(obj);
//     values.foreach(function(value){
//         if (key == values) {
//             delete obj(key);
//         }
//     })
//     return obj
// }

// 17-masala

// function ifTheKeyOfObjectIsTheSame(obj) {
//     let keys = Object.keys(obj);
//     let res = keys.filter(function (key) {
//         return key === obj[key];
//     });
//     return res;
// }

// 18-masala

// function everyMassive(obj) {
//     let values = Object.values(obj);
//     let res = values.filter(function(value){
//         return Array.isArray(value);
//     })
// }

// 19-masala

// idk

// 20-masala

// function getTheDepthOfObject(bj) {
//     let Maxdepth = 0;
//     for (let key in obj) {
//         let depth =getTheDepthOfObject(obj[key]);
//         Maxdepth = math.Max(Maxdepth,depth)
//     }
//     return Maxdepth + 1
// }



// String bilan ishlash

// 21-masala
// Bu masalani ozgina tushunmay qoldim

// 22-masala

// let str = "salom bolalar";
// let reversed = str.split('').reverse().join('');
// console.log(reversed);

// 23-masala

// function theMostLongestWord(arr) {
//     let long = arr[0].length;
//     for (let i = 1; i < arr.length; i++){
//         if (arr[i].length > long){
//             long = arr[i];
//         }
//     }
//     return long
// }

// 24-masala

// function multiply(str, word) {
//     return str.split(word).join(word+word);
// }

// 25-masala

// function theNumbersRemove(arr) {
// let res = arr.filter(function(value){
//     return typeof value !== "number"
// })
// return res; 
// }















