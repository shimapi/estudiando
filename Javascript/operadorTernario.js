const citizenship = prompt("¿Cuál es tu nacionalidad?", "los Estados Unidos");
const otherDebts = parseInt(prompt("¿Cuántos préstamos debes a otras empresas de servicios financieros?", "0"), 10);
const age = parseInt(prompt("¿Qué edad tienes?"), 10);

// descomenta las tres primeras líneas antes de continuar

const ok = (citizenship === "the USA"
 || citizenship === "Estados Unidos")
 && !otherDebts
 && age >= 21;

// Esta sentencia tiene que ser sustituida

console.log( ok ? "El préstamo está aprobado" : "Lo sentimos");
