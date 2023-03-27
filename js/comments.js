// Clase comentario
class Comentario {
    constructor(texto, usuario, fecha) {
        this.texto = texto;
        this.usuario = usuario;
        this.fecha = fecha;
    }

    agregarComentario() {
        const comentario = document.createElement("div");
        comentario.classList.add("comment");

        const comentarioTexto = document.createElement("p");
        comentarioTexto.textContent = `${this.usuario} dijo: ${this.texto}`;
        comentario.appendChild(comentarioTexto);

        const commentDateElement = document.createElement("span");
        commentDateElement.classList.add("comment-date");
        commentDateElement.textContent = this.fecha.toLocaleDateString();
        comentario.appendChild(commentDateElement);

        // Agregamos el comentario al DOM
        const contenedorComentario = document.querySelector("#comments");
        contenedorComentario.appendChild(comentario);
    }

    editarComentario(nuevoTexto) {
        this.texto = nuevoTexto;
        this.actualizarComentario();
    }

    eliminarComentario() {
        const commentsContainer = document.querySelector("#comments");
        commentsContainer.removeChild(this.elemento);
    }

    actualizarComentario() {
        this.elemento.querySelector("p").textContent = `${this.usuario} dijo: ${this.texto}`;
    }
}

  // Función que se ejecuta cuando se envía el formulario
function enviarComentario(event) {
    event.preventDefault();

    // Obtenemos los valores del formulario
    const nombreUsuario = document.querySelector("#username").value;
    const comentarioTexto = document.querySelector("#comment").value;

    // Creamos un nuevo comentario
    const comentario = new Comentario(comentarioTexto, nombreUsuario, new Date());

    // Agrega comentario al DOM
    comentario.agregarComentario();

    // Limpiamos el formulario
    document.querySelector("#form-comment").reset();
}

  // Evento que se ejecuta cuando se carga la página
window.onload = function() {
    // Agregamos el evento de submit al formulario
    const commentForm = document.querySelector("#form-comment");
    commentForm.addEventListener("submit", enviarComentario);
};