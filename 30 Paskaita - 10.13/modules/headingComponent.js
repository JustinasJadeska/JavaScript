// 1.3) H1-H6 elementą su atributais ir tekstu.

export class Heading{
    constructor(head, atributas){
        this.head = head;
        this.atributas = atributas;
        return this.render();
    }
    render(){
        const heading = document.createElement('h1');
        const headingText = document.createTextNode(this.head);
        heading.appendChild(headingText);

        for (const heads in this.atributas){
            heading.setAttribute(heads, this.atributas[heads]);
        }

        return heading;
    }
};
