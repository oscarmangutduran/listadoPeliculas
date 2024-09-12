import Storage from "./storage.js";
import List from "./list.js";

export default function deleteOfList() {
  // Crear objetos
  const storage = new Storage();
  const list = new List();

  // Obtener las películas almacenadas
  let peliculas_stored = storage.getData();
  let peliculas_viewed = document.querySelectorAll("#content .peli-item");

  // Recorrer las películas mostradas
  peliculas_viewed.forEach((pelicula) => {
    // Capturar el botón de eliminar
    let delete_btn = pelicula.querySelector(".delete");

    // Aplicar evento al botón
    delete_btn.onclick = function () {
      // Conseguir el id de la película que quiero borrar
      const pelicula_id = this.getAttribute("data-id"); // Cambiado a "data-id"

      // Filtrar el array para eliminar la película seleccionada
      const new_peliculas_stored = peliculas_stored.filter(
        (p) => p.id !== parseInt(pelicula_id)
      );

      // Actualizar los datos en localStorage
      storage.save(new_peliculas_stored);

      // Mostrar el listado actualizado
      list.show(new_peliculas_stored);
    };
  });
}
