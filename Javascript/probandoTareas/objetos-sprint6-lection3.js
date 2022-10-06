const phonebook = {
  "Lily": {
    mobile: "+16235554420",
    work: "+12445552374",
    home: "+19775552223"
  },
  "Kyle, el hermano de Tim": {
    mobile: "+4235555616"
  }
};


function addPhoneNumber(name, numberType, number) {
  // escribe tu código aquí
  if (!phonebook[name]) {
    phonebook[name] = {};
  }
    phonebook[name][numberType] = number;
}
// cuando la función esté lista, añade el número de teléfono de xx
addPhoneNumber("Stephanie Noland", "móvil", "+4235555212");

console.log(phonebook["Stephanie Noland"].móvil); // "+4235555212"