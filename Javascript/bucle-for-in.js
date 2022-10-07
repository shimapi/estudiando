const emojis = {
  smile: "😃",
  kiss: "😚",
  smirk: "😏",
  disappointment: "😞",
  astonishment: "😲",
  dizziness: "😵"
};

for (let emotion in emojis) {
  console.log(`${emotion} - ${emojis[emotion]}`);
}

for (let a in emojis) {
  console.log(`otra con a: ${a} - ${emojis[a]}`);
}
/* la consola mostrará:

  smile — 😃
  kiss — 😚
  smirk — 😏
  disappointment — 😞
  astonishment — 😲
  dizziness — 😵

*/