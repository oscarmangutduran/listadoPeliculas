import Storage from "./storage.js";
import List from "./list.js";

export default function () {
  // Crear los objetos
  const storage = new Storage();
  const list = new List();

  // Conseguir datos de películas
  let peliculas_stored = storage.getData();
  let peliculas_viewed = document.querySelectorAll(".peli-item");

  // Recorrer películas mostradas
  peliculas_viewed.forEach((pelicula) => {
    // Seleccionar botón de editar
    let edit_btn = pelicula.querySelector(".edit");

    // Asignar un evento click al botón de editar
    edit_btn.onclick = function () {
      // Conseguir el id de la película a editar
      const pelicula_id = this.getAttribute("data-id");

      // Quitar los botones antiguos (editar y borrar)
      edit_btn.remove();
      pelicula.querySelector(".delete").remove();

      // Añadir formulario HTML para editar
      let pelicula_edit_html = `
        <div class="edit_form">
          
          <h3 class="title">Editar</h3>
          <form>
            <input type="text" class="edited_title" value="${
              pelicula.querySelector(".title").innerHTML
            }" />
            <textarea class="edited_description">${
              pelicula.querySelector(".description").innerHTML
            }</textarea>
            <input type="submit" class="update" value="Actualizar" />
          </form>
        </div>
      `;

      // Añadir el formulario de edición a la película
      pelicula.innerHTML += pelicula_edit_html;

      // Seleccionar el botón de actualizar
      let update_btn = pelicula.querySelector(".update");

      // Asignar evento al botón de actualizar
      update_btn.onclick = function (e) {
        e.preventDefault();

        // Obtener los nuevos valores del formulario
        let edited_title = pelicula.querySelector(".edited_title").value;
        let edited_description = pelicula.querySelector(
          ".edited_description"
        ).value;

        // Encontrar el índice de la película a editar en el array almacenado
        const pelicula_index = peliculas_stored.findIndex(
          (p) => p.id === parseInt(pelicula_id)
        );

        if (pelicula_index !== -1) {
          // Actualizar los datos de la película en el array
          peliculas_stored[pelicula_index].title = edited_title;
          peliculas_stored[pelicula_index].description = edited_description;

          // Guardar el array actualizado en localStorage
          storage.save(peliculas_stored);

          // Volver a mostrar el listado actualizado
          list.show(peliculas_stored);
        }
      };
    };
  });
}
