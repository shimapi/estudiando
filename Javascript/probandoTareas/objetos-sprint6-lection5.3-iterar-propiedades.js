function swap(obj) {
  const res = {};
  for(const key in obj){
    res[obj[key]] = key;
  }
  return res;
}

const myObj = {
  first: 1,
  second: 2,
  third: 3
};

console.log(myObj); // { primero: 1, segundo: 2, tercero: 3 }
console.log(swap(myObj)); // { 1: "primero", 2: "segundo", 3: "tercero" }