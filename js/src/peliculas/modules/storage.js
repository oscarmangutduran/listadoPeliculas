export default class Storage {
  constructor() {
    this.id = 1;
  }

  getData() {
    // Obtener las películas desde localStorage
    let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

    // Si no hay películas, añadir una por defecto
    if (peliculas.length < 1) {
      peliculas = [
        {
          id: 0,
          title: "Desarrollo Web",
          description: "oscarmangut.dev",
        },
      ];
      this.id = 1; // Reiniciar el ID
    } else {
      // Si hay películas, calcular el ID del último elemento + 1
      this.id = peliculas[peliculas.length - 1].id + 1;
    }

    return peliculas;
  }

  getLastId() {
    return this.id; // Devolver el último ID disponible
  }

  save(peliculas) {
    // Guardar el array actualizado en localStorage
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }
}
