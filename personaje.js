export class personaje{
    #vida = 20;
    #defensa = 20;
    #dano = 5;
    constructor(){
        this.setNombre = undefined;
    }
    set setNombre(nom="jhon"){
        this.nombre = nom;
    }
    set setVida(puntos){
        this.#vida += puntos;
    }
    set setDefensa(puntos){
        this.#defensa += puntos;
    }
    get getDefensa(){
        return this.#defensa;
    }
    recibirAtaque(ataque){
        this.#vida += ataque;
    }
    atacar(instrumento = 0){
        if(instrumento) this.#dano += instrumento;
        return instrumento;
    }
    get getDano(){
        return this.#dano;
    }
    atacarPersonaje(obj){
        let defense = obj.getDefensa;
        let ataque = this.#dano;
        let resultado = defense-ataque;
        if(resultado<0){
            obj.recibirAtaque(resultado);
        }
    }
}