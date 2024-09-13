import Storage from "./storage.js";
import List from "./list.js";

export default function () {
  // Crear los objetos
  const storage = new Storage();
  const list = new List();

  // Conseguir elementos del DOM
  let content = document.querySelector("#content");
  let search_btn = document.querySelector("#search");

  // Verificar si los elementos existen en el DOM
  if (!content || !search_btn) {
    console.error("No se encontró el botón de búsqueda o el contenido.");
    return;
  }

  // Aplicar evento al formulario de búsqueda
  search_btn.onclick = (evt) => {
    evt.preventDefault();

    // Conseguir el texto introducido en el campo de búsqueda
    let search_field = document.querySelector("#search_field");
    if (!search_field) {
      console.error("No se encontró el campo de búsqueda.");
      return;
    }

    let wanted = search_field.value.trim().toLowerCase(); // Corregido: uso de 'value' para obtener el texto

    // Conseguir datos de películas almacenadas
    let peliculas_stored = storage.getData();

    // Aplicar filtro para encontrar la película
    const new_peliculas = peliculas_stored.filter((pelicula) => {
      return pelicula.title.toLowerCase().includes(wanted); // Corregido: uso adecuado de toLowerCase()
    });

    // Mostrar el listado de coincidencias
    if (new_peliculas.length <= 0) {
      content.innerHTML = "<div><h2>No hay coincidencias</h2></div>";
    } else {
      list.show(new_peliculas);
    }

    return false;
  };
}
