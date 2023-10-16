// 1.1) IMG elementą su atributais.

export class Image{
    constructor(photo, atributas){
        this.photo = photo;
        this.atributas = atributas;
        return this.render();
    }
    render(){
        const image = document.createElement('img');
        image.setAttribute('src', this.photo);

        for (const foto in this.atributas){
            image.setAttribute(foto, this.atributas[foto]);
        }

        return image;
    }
};
