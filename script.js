let nombreUsuario = prompt("Ingrese su nombre: ");
alert(`Bienvenido ${nombreUsuario} a la ¡Biblioteca de libros!`);
alert("A continuación te mostraremos los libros disponibles que tenemos para ofrecerte");

const biblioteca = [
    {
    titulo: "Cien años de soledad",
    autor: "Gabriel Garcia Marquez",
    genero: "Realismo mágico",
    anioPublicacion: 1967
    },
    {
    titulo: "El amor en los tiempos del cólera",
    autor: "Gabriel Garcia Marquez",
    genero: "romantica",
    anioPublicacion: 1985
    },
    {
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    genero: "romantica",
    anioPublicacion: 1813
    },
    {
    titulo: "Emma",
    autor: "Jane Austen",
    genero: "Novela",
    anioPublicacion: 1815
    },
    {
    titulo: "1984",
    autor: "George Orwell",
    genero: "Distopía",
    anioPublicacion: 1949
    },
    {
    titulo: "Rebelión en la granja",
    autor: "George Orwell",
    genero: "Fábula política",
    anioPublicacion: 1945
    },
    {
    titulo: "Cumbres Borrascosas",
    autor: "Emily Bronte",
    genero: "romantica",
    anioPublicacion: 1847
    },
    {
    titulo: "Los miserables",
    autor: "Victor Hugo",
    genero: "romantica",
    anioPublicacion: 1862
    },
    {
    titulo: "El gran Gatsby",
    autor: "Scott Fitzgerald",
    genero: "ficcion",
    anioPublicacion: 1925
    }
];

for (const libro of biblioteca) {
    alert(`${libro.titulo} de ${libro.autor}`)
}
alert("Puedes filtrar por genero o autor y si no lo tenemos en biblioteca puedes agregarlo para la comunidad");

let eleccionUsuario = prompt("¿Quieres filtrar por genero o autor?").toLowerCase();

if(eleccionUsuario == "genero"){
    // PEDIMOS AL USUARIO POR QUE GENERO QUIERE FILTRAR
    let eleccionGenero = prompt("Dime de que genero estas buscando:");

    // HACEMOS EL FILTRADO EN EL ARRAY
    const filtradoGenero = biblioteca.filter((gen) => gen.genero.toLowerCase() === eleccionGenero.toLowerCase());

    // SI SE CUMPLE LA CONDICION MOSTRAMOS LOS LIBROS DISPONIBLES
    if(filtradoGenero.length > 0){
        filtradoGenero.forEach(gen => {
            console.log(gen.titulo);
            alert(gen.titulo);
        });
    }else{
        alert("Lo siento, no tenemos ningun libro en ese género")
        alert("¿Te gustaría agregar un libro para la comunidad?")
        let eleccionUsuarioLibroNuevo = prompt('Responde con "si" o "no"').toLowerCase();
        if(eleccionUsuarioLibroNuevo == "si"){
            agregarLibro();
        }
        else{
            alert("Que tengas un lindo día")
        }
    }
}
else if(eleccionUsuario == "autor"){
        let eleccionAutor = prompt("Dime que autor estas buscando: ");
        const filtradoAutor = biblioteca.filter((aut) => aut.autor.toLowerCase() === eleccionAutor.toLowerCase());
    if(filtradoAutor.length > 0){
        filtradoAutor.forEach(aut => {
            console.log(aut.titulo)
            alert(aut.titulo);
        });
    }else{
        alert("Lo siento, no tenemos ningun libro con ese autor")
        alert("¿Te gustaría agregar un libro para la comunidad?")
        let eleccionUsuarioLibroNuevo = prompt('Responde con "si" o "no"').toLowerCase();
        if(eleccionUsuarioLibroNuevo == "si"){
            agregarLibro();
        }
        else{
            alert("Que tengas un lindo día")
        }
    }
}

function agregarLibro() {
    const titulo = prompt("Ingresa el título del libro:");
    const autor = prompt("Ingresa el autor del libro:");
    const genero = prompt("Ingresa el género del libro:");
    const anioPublicacion = Number(prompt("Ingresa el año de publicación del libro:"));
    
    const nuevoLibro = {
        titulo: titulo,
        autor: autor,
        genero: genero,
        anioPublicacion: anioPublicacion
    };
    
    biblioteca.push(nuevoLibro);
    alert(`Libro "${titulo}" agregado a la biblioteca.`);
}
console.log(biblioteca.length);
