const express= require("express");
const app= express();

const _ = require("lodash");
let month= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

console.log(_.chunk(["January","February","March","April","May","June","July",
"August","September","October","November","December"],4))




let x = [1,3,5,7,9,11,13,15,17,19]
  
let newArray = _.tail(x);
  
console.log(newArray);




let gfg = _.union([1, 2, 3],
    [3, 4, 5], 
    [6, 2, 7],
    [5,6,7],
    [2,9,3]); 

  
console.log(gfg)


let pairs = [['horror', 'The Shining' ] , ['drama','Titanic'], ['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
  
let obj = _.fromPairs(pairs);
  
console.log(obj)

