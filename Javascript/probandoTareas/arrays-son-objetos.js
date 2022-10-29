function double(value) {
  // escribe tu código aquí
  if (Array.isArray(value)){
    return value.map(function(key){
      return key * 2;
    })
  }else{
    return value * 2
  }
}

console.log(double(2))
console.log(double([1, 2, 3]))
/* double(2); // 4
double([1, 2, 3]); // [2, 4, 6] */