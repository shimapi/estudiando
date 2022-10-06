const yourNumber = "D138";
let windowNumber;

const windows = {
  "D133": 1,
  "D134": 2,
  "D135": 3,
  "D136": 4,
  "D137": 5
};


//En su lugar, utiliza el operador || para asignar el valor 0 a la variable windowNumber si el número especificado no se encuentra en el objeto:


windowNumber = windows[yourNumber] || 0; 

console.log(windowNumber); // 0