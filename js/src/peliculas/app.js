import Add from "./modules/add.js";
import List from "./modules/list.js";
import Storage from "./modules/storage.js";

export default class App {
  constructor() {
    // Inicializar la clase Add
    this.add = new Add();
    this.list = new List();
    this.Storage = new Storage();
  }

  load() {
    //Añadir pelicula
    this.add.peliculaSave();

    //Conseguir array objetos localStorage
    const pelicualas = this.Storage.getData();

    //Listar peliculas
    this.list.show(pelicualas);
    // Añadir película (este método ya se llama automáticamente en el constructor de Add)
    console.log("La aplicación de películas ha sido inicializada");
  }
}
