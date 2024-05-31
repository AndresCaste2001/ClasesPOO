import {personaje} from "./personaje.js"
import {mago} from "./mago.js"
import {guerrero} from "./guerrero.js"  

let personajeDefault = new personaje();
let magoDefault = new mago("Juancho");
let guerreroDefault = new guerrero("Miguelito");

console.log(personajeDefault);
console.log(magoDefault);
console.log(guerreroDefault);

magoDefault.atacarPersonaje(guerreroDefault);

console.log(guerreroDefault);

magoDefault.atacarPersonaje(guerreroDefault);

console.log(guerreroDefault);