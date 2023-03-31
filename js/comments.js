// Clase comentario
class Comentario {
    constructor(texto, usuario, fecha, id) {
        this.texto = texto;
        this.usuario = usuario;
        this.fecha = fecha;
        this.id = id;
    }

    agregarComentario() {
        const comentario = document.createElement("div");
        comentario.setAttribute("class","comentario-card");
        
        comentario.setAttribute("id",this.id);

        const comentarioTexto = document.createElement("p");
        comentarioTexto.setAttribute("class","comentario-card__texto");
        comentarioTexto.textContent = `${this.usuario} dijo: ${this.texto}`;
        comentario.appendChild(comentarioTexto);

        const fechaComentario = document.createElement("span");
        fechaComentario.setAttribute("class","comentario-card__date");
        fechaComentario.textContent = this.fecha.toLocaleDateString();
        comentario.appendChild(fechaComentario);
        
        const botonEliminarComentario = document.createElement("button");
        // botonEliminarComentario.setAttribute("onclick", this.eliminarComentario());
        botonEliminarComentario.textContent = "Eliminar";
        comentario.appendChild(botonEliminarComentario);
        
        // Agregamos el comentario al DOM
        const contenedorComentario = document.querySelector("#comments");
        contenedorComentario.appendChild(comentario);
        
    
        botonEliminarComentario.addEventListener("click", () => contenedorComentario.removeChild(comentario));
    }

    editarComentario(nuevoTexto) {
        this.texto = nuevoTexto;
        this.actualizarComentario();
    }

    // eliminarComentario(comentario) {
    //     const contenedorComentario = document.querySelector("#comments");
    //     contenedorComentario.appendChild(comentario);
    // }

    actualizarComentario() {
        this.elemento.querySelector("p").textContent = `${this.usuario} dijo: ${this.texto}`;
    }
}

let contadorId = 0;

  // Función que se ejecuta cuando se envía el formulario
function enviarComentario(event) {
    event.preventDefault();

    // Obtenemos los valores del formulario
    const nombreUsuario = document.querySelector("#username").value;
    const comentarioTexto = document.querySelector("#comment").value;
    
    // Creamos un nuevo comentario
    const comentario = new Comentario(comentarioTexto, nombreUsuario, new Date(), contadorId);
    
    // Agrega comentario al DOM
    comentario.agregarComentario();
    
    contadorId+=1;
    // Limpiamos el formulario
    document.querySelector("#form-comment").reset();
}

  // Evento que se ejecuta cuando se carga la página
window.onload = function() {
    // Agregamos el evento de submit al formulario
    const commentForm = document.querySelector("#form-comment");
    commentForm.addEventListener("submit", enviarComentario);
};