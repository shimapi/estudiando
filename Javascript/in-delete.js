const home = {
  parentss: "Marge y Homer",
  children: {
      child1: "Bart",
      child2: "Lisa",
      child3: "Maggie"
  }
}

if (home.parents) {
console.log("¿Puedo entrar?");
} else {
console.log("¿Puedes llamar a tus padres, por favor?");
}

/*****************************/

const welcomeMessages = { 
  english: "Welcome",
  french: "Bienvenue",
  italian: "Benvenuto",
  spanish: "Bienvenido",
  russian: "Добро пожаловать",
  chinese: "歡迎",
  finnish: "Tervetuloa"
};

function deleteWelcomeMessages(propsArr) {
  propsArr.forEach(function (key) {
    console.log(key);
    delete welcomeMessages[key];
    key = "otra cosa";
    console.log(key); //se imprime dos veces porque siempre sigue siendo key
  });
}

deleteWelcomeMessages(["italian", "french"]);

console.log(welcomeMessages);

/* Ahora se han eliminado las traducciones al italiano y al francés:

{ 
  english: "Welcome",
  spanish: "Bienvenido",
  russian: "Добро пожаловать",
  chinese: "歡迎",
  finnish: "Tervetuloa"
}

*/