const counter = [
  "Emperador",
  "Rey",
  "César",
  "Faraón",
  "Sultán",
  "Zar"
];

const counterIndexed = counter.map(function (person, index) {
  return `${index + 1}. ${person}`;
});

console.log(counterIndexed);

/*
[
  "1. Emperador",
  "2. Rey",
  "3. César",
  "4. Faraón",
  "5. Sultán",
  "6. Zar"
]
*/