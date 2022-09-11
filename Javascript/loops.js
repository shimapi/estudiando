/*let number = 10;

while (number <= 20) {
    console.log(number);
    number += 2;
} 

for (let i = 0; i <= 10; i++) {
  console.log(i);
} 

let number2 = 21;

do {
    console.log(number2);
} while (number2 <= 20); */



let morningList = [
  'Get out of bed',
  'Brush teeth',
  'Exercise',
  'Have breakfast',
  'Wash dishes'];


for ( let i=0 ; i <= (morningList.length - 1) ; i++){
console.log(morningList[i]);
}

console.log("-----------------");


for(let i = 0; i < morningList.length; i+=2) {
  if (i%2 == 0){
    console.log(morningList[i]);
  }
}

console.log("-----------------");


let morningList3 = [
  'Get out of bed',
  'Brush teeth',
  'Exercise',
  'Have breakfast',
  'Wash dishes'];

// para(inicialización; condición; expresión final)
for(let i = 0; i < morningList3.length; i++) {
  console.log(morningList3[i]);
}
console.log("-----------------");


let i = 0;
while(i < morningList3.length) {
  console.log(morningList3[i]);
 i++
}