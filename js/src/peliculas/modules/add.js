export default class Add {
  constructor() {
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

      // Datos a guardar
      let title = this.title_field.value.trim(); // Eliminamos espacios en blanco
      let description = this.description_field.value.trim();

      //Pequeña validación
      if (title != "" || description != "") {
        //Crear un objeto a guardar
        let pelicula = {
          id: 1,
          title,
          description,
        };

        //Guardar en LocalStorage
        localStorage.setItem("peliculas", JSON.stringify(pelicula));

        //Actualizar listado
      } else {
        alert("Introduce correctamente los datos en el formulario");
      }

      // Mostrar el mensaje en la consola con los datos
      console.log(
        `Acabas de enviar el formulario con el título: "${title}" y la descripción: "${description}".`
      );
    });
  }
}
