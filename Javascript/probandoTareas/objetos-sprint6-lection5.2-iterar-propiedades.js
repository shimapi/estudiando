const tion = {
  fruition: "la realización o cumplimiento de un plan o proyecto",
  depreciation: "el proceso de pérdida de valor",
	microseismicity: "un débil temblor de tierra causado por fenómenos naturales",
  alienation: "la transmisión de la propiedad",
  bifurcation: "el punto o la zona en la que algo se divide en dos ramas o partes",
  locomotion: "la capacidad de moverse",
  fusion: "proceso de unificar o juntar dos objetos",
};

/*
Object.keys(tion).forEach(function (key) {
  // escribe tu código aquí
  if (key.endsWith("tion")) {
    return tion[key]
  }else{
    delete tion[key]
  }
});
*/

//esta es una versión más optimizada:
Object.keys(tion).forEach(function (key) {
  if (!key.endsWith("tion")) {
     delete tion[key]
  }
}); 

console.log(tion);

/*

  {
    fruition: "la realización o cumplimiento de un plan o proyecto",
    depreciation: "el proceso de pérdida de valor",
    alienation: "la transmisión de la propiedad",
   bifurcation: "el punto o la zona en la que algo se divide en dos ramas o partes",
    locomotion: "la capacidad de moverse"
  }

*/