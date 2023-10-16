//  1.4) Bet kokį elementą su atributais ir tekstu. (vienas iš parametrų nurodo kok tag'as)

export class Any {
    constructor(tag, element, atributas){
        this.tag = tag;
        this.element = element;
        this.atributas = atributas;
        return this.render();
    }
    render(){
        const element = document.createElement(this.tag);
        const elementText = document.createTextNode(this.element);
        element.appendChild(elementText);

        for (const any in this.atributas){
            element.setAttribute(any, this.atributas[any]);
        }

        return element;
    }
}