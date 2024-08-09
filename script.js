alert("¡Hola! Bienvenido al convertidor de moneda");
alert("A continuación te pediremos unos datos. Recuerda que debes ser mayor de edad para salir del país y usar el conversor.");

let nombre = prompt("Ingrese su nombre: ");
while (true) {
    // Validar que el nombre tenga al menos 3 letras
    if (nombre.length >= 3) {
        alert(`Hola, ${nombre}!`);
        break;
    } else {
        alert("El nombre es demasiado corto. Inténtalo de nuevo.");
        nombre = prompt("Ingrese su nombre: ");
    }
}

let edad = prompt(`Perfecto ${nombre.toLowerCase()}. ¿Cuantos años tienes?`);

console.log(nombre,edad);

if (edad >= 18){
    alert("Eres mayor de edad. Tienes permiso para salir del país.")
    alert("Recuerde que para ingresar al país debe tener como mínimo 1.000.000$ (PESOS ARGENTINOS)")
    convertidorMoneda();
} 
else{
    alert("Eres menor de edad. No puedes salir del país ni utilizar el conversor.")
    intentos--;
}

function convertidorMoneda(){
    let dolar = Number(prompt("Ingrese cuantos dolares quiere convertir"));
    let pesoConvertido = dolar * 1375;
    alert(`Esa cantidad de dolares sería ${pesoConvertido}$ pesos Argentinos.`)
    if (pesoConvertido >= 500000){
        alert("¡Usted puede ingresar al país!")
    } else{
        alert("¡Lo siento! No puede ingresar al país.")
    }
    return;
}
