// 3) Sukurti Klasę, kurios pagalba galima būtų kurti SELECT elementą,
//  kurio viduje būtų OPTION'ai. (kas be ko, galimybė suteikti tekstus ir atributus).

export class Select {
    constructor(data, atributas){
        this.data = data;
        this.atributas = atributas;
        return this.render();
    }
    render(){
        const sel = document.createElement('select');

        for (const attribute in this.atributas){
            sel.setAttribute(attribute, this.atributas[attribute]);
        }

        this.data.forEach(item => {
            const option = document.createElement('option');
            const optionText = document.createTextNode(item.text);
            option.appendChild(optionText);

            sel.appendChild(option);
        });
        return sel;
    }
}