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
      this.id = 1;
    } else {
      this.id = peliculas[peliculas.length - 1].id + 1;
    }

    return peliculas;
  }

  getLastId() {
    return this.id;
  }

  save(peliculas) {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }
}
