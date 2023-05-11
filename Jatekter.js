import Kartya from "./kartya.js"

class Jatekter {
    #kepekLista = [];
    #kivalasztottKepekLista = [];

    constructor (kepekLista) {
        this.#kepekLista = kepekLista;
        let szuloElem = $("main");
        for(let i=0; i < this.#kepekLista.length; i++) {
            let k = new Kartya(this.#kepekLista[i], szuloElem);
        }

        $(window).on("fordít",(event)=>{
            this.#kivalasztottKepekLista.push(event.detail)
            console.log(this.#kivalasztottKepekLista)
            //ha a this.#kivalasztottKepekLista.length ==2
            //akk:
            //1. ha a két kép elérési útja event.detail.getAdat() azonos, akk rejtse el a képeket
            //2. ha nem azonos, akk fordítsa vissza, azaz a háttérképet jelenítse meg
            //3. ha két kép van kiválasztva, akk ne tudjunk a többi képre kattintani, amíg el nem tűnnek, v vissza nem fordulnak
        })
    }
}
export default Jatekter