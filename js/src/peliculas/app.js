import Add from "./modules/add.js";
import List from "./modules/list.js";
import Storage from "./modules/storage.js";
import search from "./modules/search.js"; // El nombre del import debe coincidir con el export de la función

export default class App {
  constructor() {
    // Inicializar las clases
    this.add = new Add();
    this.list = new List();
    this.storage = new Storage();

    // Cargar la aplicación
    this.load();
  }

  load() {
    // Añadir película
    this.add.peliculaSave();

    // Cargar las películas del localStorage y mostrarlas en la lista
    const peliculas = this.storage.getData();

    // Listar películas
    this.list.show(peliculas);

    // Buscar películas (corregido: uso adecuado de la función search)
    search(); // Llamar a la función correctamente

    // Mensaje de consola para confirmar que la aplicación ha cargado
    console.log("La aplicación de películas ha sido inicializada");
  }
}
