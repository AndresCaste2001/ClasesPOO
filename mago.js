import { personaje } from "./personaje.js";

export class mago extends personaje{
    constructor(nom){
        super();
        this.nombre = nom;
        this.setVida = 80;
        this.atacar(120)
    }
}