import Add from "./modules/add.js";

export default class App {
  constructor() {
    // Inicializar la clase Add
    this.add = new Add();
  }

  load() {
    // Añadir película (este método ya se llama automáticamente en el constructor de Add)
    console.log("La aplicación de películas ha sido inicializada");
  }
}
