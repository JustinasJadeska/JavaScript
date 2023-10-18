// 1.2) P elementą su atributais ir tekstu.

export class Paragraph {
    constructor(paragrafas, atributas){
        this.paragrafas = paragrafas;
        this.atributas = atributas;
        return this.render();
    }
    render(){
        const par = document.createElement('p');
        const parText = document.createTextNode(this.paragrafas);
        par.appendChild(parText);
// ciklo pritaikymas render metode, leidžia man pritaikyti keletą atributų (class, id, style...) paragrafo elemente.
        for (const att in this.atributas){ 
            par.setAttribute(att, this.atributas[att]); 
        }

        return par;
    }
};

