import { personaje } from "./personaje.js";


export class guerrero extends personaje{
    constructor(nom){
        super();
        this.nombre = nom;
        this.setDefensa = 100;
        this.setVida = 100;
        this.atacar(10);
    }
}