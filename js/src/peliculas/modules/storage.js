export default class Storage {
  constructor() {
    this.id = 1;
  }

  getData() {
    // Obtener las películas guardadas en LocalStorage
    let peliculas = JSON.parse(localStorage.getItem("peliculas"));

    // Si no existen películas, inicializamos el array con una película por defecto
    if (!peliculas || peliculas.length < 1) {
      peliculas = [
        {
          id: 0,
          title: "Desarrollo Web",
          description: "oscarmangut.dev",
        },
      ];
      this.id = 1; // Reiniciar el ID
    } else {
      this.id = peliculas[peliculas.length - 1].id + 1; // Incrementar ID
    }

    return peliculas;
  }

  getLastId() {
    return this.id; // Devolver el último ID calculado
  }

  save(data) {
    // Obtener las películas actuales
    let peliculas = this.getData();

    // Añadir la nueva película al array
    peliculas.push(data);

    // Guardar el array actualizado en LocalStorage
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }
}
