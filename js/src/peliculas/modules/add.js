import Storage from "./storage.js";

export default class Add {
  constructor() {
    // Crear objetos
    this.storage = new Storage();

    // Conseguir los elementos del DOM que se van a utilizar
    this.title_field = document.querySelector("#title");
    this.description_field = document.querySelector("#description");
    this.save_btn = document.querySelector("#save");

    // Llamar al método peliculaSave para asignar el evento al botón
    this.peliculaSave();
  }

  peliculaSave() {
    this.save_btn.addEventListener("click", (evt) => {
      evt.preventDefault(); // Evitar el comportamiento predeterminado de enviar el formulario

      // Conseguir datos actualizados
      let peliculas = this.storage.getData();
      let lastId = this.storage.getLastId();
      console.log(peliculas, lastId);

      // Datos a guardar
      let title = this.title_field.value.trim(); // Eliminamos espacios en blanco
      let description = this.description_field.value.trim();

      // Pequeña validación (corregido el operador)
      if (title !== "" && description !== "") {
        // Crear un objeto a guardar con ID dinámico
        let pelicula = {
          id: lastId,
          title,
          description,
        };
        //Añadir asl array de objetos
        peliculas.push(pelicula);

        // Guardar en LocalStorage
        this.storage.save(peliculas);

        // Limpiar campos del formulario después de guardar
        this.title_field.value = "";
        this.description_field.value = "";

        // Mostrar el mensaje en la consola con los datos
        console.log(
          `Acabas de enviar el formulario con el título: "${title}" y la descripción: "${description}".`
        );
      } else {
        alert("Introduce correctamente los datos en el formulario");
      }
    });
  }
}
