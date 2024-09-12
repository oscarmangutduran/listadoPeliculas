export default class List {
  constructor() {
    // Seleccionamos el contenedor donde se van a mostrar las películas
    this.content = document.querySelector("#content");
  }

  peliculaTemplate(pelicula) {
    // Retornamos el HTML para la película
    return `
          <article class="peli-item" id="peli-${pelicula.id}">
            <h3 class="title">${pelicula.title}</h3>
            <p class="description">${pelicula.description}</p>
            <button class="edit" data-id="${pelicula.id}">Editar</button>
            <button class="delete" data-id="${pelicula.id}">Borrar</button>
          </article>
        `;
  }

  addToList(pelicula) {
    // Insertamos el HTML generado al final del contenido actual
    let pelicula_html = this.peliculaTemplate(pelicula);
    this.content.insertAdjacentHTML("beforeend", pelicula_html);
  }

  show(peliculas) {
    // Vaciamos el contenido actual y mostramos todas las películas
    this.content.innerHTML = "";

    peliculas.forEach((pelicula) => {
      this.addToList(pelicula);
    });
  }
}
