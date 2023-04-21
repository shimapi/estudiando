const methods = {
  getFullName: function () {
    console.log(`${human.firstName} ${human.lastName}`);
  },
};

const human = Object.create(methods);

// Crea el objeto humano aquí

human.firstName = "Nikola";
human.lastName = "Tesla";

human.getFullName(); // "Nikola Tesla"
