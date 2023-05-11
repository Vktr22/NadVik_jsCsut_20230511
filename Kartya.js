import { kepekLista } from "./adat.js";

class Kartya {
    #adat = ""
    #divElem //html elem
    #imgElem //html elem
    
    constructor (adat, szuloElem) {
        this.#adat = adat;
        let txt = "";
        txt += '<div><img src=""></div>';
        szuloElem.append(txt);
        this.#divElem = szuloElem.children("div:last-child");
        this.#imgElem = this.#divElem.children("img:last-child");
        this.setKep("./kepek/hatter.jpg");
        this.#divElem.on("click", ()=>{
            this.setKep(this.#adat)
            this.trigger()
        })
    }

    setKep(kep){
        this.#imgElem.attr("src",kep)
    }

    getAdat(){
        return this.#adat;
    }

    trigger(){
        const ev = new CustomEvent("trigger", {detail: this.#adat});
        dispatchEvent(ev);
    }
}

export default Kartya;