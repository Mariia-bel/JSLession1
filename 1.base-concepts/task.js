"use strict"


function solveEquation(a, b, c) {
  let ansver;
  if (a===0) {
    return "ошибка"
  }
  const d = b * b - 4 * a *c;
  let x1, x2;
  
  if (d > 0) {
      x1 = (-b + Math.sqrt(d)) / (2 * a);
      x2 = (-b - Math.sqrt(d)) / (2 * a);
      ansver = [x1, x2];   
  } else if (d === 0) {
      x1 = -b /(2 * a);
      ansver = [x1];
  } else{
      ansver = []
  }
  
return ansver;
}

