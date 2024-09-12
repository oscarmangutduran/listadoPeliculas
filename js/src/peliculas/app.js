import Add from "./modules/add.js";
import List from "./modules/list.js";
import Storage from "./modules/storage.js";

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
    // Cargar las películas del localStorage y mostrarlas en la lista
    const peliculas = this.storage.getData();
    this.list.show(peliculas);

    // Mensaje de consola para confirmar que la aplicación ha cargado
    console.log("La aplicación de películas ha sido inicializada");
  }
}
