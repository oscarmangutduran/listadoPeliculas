import Storage from "./storage.js";
import List from "./list.js";

export default class Add {
  constructor() {
    // Creamos las instancias de Storage y List
    this.storage = new Storage();
    this.list = new List();

    // Conseguimos los elementos del DOM
    this.title_field = document.querySelector("#title");
    this.description_field = document.querySelector("#description");
    this.save_btn = document.querySelector("#save");

    // Asignamos el evento click al botón de guardar
    this.peliculaSave();

    // Mostramos las películas almacenadas al cargar la página
    this.list.show(this.storage.getData());
  }

  peliculaSave() {
    this.save_btn.addEventListener("click", (evt) => {
      evt.preventDefault(); // Evitar que el formulario se envíe por defecto

      // Obtener las películas actuales y el último ID
      let peliculas = this.storage.getData();
      let lastId = this.storage.getLastId();

      // Obtener los datos del formulario
      let title = this.title_field.value.trim();
      let description = this.description_field.value.trim();

      // Validación básica para evitar campos vacíos
      if (title !== "" && description !== "") {
        // Crear el nuevo objeto de película
        let pelicula = {
          id: lastId,
          title,
          description,
        };

        // Añadir la película al array
        peliculas.push(pelicula);

        // Guardar el array actualizado en localStorage
        this.storage.save(peliculas);

        // Añadir la película al listado visualmente sin borrar las anteriores
        this.list.addToList(pelicula);

        // Limpiar los campos del formulario
        this.title_field.value = "";
        this.description_field.value = "";

        // Mensaje de confirmación en la consola
        console.log(
          `Se ha guardado la película: "${title}" con descripción: "${description}".`
        );
      } else {
        alert("Por favor, rellena ambos campos correctamente.");
      }
    });
  }
}
