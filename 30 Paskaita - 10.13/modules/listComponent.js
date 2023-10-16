// 2) Sukurti Klasę, kurios pagalba galima būtų kurti OL arba UL elementus
//  su LI jų viduje. (kas be ko, galimybė suteikti tekstus ir atributus)

export class Lists{
    constructor(data, atributas){
        this.data = data;
        this.atributas = atributas;
        return this.render();
    }
    render(){
        const unor = document.createElement('ul');

        for (const attribute in this.atributas){
            unor.setAttribute(attribute, this.atributas[attribute]);
        }

        this.data.forEach(item => {
        const list = document.createElement('li');
        const listText = document.createTextNode(item.text); // Content of list item
        list.appendChild(listText);

        unor.appendChild(list);
    });
        return unor;
    }
}