import Storage from "./storage.js";
import List from "./list.js";

export default class Add {
  constructor() {
    // Crear instancias de Storage y List
    this.storage = new Storage();
    this.list = new List();

    // Conseguir los elementos del DOM
    this.title_field = document.querySelector("#title");
    this.description_field = document.querySelector("#description");
    this.save_btn = document.querySelector("#save");

    // Asignar evento click al botón de guardar
    this.peliculaSave();

    // Mostrar las películas almacenadas al cargar la página
    this.list.show(this.storage.getData());
  }

  peliculaSave() {
    this.save_btn.addEventListener("click", (evt) => {
      evt.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

      // Obtener datos del formulario
      let title = this.title_field.value.trim();
      let description = this.description_field.value.trim();

      // Validación de campos
      if (title !== "" && description !== "") {
        // Obtener las películas almacenadas y el ID
        let peliculas = this.storage.getData();
        let lastId = this.storage.getLastId();

        // Crear un nuevo objeto de película
        let pelicula = {
          id: lastId,
          title,
          description,
        };

        // Añadir la película al array de películas
        peliculas.push(pelicula);

        // Guardar el array actualizado en localStorage
        this.storage.save(peliculas);

        // Añadir la nueva película a la lista visualmente
        this.list.addToList(pelicula);

        // Limpiar los campos del formulario
        this.title_field.value = "";
        this.description_field.value = "";

        // Mensaje de confirmación en consola
        console.log(
          `Se ha guardado la película: "${title}" con descripción: "${description}".`
        );
      } else {
        alert("Por favor, rellena ambos campos correctamente.");
      }
    });
  }
}
