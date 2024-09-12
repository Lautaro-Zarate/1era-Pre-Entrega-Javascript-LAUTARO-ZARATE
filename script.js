localStorage.clear()

let formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", confirmarRegistro);

function confirmarRegistro(e){
    e.preventDefault();

    let nombreUsuario = document.getElementById("nombre").value;
    let nacimientoUsuario = document.getElementById("nacimiento").value;
    let emailUsuario = document.getElementById("email").value;
    let contraseñaUsuario = document.getElementById("contraseña").value;

    const nuevoUsuario = {
        nombreUsuario : nombreUsuario,
        nacimientoUsuario : nacimientoUsuario,
        emailUsuario : emailUsuario,
        contraseñaUsuario : contraseñaUsuario
    }

    localStorage.setItem("registroDeUsuario", JSON.stringify(nuevoUsuario));
    
    miFormulario.reset();
}